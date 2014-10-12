window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
$('input').on('click focusin', function() {
    this.value = '';
});
//Pixel Ratio Checker
//var dpr     = window.devicePixelRatio;  
//alert('Device Pixel Ratio: ' + dpr);  