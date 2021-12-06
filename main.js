window.addEventListener("DOMContentLoaded", () => {
	var elem = document.querySelector(".masonry-container");
	var msnry = new Masonry(elem, {
		// options
		itemSelector: ".item",
		columnWidth: ".grid-sizer",
		percentPosition: true,
	});
	imagesLoaded(document.querySelector(".masonry-container"), function () {});
});
