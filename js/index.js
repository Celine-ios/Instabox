var menuSlider = document.getElementsByClassName('menu-slider')[0];

var hideMenu = () => {
	menuSlider.style.width = '0%';
	menuSlider.style.display = 'none';
};
var displayMenu = () => {
	console.log(menuSlider);
	menuSlider.style.width = '20%';
	menuSlider.style.display = 'flex';
};
var chargeEvents = () => {
	if(sessionStorage.getItem('user')) {
		var menuIcon = document.getElementsByClassName('menu')[0];
		menuIcon.addEventListener('click', displayMenu);
		menuIcon.addEventListener('dblclick', hideMenu);
	} else {
		location.href = 'pages/login/index.html';
	}
};
chargeEvents();