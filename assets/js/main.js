window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

$(document).ready(function(){
	$("section").fitVids();
	$("form").validate();
	$('input, textarea').placeholder();
});

$("a[href='#top']").click(function(){
	$("html, body").animate({ scrollTop: 0 }, "fast");
	return false;
});

$(".open").click(function(){
	$("nav").toggleClass("hidden");
});

$(".close").click(function(){
	$("nav").toggleClass("hidden");
});