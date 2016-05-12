/**
 * Created by Sufiyan Mansoor on 5/12/2016.
 */
var ref = new Firebase("https://babaauth.firebaseio.com");
angular.module("App")
    .controller('loginCtrl', function ($scope,$state) {
    $scope.loginfb= function () {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                console.log('hello friend i am working');
                $state.go("home");
            }
        });

    }

});








