$('nav ul.menu').find('li:has(ul)').children('a').removeAttr('href').addClass("indicator");

$(document).ready(function(){
	$("nav ul.menu ul").addClass("hidden");
	$("nav ul.menu li a.indicator").addClass("closed");
});

$('nav ul.menu').find('li:has(ul)').click(function() {
	$(this).find("ul").toggleClass("hidden");
	$(this).find(".indicator").toggleClass("closed");
});

$(".open").click(function(){
	$("nav").toggleClass("hidden");
});

$(".close").click(function(){
	$("nav").toggleClass("hidden");
});