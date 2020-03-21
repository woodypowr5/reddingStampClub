app.controller('MainCtrl', ['$scope', '$location', 'linkService','$sce', 'scrollService', function($scope, $location, linkService, $sce, scrollService) {
	$scope.currentView = 'home';
	$scope.mobileNavActive = false;
	$scope.selectedBio = 1;
	$scope.links = linkService.links;
	console.log($scope.links);
	$scope.modal = {
		'active': 	false,
		'type': 	null,
		'src': 		null
	}
	$scope.linksExpanded = [];

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

	$scope.initLinkExpanded = function(index){
		$scope.linksExpanded[index] = false;
	};
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



}]);