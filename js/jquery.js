onload = $(document).ready(() => {
	let owl = $(".owl-carousel");
	owl.owlCarousel({
		margin: 20,
		loop: true,
		items: 3.2,
		autoplay: true,
		autoplayTimeout: 100000000000,
		autoplayHoverPause: true,
		slideBy: 1,
		slideTransition: "linear",
		dots: false,
	});
});
