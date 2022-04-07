
$(function () {
    $("li").slice(0, 53).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("li:hidden").slice(0, 53).slideDown();
        if ($("li:hidden").length == 0) {
            $("li").fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 600);
    });
});

$('.top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop .top').fadeIn();
    } else {
        $('.totop .top').fadeOut();
    }
});

$(window).load(function() {
 $('#loadBody').toggle({ direction: "right" }, 100);
});
    $(document).ready(function(){
        
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
            localStorage.selectedTab = $(this).index() + 1;
        });

	if (localStorage.selectedTab) {
    	var tb = localStorage.selectedTab;
      var tab = "li.tab-link[data-tab='tab-" + tb + "']";
    	$('li.current').removeClass('current');
      $(tab).addClass('current');
}
    });
var keScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > keScrollTop){
    $(".ats-kanan, .ats-kiri").fadeOut('400');
    } else {
    $(".ats-kanan, .ats-kiri").fadeIn('400');
    }
    keScrollTop = st;
 });
var mnScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > mnScrollTop){
    $(".panel, .accordion").fadeOut('400');
    } else {
    $(".panel, .accordion").fadeIn('400');
    }
    mnScrollTop = st;
 });

var auScrollTop= 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > auScrollTop){
    $("#aya").fadeOut('400');
    } else {
    $("#aya").fadeIn('400');
    }
    auScrollTop = st;
 });
 $(document).ready(function() { 
    $.rvFontsize({
        targetSection: '.ar',
        store: true, // store.min.js required!
        controllers: {
            appendTo: '#rvfs-controllers',
            showResetButton: true
        }
    }); 
});

$(document).ready(function() { 
    $.rvltnFontsize({
        targetSection: '.ltn, .tj',
        store: true, // store.min.js required!
        controllers: {
            appendTo: '#rvfsltn-controllers',
            showResetButton: true
        }
    }); 
});

$(function() {
  var status = localStorage.getItem('chkStatus');
  if(status == 'false'){
    $(".tj, .nmsurah").css("display", "none");
    $(".tjBox").attr('checked', false)
  }
  else{
    $(".tj, .nmsurah").css("display", "block");
    $(".tjBox").attr('checked', true)
  }
  $(".tjBox").click(function() {
    if (this.checked) {
      $(".tj, .nmsurah").show();
    }
    else {
      $(".tj, .nmsurah").hide();
    }
    localStorage.setItem("chkStatus", this.checked);
  });
}); 
$(function() {
  var status = localStorage.getItem('ltnStatus');
  if(status == 'true'){
    $(".ltn").css("display", "block");
    $(".ltnBox").attr('checked', true)
  }
  else{
    $(".ltn").css("display", "none");
    $(".ltnBox").attr('checked', false)
  }
  $(".ltnBox").click(function() {
    if (this.checked) {
      $(".ltn").show();
    }
    else {
      $(".ltn").hide();
    }
    localStorage.setItem("ltnStatus", this.checked);
  });
}); 

$(function () {
  $('#select_font').change(function () {
        var change_font = $(this).val();
        localStorage.setItem("select_font", $(this).val());
        $(".ar").css("font-family", change_font);
    });
 });
$(document).ready(function () {
 if (localStorage.getItem("select_font") != null) {
        $('#select_font').val(localStorage.getItem("select_font")).trigger("change");
    }
  });
    

//DARK ABLUE
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('dark',true);
			localStorage.removeItem('light', false);	
			$('.ablue').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('light',true);
			localStorage.removeItem('dark',false);	
			$('.ablue').css("color", '#4370f7');
  		});
  		var getLocalDarkVar = localStorage.getItem('dark');
  		if(getLocalDarkVar == "true") {
  			console.log("dark Theme");
  			$('.ablue').css("color", '');
  		}else {
  			console.log("Light Theme");
  			$('.ablue').css("color", '#4370f7');
  		}
  	});
//DRAK AGR
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAgr',true);
			localStorage.removeItem('lightAgr', false);	
			$('.agr').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAgr',true);
			localStorage.removeItem('darkAgr',false);	
			$('.agr').css("color", '#8bb806');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAgr');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAgr Theme");
  			$('.agr').css("color", '');
  		}else {
  			console.log("LightAgr Theme");
  			$('.agr').css("color", '#8bb806');
  		}
  	});
  //DRAK AGR2
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAgr2',true);
			localStorage.removeItem('lightAgr2', false);	
			$('.agr2').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAgr2',true);
			localStorage.removeItem('darkAgr2',false);	
			$('.agr2').css("color", '#0bb0d9');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAgr2');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAgr2 Theme");
  			$('.agr2').css("color", '');
  		}else {
  			console.log("LightAgr2 Theme");
  			$('.agr2').css("color", '#0bb0d9');
  		}
  	});
  //DRAK AORG
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAorg',true);
			localStorage.removeItem('lightAorg', false);	
			$('.aorg').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAorg',true);
			localStorage.removeItem('darkAorg',false);	
			$('.aorg').css("color", '#FF8C00');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAorg');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAorg Theme");
  			$('.aorg').css("color", '');
  		}else {
  			console.log("LightAorg Theme");
  			$('.aorg').css("color", '#FF8C00');
  		}
  	});
 //DRAK ARED
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAred',true);
			localStorage.removeItem('lightAred', false);	
			$('.ared').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAred',true);
			localStorage.removeItem('darkAred',false);	
			$('.ared').css("color", '#ff471a');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAred');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAred Theme");
  			$('.ared').css("color", '');
  		}else {
  			console.log("LightAred Theme");
  			$('.ared').css("color", '#ff471a');
  		}
  	});
//DRAK APING
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAping',true);
			localStorage.removeItem('lightAping', false);	
			$('.aping').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAping',true);
			localStorage.removeItem('darkAping',false);	
			$('.aping').css("color", 'deeppink');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAping');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAping Theme");
  			$('.aping').css("color", '');
  		}else {
  			console.log("LightAorg Theme");
  			$('.aping').css("color", 'deeppink');
  		}
  	});
//DRAK AUNGU
$(document).ready(function(){
  		$('#dark').click(function(){
			localStorage.setItem('darkAungu',true);
			localStorage.removeItem('lightAungu', false);	
			$('.aungu').css("color", '');		
  		});
  		$('#light').click(function(){
			localStorage.setItem('lightAungu',true);
			localStorage.removeItem('darkAungu',false);	
			$('.aungu').css("color", '#9933ff');
  		});
  		var getLocalDarkVar = localStorage.getItem('darkAungu');
  		if(getLocalDarkVar == "true") {
  			console.log("darkAungu Theme");
  			$('.aungu').css("color", '');
  		}else {
  			console.log("LightAungu Theme");
  			$('.aungu').css("color", '#9933ff');
  		}
  	});
$(document).ready(function(){
  $("button, .zoom, .zoom1").click(function(){
    $("#aya").slideUp();
  });
  $(".f-str, .tj, .c, .ltn,").click(function(){
    $("#aya").slideDown();
  });
});
$(document).ready(function(){
  $("#myInput-tf").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList-tf button").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList a").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });  });});

function crFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function scrFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("tejaul");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function(){$('#live-search').hide();$('a#ts').click(function() {$('#live-search').toggle(0);return false;});});
	$(document).ready(function(){$('#mn').hide();$('a#tmn').click(function() {$('#mn').toggle(100);return false;});});
		$(document).ready(function(){$('#mnj').hide();$('a#tmnj').click(function() {$('#mnj').toggle(100);return false;});});
	$(document).ready(function(){$('#msc').hide();$('a#tmsc').click(function() {$('#msc').toggle(100);return false;});});
		$(document).ready(function(){$('#sag').hide();$('a#tsag').click(function() {$('#sag').toggle(0);return false;});});
	$(document).ready(function(){$('#mrs').hide();$('a#tmrs').click(function() {$('#mrs').toggle(0);return false;});});
	$(document).ready(function(){$('#abds').hide();$('a#tabds').click(function() {$('#abds').toggle(0);return false;});});
	$(document).ready(function(){$('#gs').hide();$('a#tg').click(function() {$('#gs').toggle(0);return false;});});
	$(document).ready(function(){$('#sgs').hide();$('a#stg').click(function() {$('#sgs').toggle(0);return false;});});

$(document).ready(function(){
    $(".button-ltn").click(function(){
        $(".ltn").toggle();    });});

$(document).ready(function(){
    $(".button-tj").click(function(){
        $(".tj").toggle();    });});

 $(document).ready(function(){
    $(".button-zoom").click(function(){
        $(".zoom1").toggle("slow");    });});

$(document).ready(function(){
    $(".button-ayat").click(function(){
        $(".cariayat, .input").toggle( "slow" );    });});

 $(document).ready(function(){
    $(".mn-tafsir,").click(function(){
        $(".cont-tafsir, .input-tf").toggle(50);    });});

  $("p, a").click(function(){
  $(".cariayat, .input").hide();});

 $(".exit").click(function(){
  $(".cont-tafsir, .input-tf").hide();});

$(document).ready(function(){
    $("#ty").click(function(){
        $("#aya").toggle();    });});

$(document).ready(function(){
  $(".slide-box").click(function(){
    $(".box").toggle("500");
  });
});

$(document).ready(function(){
  $(".slide-box").click(function(){
    $(".box-inner").toggle("500");
  });
});
$(document).ready(function(){
  $("#z-arab").click(function(){
    $(".container2").toggle("500");
  });
});

 $(".close-box, #z-arab").click(function(){
  $(".box, .container2").hide(300);});
$(".slide-box").click(function(){
  $(".container2").hide(300);});

$(".button-ayat, #ty, .mn-tafsir").click(function(){
  $(".box").hide(400);});

$(".slide-box, #ty, .mn-tafsir").click(function(){
  $("input, .cariayat").hide(400);});
$(".accordion").click(function(){
  $(".box, input, .cariayat, .container2").hide(300);});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function noHistory(aObj) { document.location.replace(aObj.href); return false; }

$(document).ready(function() {
  if (localStorage.getItem("mode") == "dark-theme") {
    $("body").addClass("dark-theme");
  } else if (localStorage.getItem("mode") == "light-theme") {
    $("body").removeClass("dark-theme");
  }
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (localStorage.getItem("mode") == "light-theme") {
    $("body").removeClass("dark-theme");
  } else if (mq.matches) {
    $("body").addClass("dark-theme");
  }
});
$('body').toggleClass(localStorage.toggled);
function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != 'dark') {
    $('body').toggleClass('dark', true);
    localStorage.toggled = "dark";
     
  } else {
    $('body').toggleClass('dark', false);
    localStorage.toggled = "";
  }
}
if ($('body').hasClass('dark')) {
   $( '.checkBox' ).attr( "checked", true )
} else {
  $( '.checkBox' ).attr( "checked", false )
}
$(function(){var hash = window.location.hash;if(hash){window.location.href = hash;}var e=audiojs.createAll({trackEnded:function(){var e=$("#oke li.playing").next();if(!e.length)e=$("#oke li").first();e.addClass("playing").siblings().removeClass("playing");$("html,body").animate({scrollTop: e.offset().top}, 500);t.load($("a",e).attr("data-src"));t.play()}});var t=e[0];first=$("#oke a").attr("data-src");$("#oke li").first().addClass("playing");t.load(first);$("#oke li").click(function(e){e.preventDefault();$(this).addClass("playing").siblings().removeClass("playing");$("html,body").animate({scrollTop: $(this).offset().top}, 500);t.load($("a",this).attr("data-src"));t.play()});$(document).keydown(function(e){var n=e.charCode?e.charCode:e.keyCode;if(n==39){var r=$("li.playing").next();if(!r.length)r=$("#oke li").first();r.click()}else if(n==37){var i=$("li.playing").prev();if(!i.length)i=$("#oke li").last();i.click()}else if(n==32){t.playPause()}})})

var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

var list = $("#fav-list");
var parent = list.parent();
function addFavList(){
	list.detach().empty().each(function(i){
		for (var x = 0; x < favorites.length; x++){
			$(this).append('<li>' + favorites[x] + '</li>');
			if (x == favorites.length - 1){
				$(this).appendTo(parent);
			}
		}
	});
}
addFavList();
$(document).delegate('.cart', 'click', function(e){
	var id = $(this).parent().html(),
	index = favorites.indexOf(id);
	if (!id) return;
		if (index == -1) {
		favorites.push(id);
   $().msgpopup({
    text: '<center><img class="okgif" src="png/ok.gif">Tandai ayat telah <b style="color:green"> tersimpan</b> !!</center>',
    type: 'error'
  });
	} 
	else {
		favorites.splice(index, 1);
		$(this).parent().removeClass('fav');
  $().msgpopup({
    text: '<center>  Tandai Ayat  telah<b style="color:red">terhapus</b> !!. </center>',
    type: 'error'
  });
	}
	localStorage.setItem('favorites', JSON.stringify(favorites));
	addFavList();
});
$(document).delegate('#delete', 'click', function(){
localStorage.removeItem("Activeli"); localStorage.removeItem("favorites");
   location.reload();	
});
// save
$(document).ready(function() {
  $("ul .cart").each(function(index) {
    if ($(this).attr('id') == localStorage.getItem("Activeli")) {
      $(this).addClass("active");
    }
  });
  response = JSON.parse(localStorage.getItem("wishlistID"));
  $('a[data-pdtId="' + response + '"]').addClass('active')

});
$('ul .cart').click(function() {
  $("ul .cart").removeClass("active");
  $(this).addClass("active");
  var id = $(this).attr("id");
  console.log(id);
  localStorage.setItem("Activeli", id); //create a localstorage
});
$(".button-ayat").click(function(){
  $(".Loader").show();
 $( ".Loader" ).html(  '<img src="png/loading.gif">' );
    $('.Loader').fadeOut(3000);
  });

