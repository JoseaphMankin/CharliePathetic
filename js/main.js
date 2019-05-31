// $(document).ready(function() {
// 	$('.parallax').parallax();
// 	$('.materialboxed').materialbox();
// 	$('.button-collapse').sideNav();
// });

M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { edge: 'right' });
});
