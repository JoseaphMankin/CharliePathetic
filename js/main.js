M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { edge: 'right' });
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, {
		numVisible: 5,
		indicators: true,
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, options);
});
