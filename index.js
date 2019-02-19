// const ROOT = document.querySelector("div#root");
// const T = document.querySelector(".time");
// setInterval(function () {
// 	var t = new Date().toLocaleTimeString();
// 	T.innerHTML = t;
// }, 1000);
// function createAlert(container, text, lvl) { // 0 1 2
// 	let el = document.createElement('div');
// 	el.innerText = text;

// 	el.className = 'push';

// 	el.style.top = '100px';
// 	el.style.left = '100px';


// 	container.appendChild(el);
// 	setTimeout(() => {
// 		container.removeChild(el);
// 	}, 5000);
// }
// setTimeout(() => {
// 	createAlert(ROOT, "text", 1);
// }, 5000);

const FULL_BABELS = [];
function createBabel(idContainer, array) {
	const item = document.createElement('div');
	item.className = "babel";
	item.style.top = Math.random() * 500 + 'px';
	item.style.left = Math.random() * 500 + 'px';


	document
		.querySelector(`#${idContainer}`)
		.appendChild(item)
	array.push(item);

}

setInterval(() => {
	createBabel('root', FULL_BABELS);
}, 500);

setInterval(() => {
	let lastIndex = (FULL_BABELS.length - 1) * Math.random();
	for (let i = 0; i < lastIndex; i++) {
		let el = FULL_BABELS.shift();
		let p = FULL_BABELS[i].parentElement;
		el.removeChild(FULL_BABELS[i]);
	}


}, 5000);

// const FULL_BABELS1 = [];
// function createBabel1(idContainer) {
// 	const item = document.createElement('h1');
// 	item.className = "babel1";
// 	item.style.top = Math.random() * 500 + 'px';
// 	item.style.left = Math.random() * 500 + 'px';


// 	document
// 		.querySelector(`#${idContainer}`)
// 		.appendChild(item)
// 	FULL_BUBELS.push(item);

// }

// setInterval(() => {
// 	createBabel1('root');
// }, 5000);
function randNumO() {
	return Math.round(Math.random() * 100);
}
function generateTestHTML() {
	let html = '<ul>';
	for (let i = 0; i < 10; i++) {
		html += `<li>`
	}
	html += '</ul>'
	document.body.innerHTML = html;
}
generateTestHTML();
setInterval(() => {
	let i = document.querySelector('input');
	let items = document.querySelectorAll('li');
	items = Array.prototype.filter.call((items, (e) => {
		return +e.innerHTML < +i.value;
	});
	console.log(items);
}, 1000);

let html = "<ul>";
for (let i = 0; i < items.length; i++){
html += `<li>${items[i].innerHTML}</li>`

}
html+="</ul>";
res.innerHTML = html;
}, 1000);