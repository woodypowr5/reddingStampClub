app.service("leadershipService", ['$rootScope', function($rootScope){
    "use strict";
      
    this.news = [];
    this.officers = [];

    this.officers.push(
        {
            "title":        "",
            "description":  "",
            "current": {
                "name":         "",
                "biography"     "",
                "imageSrc":     ""

            }     
        }
    );

    var that = this;
 
}]);