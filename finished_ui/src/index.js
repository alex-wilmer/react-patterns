let { pathname } = window.location;
document.body.innerHTML = pathname;

require(`.${pathname}`);
