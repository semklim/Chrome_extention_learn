const saveToChromeStorage = (key, value) => {
	chrome.storage.local.set({ [key]: value });

};

const load = (keys) => {
	return chrome.storage.local.get(keys);
};


const el = document.querySelector('#clicker');
const screen = document.querySelector('#count');
let num = 0;

el.addEventListener('click', () => {
	num += 1;
	screen.innerHTML = num;
	saveToChromeStorage('click', num);
});

const init = async () => {
	const data = await load(['click']);
	num = data.click;
	screen.innerHTML = data.click;
};

init();
