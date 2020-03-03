var toggler = document.querySelector('#icon');
var ul = document.querySelector('.main-ul');
var nav = document.querySelector('.logo-plus-nav-container');
// var body = document.querySelector('body');

	toggler.addEventListener('click', function(){
			ul.classList.toggle("show");
		document.body.classList.toggle("body-scroll-fix");
});
