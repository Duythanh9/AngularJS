window.indexController = function ($scope, $http) {
    $scope.h1 = "Day la trang chu"

    const apiLoa = "http://localhost:3000/loa";
    console.log(apiLoa)

    $http.get(apiLoa).then(function (response) {
        if (response.status == 200) {
            $scope.loa = response.data
        }
    })
    //delete

    $scope.deleteLoa = function (id) {
        console.log(id)

        $http.delete(
            `${apiLoa}/${id}`
        ).then(function (response) {
            if (response.status == 200) {
                alert("Ban da delete thanh cong a")
            }
        })
    }
}