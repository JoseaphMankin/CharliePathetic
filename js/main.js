M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { edge: 'right' });
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);
});
