angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
	function getPosts() {
		return $http.get('https://jsonplaceholder.typicode.com/posts').then(function (result) {
			console.log(result.data)
			$scope.posts = result.data
		})
	}

	getPosts()

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
