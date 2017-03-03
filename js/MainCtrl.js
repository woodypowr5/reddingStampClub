app.controller('MainCtrl', ['$scope', '$location','articleService', 'linkService','$sce', 'scrollService', function($scope, $location, articleService, linkService, $sce, scrollService) {
	$scope.currentView = 'home';
	$scope.mobileNavActive = false;
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
	$scope.today = null;
	$scope.todaysMonth = null;
	$scope.todaysDay = null;
	$scope.calendar = {
		"data": [],
		"currentMonth": 0,
		"activeEvent": {
			"embed": null
		},
		"currentDay": null
	}	
	$scope.trustSrc = function(src) {
		// console.log(src);
	    return $sce.trustAsResourceUrl(src);
	}
	$scope.scrollTo = function(element){
		// var el = $document.getElementById(element);
		 $location.hash(element);
 
      // call $anchorScroll()
      scrollService.scrollTo(element);
	}
	$scope.toggleMobileNav = function(){
		$scope.mobileNavActive = !$scope.mobileNavActive;
	}
	$scope.closeMobileNav = function(){
		$scope.mobileNavActive = false;
	}
	$scope.activateModal = function(type, src){
		$scope.modal.type = type ? type : 'unknown';
		$scope.modal.src = (type === 'pdf' || type === 'doc' || type === 'docx') ? "ViewerJS/#../"+src : src;
		// console.log($scope.modal.src);
		$scope.modal.active = true;
	}
	$scope.deactivateModal = function(){
		$scope.modal = {
			'active': 	false,
			'type': 	null,
			'src': 		null
		}
	}

	var googleMapsApiKey = "AIzaSyB3ARGw6O6Ww2uu_ttgI4Vq6jgbgfHV0Ow";

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    	if ( angular.isDefined( toState.data.newView ) ) {
        	$scope.currentView = toState.data.newView;		
    	};
		if ( angular.isDefined( toState.data.modal )){
	    	if(toState.data.modal === "palmares"){
	    		console.log("palmares");
	    	} else if (toState.data.modal === "prospectus"){
	    		$scope.activateModal('pdf', 'assets/documents/novapex_2015_entry_and_prospectus.pdf');
				console.log("prospectus");
			}	
		}
	});


	// Links

	// $scope.initLinkExpanded = function(index){
	// 	$scope.linksExpanded[index] = false;
	// };
	$scope.expandLink = function(category, link){
	    for (var i = 0; i < $scope.links.length; i++) { //loop through categories
	       if($scope.links[i].category === category){
	       		for (var j = 0; j < $scope.links[i].links.length; j++) {
	       			if($scope.links[i].links[j].title === link){
	       				$scope.links[i].links[j].expanded = true;
	       				return;
	       			}
	       		};
	       }
	    };
	}

	$scope.collapseLink = function(category, link){
	    for (var i = 0; i < $scope.links.length; i++) { //loop through categories
	       if($scope.links[i].category === category){
	       		for (var j = 0; j < $scope.links[i].links.length; j++) {
	       			if($scope.links[i].links[j].title === link){
	       				$scope.links[i].links[j].expanded = false;
	       				return;
	       			}
	       		};
	       }
	    };
		}
	// Articles

	$scope.setArticleImage = function(element, article){

	}
	$scope.sortDate = function(item){
		return articleService.getSortDate(item.numDate);
	}
	// Calendar

	$scope.selectCalendarEvent = function(event){
		// console.log(event);
		$scope.calendar.activeEvent = {

			'name': event.name,
			'time': event.time,
			'description': event.description,
			'note': event.note,
			'embed': event.embed,
			'location': event.location
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
		$scope.today = new Date();
		// month 0 = Jan 2016
			
		$scope.todaysDay = $scope.today.getDay();
		$scope.todaysYear = 118-$scope.today.getYear();
		$scope.todaysMonth = $scope.today.getMonth()+(12*$scope.todaysYear); 
		$scope.calendar.currentMonth = $scope.todaysMonth; 
		
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

	$scope.googleMaps = {
		"home": "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe-3cHpfs0lQRpJJ-WK0k4Os&key="+googleMapsApiKey,
		"novapex": null,
		"westpex": null

	}
	
	// $scope.calendar.data  = calendarService.getData();

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
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[0].events[17] = {
			'id': 	1,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0,
			'embed': $scope.googleMaps.home 
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
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[1].events[21] = {
			'id': 	3,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0,
			'embed': $scope.googleMaps.home 
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
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[2].events[6] = {
			'id': 	5,
			'name': 'NOVAPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': '2016 NOVAPEX Exhibition',
			'note': 0,
			'embed': $scope.googleMaps.home 
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
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[3].events[17] = {
			'id': 	7,
			'name': 'General Meeting',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Bi-monthly general meeting',
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[3].events[29] = {
			'id': 	8,
			'name': 'WESTPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Annual WESTPEX Exhibition',
			'note': 0,
			'embed': $scope.googleMaps.home 
		};
		$scope.calendar.data[3].events[30] = {
			'id': 	9,
			'name': 'WESTPEX 2016',
			'time': "2PM to 4PM",
			'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
			'description': 'Annual WESTPEX Exhibition',
			'note': 0,
			'embed': $scope.googleMaps.home 
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
		'note': 0,
		'embed': $scope.googleMaps.home 
	};
	$scope.calendar.data[4].events[22] = {
		'id': 	11,
		'name': 'General Meeting',
		'time': "2PM to 4PM",
		'location': "River Oaks Retirement Community 301 Hartnell Dr. Redding, CA 96002",
		'description': 'Bi-monthly general meeting',
		'note': 0,
		'embed': $scope.googleMaps.home 
	};

	$scope.calendar.data[5] = {
		"name": "June 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[6] = {
		"name": "July 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[7] = {
		"name": "Aug 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[8] = {
		"name": "Sept 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};	
	$scope.calendar.data[9] = {
		"name": "Oct 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};	
	$scope.calendar.data[10] = {
		"name": "Nov 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};	
	$scope.calendar.data[11] = {
		"name": "Dec 2016",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};	


	$scope.calendar.data[12] = {
		"name": "Jan 2017",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[13] = {
		"name": "Feb 2017",
		"dates": [
			["", "", "", 1, 2, 3, 4],
			[5,6,7,8,9,10,11],
			[12,13,14,15,16,17,18],
			[19,20,21,22,23,24,25],
			[26,27,28,"", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[14] = {
		"name": "Mar 2017",
		"dates": [
			["","","",1,2,3,4],
			[5,6,7,8,9,10,11],
			[12,13,14,15,16,17,18],
			[19,20,21,22,23,24,25],
			[26,27,28, 29, 30, 31, ""]
		],
		"events": []
	};
	$scope.calendar.data[15] = {
		"name": "Apr 2017",
		"dates": [
			["","","","","","",1],
			[2,3,4,5,6,7,8],
			[9,10,11,12,13,14,15],
			[16,17,18,19,20,21,22],
			[23,24,25,26,27,28, 29],
			[30,"","","","","",""]
		],
		"events": []
	};
	$scope.calendar.data[16] = {
		"name": "May 2017",
		"dates": [
			["",1,2,3,4,5,6],
			[7,8,9,10,11,12,13],
			[14,15,16,17,18,19,20],
			[21,22,23,24,25,26,27],
			[28,29, 30, 31, "", "",""]
		],
		"events": []
	};
	$scope.calendar.data[17] = {
		"name": "June 2017",
		"dates": [
			["","","","",1,2,3],
			[4,5,6,7,8,9,10],
			[11,12,13,14,15,16,17],
			[18,19,20,21,22,23,24],
			[25,26,27,28,29,30,""]
		],
		"events": []
	};
	$scope.calendar.data[18] = {
		"name": "July 2017",
		"dates": [
			["","","","","","",1],
			[2,3,4,5,6,7,8],
			[9,10,11,12,13,14,15],
			[16,17,18,19,20,21,22],
			[23,24,25,26,27,28, 29],
			[30,31,"","","","",""]
		],
		"events": []
	};
	$scope.calendar.data[19] = {
		"name": "August 2017",
		"dates": [
			["","",1,2,3,4,5],
			[6,7,8,9,10,11,12],
			[13,14,15,16,17,18,19],
			[20,21,22,23,24,25,26],
			[27,28,29,30,31, "", ""]
		],
		"events": []
	};
	$scope.calendar.data[20] = {
		"name": "September 2017",
		"dates": [
			["","","","","",1,2],
			[3,4,5,6,7,8,9],
			[10,11,12,13,14,15,16],
			[17,18,19,20,21,22,23],
			[24,25,26,27,28,29,30]
		],
		"events": []
	};
	$scope.calendar.data[21] = {
		"name": "October 2017",
		"dates": [
			[1,2,3,4,5,6,7],
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29, 30, 31, "", "", "", ""]
		],
		"events": []
	};
	$scope.calendar.data[22] = {
		"name": "Novermber 2017",
		"dates": [
			["","","",1,2,3,4],
			[5,6,7,8,9,10,11],
			[12,13,14,15,16,17,18],
			[19,20,21,22,23,24,25],
			[26,27,28, 29, 30, 31, ""]
		],
		"events": []
	};
	$scope.calendar.data[23] = {
		"name": "December 2017",
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
	// Run Calendar

	$scope.calendar.currentMonth = 12;
	$scope.initCalendarEvent();
	$scope.checkPrevNextButtons();

	
	// console.log($scope.articles);
	




}]);