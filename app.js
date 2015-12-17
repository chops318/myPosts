var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];
  $scope.addPost = function() {
  	//prevent empty title
  	if (!$scope.title || $scope.title === ''){return;}
  	// Add new title to posts object.
  	$scope.posts.push({title: $scope.title, upvotes: 1});
  	//after adding to object, clear title
  	$scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
  	post.upvotes += 1;
  }
}]);