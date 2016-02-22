app.service("linkService", ['$rootScope', function($rootScope){
    "use strict";
      
    this.links = [];

    for (var i = 0; i < 10; i++) {
        
        this.links.push(
            {
                "title":            "im the title",
                "description":      "This is a short, one line summary of the link",
                "image": {
                    "src":      "blah",
                    "alt":      "blah"
                }
            }
        );
    };
   

    var that = this;
 
}]);