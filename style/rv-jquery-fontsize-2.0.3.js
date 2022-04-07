;(function ($, window, document, undefined) {
    "use strict";

    var rvltnFontsize = "rvltnFontsize",
        defaults = {
            targetSection: 'body',
            store: false,
            storeIsDefined: !(typeof store === "undefined"),
            variations: 17,
            controllers: {
                append: true,
                appendTo: 'body',
                showResetButton: false,
                template : ''
            }
        };

    function Plugin(element, options) {
        var _self = this;

        _self.element = element;
        _self.options = $.extend({}, defaults, options);

        _self._defaults = defaults;
        _self._name = rvltnFontsize;

        _self.init();
    }

    Plugin.prototype = {

        init: function() {
            var _self = this,
                fn = function(){
                    _self.defineElements();
                    _self.getDefaultFontSize();
                };

            fn();

            if( _self.options.store === true && !(_self.options.storeIsDefined) ) {
               _self.dependencyWarning();
            }
        },

        dependencyWarning : function(){
            console.warn('When you difine "store: true", store script is required (https://github.com/ramonvictor/rv-jquery-fontsize/blob/master/js/store.min.js)'); 
        },

        bindControlerHandlers: function(){
           
            var _self = this;               
            
            // decrease fn
            _self.$decreaseButton = $('.rvfsltn-decrease');
            if( _self.$decreaseButton.length > 0){
                
                _self.$decreaseButton.on('click', function(e){
                    e.preventDefault();                    
                    var $el = $(this);

                    if(!$el.hasClass('disabled')){
                        var n = _self.getCurrentVariation();
                        if(n > 1){
                            _self.$target.removeClass('rvfsltn-' + n);
                            _self.$target.attr('data-rvfsltn', n-1);
                            if ( _self.options.store === true){
                                _self.storeCurrentSize();
                            }
                            _self.fontsizeChanged();
                        } 
                    }
                });
            }
            
            // increase fn
            _self.$increaseButton = $('.rvfsltn-increase');
            if( _self.$increaseButton.length > 0){
                _self.$increaseButton.on('click', function(e) { 
                    e.preventDefault();
                    var $el = $(this);

                    if(!$el.hasClass('disabled')){
                        var n = _self.getCurrentVariation();
                        if(n < _self.options.variations){
                            _self.$target.removeClass('rvfsltn-' + n);
                            _self.$target.attr('data-rvfsltn', n+1);
                            
                            if ( _self.options.store === true){
                                _self.storeCurrentSize();
                            }
                            _self.fontsizeChanged();
                        }
                    } 
                });
            }
            
            // reset the font size to its default
            _self.$resetButton = $(".rvfsltn-reset");
            if( _self.$resetButton.length > 0){
                _self.$resetButton.on('click', function(e){
                    e.preventDefault();
                    var $el = $(this);

                    if(!$el.hasClass('disabled')){
                        var n = _self.getCurrentVariation();
                        _self.$target.removeClass('rvfsltn-' + n);

                        _self.$target.attr('data-rvfsltn', _self.defaultFontsize);
                        if ( _self.options.store === true){
                            _self.storeCurrentSize();
                        }
                        _self.fontsizeChanged();
                    }
                });
            }

        },

        defineElements: function() {
            var _self = this;
            _self.$target = $( _self.options.targetSection );
          
            if( _self.options.controllers.append !== false ){
                var resetButton = _self.options.controllers.showResetButton ? '<a href="#" class="rvfsltn-reset btn" title="Default font size">&#128260;</a>' : '';
                var template = _self.options.controllers.template,
                    controllersHtml = '';
                _self.$appendTo = $( _self.options.controllers.appendTo );
                
                if( $.trim(template).length > 0 ){
                     controllersHtml = template;
                } else {
                    controllersHtml = '<div class="btn-group">' +
                                            '<a href="#" class="rvfsltn-decrease btn" title="Decrease font size">&#10134;</a></li>' +
                                            resetButton +
                                            '<a href="#" class="rvfsltn-increase btn" title="Increase font size">&#10133;</a></li>' +
                                      '</div>';
                }

                _self.$appendTo.html( controllersHtml );

                _self.bindControlerHandlers();
            }
        },
        
        getDefaultFontSize: function () {
            var _self = this,
                v = _self.options.variations;
            _self.defaultFontsize = 0;

            if(v % 2 === 0){
                _self.defaultFontsize = (v/2) + 1;
            } else {
                _self.defaultFontsize = parseInt((v/2) + 1, 10);
            }

            _self.setDefaultFontSize();
        },

        setDefaultFontSize: function(){
            var _self = this;
            
            if( _self.options.store === true && _self.options.storeIsDefined ){
                var currentFs = store.get('rvfsltn') || _self.defaultFontsize;
                _self.$target.attr("data-rvfsltn", currentFs );
            } else {
                _self.$target.attr("data-rvfsltn", _self.defaultFontsize );
            }

            _self.fontsizeChanged();
        },

        storeCurrentSize : function() {
            var _self = this;
            if( _self.options.storeIsDefined ) {
                store.set('rvfsltn', _self.$target.attr("data-rvfsltn"));                
            } else {
                _self.dependencyWarning();
            }
        },

        getCurrentVariation : function(){
            return parseInt( this.$target.attr("data-rvfsltn"), 10 );
        },

        fontsizeChanged : function(){
            var _self = this,
                currentFs = _self.getCurrentVariation();
            _self.$target.addClass( "rvfsltn-" +  currentFs);

            if(currentFs === _self.defaultFontsize){
                _self.$resetButton.addClass('disabled');
            } else{
                _self.$resetButton.removeClass('disabled');
            }

            if(currentFs === _self.options.variations){
                _self.$increaseButton.addClass('disabled');
            } else {
                _self.$increaseButton.removeClass('disabled');
            }

            if(currentFs === 1){
                _self.$decreaseButton.addClass('disabled');
            } else {
                _self.$decreaseButton.removeClass('disabled');
            }
        }
    };

    
    $.fn[rvltnFontsize] = function (options) {
        var _self = this;
        return _self.each(function () {
            if (!$.data(_self, "plugin_" + rvltnFontsize)) {
                $.data(_self, "plugin_" + rvltnFontsize, new Plugin(_self, options));
            }
        });
    };

    $[rvltnFontsize] = function() {
        var $window = $(window);
        return $window.rvltnFontsize.apply($window, Array.prototype.slice.call(arguments, 0));
    };


})(jQuery, window, document);
