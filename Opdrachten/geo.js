VAR app = app || {};

(function () {

	app.controller = {
		init: function () {
			app.gps.init();
			app.map.init();
			app.debug.init();
		}
	};

	app.gps = {

		init: function () {

		}

		available: function () {

		}

		setPosition: function () {

		}

		updatePosition: function () {

		}

		checkLocation: function () {

		}
	};

	app.map = {
		init: function () {

		}

		generate: function () {

		}

		calculateDistance: function () {

		}		
	};

	app.debug = {
		init: function () {

		}

		message: function () {

		}
	};


	app.controller.init();

	
})();