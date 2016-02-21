app.directive('imagePosition', function ($compile) {
   

    return function($scope, $element, $attrs) {
        var imgPosition = $attrs.imagePosition;
        if(imgPosition === 'left'){
            console.log($element);
        }
    }

});