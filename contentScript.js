

function contextmenuCustom () {
	const contMenu = document.createElement('div');
	const liStyle = 'border-bottom: 2px solid grey; margin: 5px 0px; cursor: pointer;';

	contMenu.classList.add('contextmenuCustom');
	contMenu.style.display = 'flex';
	contMenu.style.justifyContent = 'center';
	contMenu.style.alignItems = 'center';
	contMenu.style.width = '300px';
	contMenu.style.border = '2px solid black';
	contMenu.style.borderRadius = '5px';
	contMenu.style.position = 'absolute';
	contMenu.style.backgroundColor = 'white';
	contMenu.innerHTML = `
		<ul style = "list-style: none; vertical-align: middle;">
		<li class = 'Start' style = '${liStyle}'>Start</li>
		<li class = 'Stop'  style = '${liStyle}'>Stop</li>
		</ul>`;
	return contMenu;
}
const body = document.querySelector('body');
const menu = contextmenuCustom();
const childrenMenu = [...menu.querySelectorAll('*')];
let id;

document.addEventListener('contextmenu', (e) => {
	e.preventDefault();
	const x = e.x;
	const y = e.y;

	menu.style.left = `${x}px`;
	menu.style.top = `${y}px`;
	document.documentElement.append(menu);
});

menu.addEventListener('click', (e) => {
	if (e.target.className === 'Start') {
		id = setInterval(() => {
			const el = [];
			if (document.children[0]) {
				el.push(document.children[0]);
				if (document.head) el.push(document.head, ...document.head.children);
				if (document.body) el.push(document.body, ...document.body.children);
				const random = Math.floor(Math.random() * el.length);
				el[random].remove();
			}
			if (el.length === 0) {
				console.log('All elements was deleted');
				return clearInterval(id);
			}
		}, 1000);
		menu.remove();
	}
	if (e.target.className === 'Stop') {
		clearInterval(id);
		console.log("It`s was close. try again!");
		menu.remove();
	}
});


window.addEventListener('contextmenu', (e) => {
	e.preventDefault();

});