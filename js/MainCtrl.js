app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.currentView = 'home';
	$scope.selectedBio = 1;
	var googleMapsApiKey = "AIzaSyBW5IYe93clNAAsEcTIZN3huEgjmu6TJqE";

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    	if ( angular.isDefined( toState.data.newView ) ) {
        	$scope.currentView = toState.data.newView;
    	}
	});


	// Calendar

	$scope.selectCalendarEvent = function(event){
		$scope.calendar.activeEvent = {
			'name': event.name,
			'time': event.time,
			'description': event.description,
			'note': event.note
		}
	}
	$scope.initCalendarEvent = function(){
		// set activeEvent to first event of the month
		for(var i = 0; i < $scope.calendar.data[$scope.calendar.currentMonth].events.length; i++){
			if(typeof($scope.calendar.data[$scope.calendar.currentMonth].events[i]) != 'undefined'){
				$scope.selectCalendarEvent($scope.calendar.data[$scope.calendar.currentMonth].events[i]);
				break;
			}
		}
	}
	$scope.calendar = {
		"data": [],
		"currentMonth": 0,
		"activeEvent": {}
	}	
	$scope.calendar.data[0] = {
		"name": "October 2015",
		"dates": [
			["","","","",1,2,3],
			[4,5,6,7,8,9,10],
			[11,12,13,14,15,16,17],
			[18,19,20,21,22,23,24],
			[25,26,27,28,29,30,31]
		],
		"events": []
	};
	$scope.calendar.data[1] = {
		"name": "November 2015",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29,30, "", "", "", "", ""]
		],
		"events": []
	}

	// October Events
	$scope.calendar.data[0].events[1] = {
		'id': 	0,
		'name': 'Test Event 1',
		'time': "8:00 to 11:00 AM",
		'description': 'This is only a test...',
		'note': 0
	};
	$scope.calendar.data[0].events[9] = {
		'id': 	1,
		'name': 'Test Event 2',
		'time': "8:00 to 11:00 AM",
		'description': 'This is only a test...',
		'note': "super awesome..."
	};
	$scope.calendar.data[0].events[22] = {
		'id': 	2,
		'name': 'Test Event 3',
		'time': "8:00 to 11:00 AM",
		'description': 'This is only a test...',
		'note': "Super awesome..."
	};

	//November Events
	$scope.calendar.data[1].events[2] = {
		'id': 	3,
		'name': 'Test Event 4',
		'time': "8:00 to 11:00 AM",
		'description': 'This is only a test...',
		'note': "Super awesome..."
	};
	$scope.calendar.data[1].events[30] = {
		'id': 	4,
		'name': 'Test Event 5',
		'time': "8:00 to 11:00 AM",
		'description': 'This is only a test...',
		'note': "Super awesome..."
	};


	// Run Calendar

	$scope.calendar.currentMonth = 0;
	$scope.initCalendarEvent();

	



}]);