let { pathname } = window.location;

let text;

try {
  text = require(`.${pathname}`).default;
} catch (e) {
  text = '404 not found';
}

document.body.innerHTML = text;
