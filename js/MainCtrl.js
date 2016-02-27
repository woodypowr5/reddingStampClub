app.controller('MainCtrl', ['$scope', 'articleService', 'linkService', function($scope, articleService, linkService) {
	$scope.currentView = 'home';
	$scope.selectedBio = 1;
	$scope.news = articleService.news;
	$scope.articles = articleService.articles;
	$scope.links = linkService.links;
	$scope.modal = {
		'active': 	false,
		'type': 	null,
		'src': 		null
	}
	$scope.linksExpanded = [];

	$scope.activateModal = function(type, src){
		$scope.modal.type = type ? type : 'unknown';
		$scope.modal.src = (type === 'pdf' || type === 'doc' || type === 'docx') ? "ViewerJS/#../"+src : src;
		console.log($scope.modal.src);
		$scope.modal.active = true;
	}
	$scope.deactivateModal = function(){
		$scope.modal = {
			'active': 	false,
			'type': 	null,
			'src': 		null
		}
	}

	var googleMapsApiKey = "AIzaSyBW5IYe93clNAAsEcTIZN3huEgjmu6TJqE";

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    	if ( angular.isDefined( toState.data.newView ) ) {
        	$scope.currentView = toState.data.newView;
    	}
	});


	// Links

	$scope.initLinkExpanded = function(index){
		$scope.linksExpanded[index] = false;
	};
	$scope.expandLink = function(index){
		$scope.linksExpanded[index] = true;
	}
	$scope.collapseLink = function(index){
		$scope.linksExpanded[index] = false;
	}
	// Articles

	$scope.setArticleImage = function(element, article){

	}

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
	$scope.checkPrevNextButtons = function(){
		if($scope.calendar.currentMonth + 1 <= -1){
			$scope.calendar.prevMonthInvalid = true;
		} else if ($scope.calendar.currentMonth + 1 >= $scope.calendar.data.length){
			$scope.calendar.nextMonthInvalid = true;
		}
		if($scope.calendar.currentMonth - 1 <= -1){
			$scope.calendar.prevMonthInvalid = true;
		} else if ($scope.calendar.currentMonth - 1 >= $scope.calendar.data.length){
			$scope.calendar.nextMonthInvalid = true;
		}
	}
	$scope.calendarChangeMonth = function(delta){
		if(($scope.calendar.currentMonth + delta > -1) && ($scope.calendar.currentMonth + delta < $scope.calendar.data.length)){
			$scope.calendar.currentMonth = $scope.calendar.currentMonth + delta;
			$scope.calendar.prevMonthInvalid = false;
			$scope.calendar.nextMonthInvalid = false;
		}
		$scope.checkPrevNextButtons();
		
	}
	$scope.calendar = {
		"data": [],
		"currentMonth": 0,
		"activeEvent": {}
	}	
	$scope.calendar.data[0] = {
		"name": "January 2016",
		"dates": [
			["","","","","",1,2],
			[3,4,5,6,7,8,9],
			[10,11,12,13,14,15,16],
			[17,18,19,20,21,22,23],
			[24,25,26,27,28,29,30],
			[31,"","","","","",""]
		],
		"events": []
	};
		$scope.calendar.data[0].events[3] = {
			'id': 	0,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
		$scope.calendar.data[0].events[17] = {
			'id': 	1,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
	$scope.calendar.data[1] = {
		"name": "February 2016",
		"dates": [
			["",1,2,3,4,5,6],
			[7,8,9,10,11,12,13],
			[14,15,16,17,18,19,20],
			[21,22,23,24,25,26,27],
			[28,29, "", "", "", "",""]
		],
		"events": []
	};
		$scope.calendar.data[1].events[7] = {
			'id': 	2,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
		$scope.calendar.data[1].events[21] = {
			'id': 	3,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
	$scope.calendar.data[2] = {
		"name": "March 2016",
		"dates": [
			["","",1,2,3,4,5],
			[6,7,8,9,10,11,12],
			[13,14,15,16,17,18,19],
			[20,21,22,23,24,25,26],
			[27,28,29,30,31, "", ""]
		],
		"events": []
	};
		$scope.calendar.data[2].events[5] = {
			'id': 	4,
			'name': 'NOVAPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': '2016 NOVAPEX Exhibition',
			'note': 0
		};
		$scope.calendar.data[2].events[6] = {
			'id': 	5,
			'name': 'NOVAPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': '2016 NOVAPEX Exhibition',
			'note': 0
		};
	$scope.calendar.data[3] = {
		"name": "April 2016",
		"dates": [
			["","","","","",1,2],
			[3,4,5,6,7,8,9],
			[10,11,12,13,14,15,16],
			[17,18,19,20,21,22,23],
			[24,25,26,27,28,29,30]
		],
		"events": []
	};
		$scope.calendar.data[3].events[3] = {
			'id': 	6,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
		$scope.calendar.data[3].events[17] = {
			'id': 	7,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
		$scope.calendar.data[3].events[29] = {
			'id': 	8,
			'name': 'WESTPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Annual WESTPEX Exhibition',
			'note': 0
		};
		$scope.calendar.data[3].events[30] = {
			'id': 	9,
			'name': 'WESTPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Annual WESTPEX Exhibition',
			'note': 0
		};
	$scope.calendar.data[4] = {
		"name": "May 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
		$scope.calendar.data[4].events[1] = {
			'id': 	10,
			'name': 'WESTPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Annual WESTPEX Exhibition',
			'note': 0
		};
		$scope.calendar.data[4].events[22] = {
			'id': 	11,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0
		};
	// October Events
	


	// Run Calendar

	$scope.calendar.currentMonth = 0;
	$scope.initCalendarEvent();
	$scope.checkPrevNextButtons();

	
	console.log($scope.articles);
	




}]);