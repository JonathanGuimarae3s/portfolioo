onload = $(document).ready(() => {
	let owl = $(".owl-carousel");
	owl.owlCarousel({
		margin: 20,
		loop: true,
		items: 3.2,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		slideBy: 2,
		slideTransition: "linear",
		dots: false,
	});
});
