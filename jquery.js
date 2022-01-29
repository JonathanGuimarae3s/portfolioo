$(document).ready(() => {
	let owl = $(".owl-carousel");
	owl.owlCarousel({
		margin: 10,
		loop: true,
		items: 3,
		autoplay: true,
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		slideBy: 2,
		dots: true,
		slideTransition: "ease-in-out",
	});
});
