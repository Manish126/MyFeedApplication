var app = angular.module( 'myapp', [] );

app.controller('AppCtrl', ['$scope', function ($scope) {

    $scope.feeds = [];  // Array that will hold all feeds
    $scope.mandatoryFields = '';    // A message displayed if the form fails to submit
	$scope.goCats = false;
    // For each item in local storage...
    for( item in localStorage ) {
        // Parse the JSON string and add to to feeds array
        var newItem = JSON.parse( localStorage[item] );
        $scope.feeds.push( newItem );
    }

    // Submit new contact with values from the form fields, then reset values of the fields
    $scope.addContact = function() {

        // Angular has special directives for forms, and a form name attribute allows that form to be accessed through the scope, which is where we get '$scope.addContactForm'
        // Read more here: docs.angularjs.org/api/ng/directive/form

        // If all required fields are complete 
        if( !$scope.addContactForm.$error.required ) { 

            // Remove warning
            $scope.failed = '';

            // Store contact data in an object         
            var newPost = {
              id: localStorage.length,
              description: $scope.description
            };  

            // Add post  to localStorage as the value to a new property
            localStorage.setItem( 'item' + localStorage.length, JSON.stringify(newPost) );

            // Add new post  to the local storage by adding it to the feeds array.
            $scope.feeds.push(newPost);

            // Reset the inputs values for the form
            $scope.description = '';
			$scope.goCats = false;
			
        } 
		/*else {
            // Add warning
            $scope.mandatoryFields = 'Write some message in post area....';
        }*/

    };
}]);


app.controller('FeedController', ['$scope', function ($scope) {
	//$scope.testVal = "Name";
	$scope.filter = 1;
	
	$scope.selectFilter = function(setVal){
		$scope.filter = setVal;
		//return $scope.filter = setVal;
		console.log($scope.setVal);
	};
	
	$scope.selectedFilter = function(tabvalue){
		//$scope.filter = tabvalue;
		return $scope.filter === tabvalue;
		//console.log($scope.tabNum);
	};
	

}]);