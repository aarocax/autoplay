(function($, window, document) {



	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    margin:10,
    nav:true,
    video:true,
    autoplay: true,
    autoplayTimeout: 8000,
    onInitialized: function (event) {
        var carouselVideo = document.getElementById("video-carousel");
        carouselVideo.loop = true;
        carouselVideo.muted = true;
        console.log('Initialized play...');
        //carouselVideo.play();
        var promise = document.querySelector('video').play();

				if (promise !== undefined) {
				    promise.catch(error => {
				        // Auto-play was prevented
				        // Show a UI element to let the user manually start playback
				        console.log('No autoplay...');
				    }).then(() => {
				        // Auto-play started
				        console.log('Sí autoplay...');
				    });
				}
      },

    onTranslated: function (event) {
      var carouselVideo = document.getElementById("video-carousel");
      if (event.target.querySelector(".active #video-carousel") != null) {
      	console.log('play...');
        carouselVideo.play();  
      } else {
        carouselVideo.pause();
        console.log('pause...');
      }
    }
	})

}(window.jQuery, window, document));