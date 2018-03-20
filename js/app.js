(function(){
	"use strict";

	angular.module('stopwatch',[])
	.controller('timeController',timeController);

	timeController.$inject = ['$timeout']
	function timeController($timeout){
		var times = this;

		times.timehh = 0;
		times.timemm = 0;
		times.timess = 0;
		times.orders = 0;
		console.log('initial', times.timehh)

		times.play = 0;
		// time starter play function
		times.timeStarter =function(){
			console.log('function starter')
			times.play = 1;
			times.timeStart();
		}
		//time start function
		times.timeStart = function(){
			console.log('function stime start')
			$timeout(function(){
				if (times.timess < 59 ) {
					times.timess += 1;
					console.log('function stime start + 1 secod')
				}else {
					if (times.timemm < 59 ) {
						times.timemm += 1;
						times.timess = 0;
						console.log('function stime start + 1 minute')
					} else {
						times.timehh += 1;
						times.timemm = 0;
						times.timess = 0;
						console.log('function stime start + 1 hour')
					}
				}
				if(times.play == 1){
					times.timeStart();
				}
				console.log('incrementing', times.timehh, times.timemm, times.timemm)
			},1000)
		}
		// pause function
		times.timePause = function(){
			times.play = 0;
		}
		times.Refresh = () =>{
			times.play = 0;
			times.timehh = 0;
			times.timemm = 0;
			times.timess = 0;
		}
		times.EncrementOrders = () =>{
			times.orders += 1;
		}
	};

})();