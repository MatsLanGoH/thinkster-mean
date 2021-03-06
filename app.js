var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.addPost = () => {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0});
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = post =>
      post.upvotes += 1;

    $scope.decrementUpvotes = post =>
      post.upvotes -= 1;

    $scope.posts = [
      {title: 'post 1', upvotes: 4},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 12}
    ];
  }]);
