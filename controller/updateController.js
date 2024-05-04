window.updateController = function ($scope, $http, $location, $routeParams) {
    $scope.h1 = "Day la trang update";
    const apiLoa = "http://localhost:3000/loa";
    let idLoa = $routeParams.id;
    console.log(idLoa)

    $http.get(
        `${apiLoa}/${idLoa}`
    ).then(function (response) {
        $scope.l = {
            tenLoa: response.data.tenLoa,
            giaLoa: response.data.giaLoa,
            diaChi: response.data.diaChi,
        }
    })
    $scope.updateLoa = function () {
        let newLoa = {
            tenLoa: $scope.l.tenLoa,
            giaLoa: $scope.l.giaLoa,
            diaChi: $scope.l.diaChi,
        }
        $http.put(
            `${apiLoa}/${idLoa}`,newLoa
        ).then(function(response){
            if(response.status == 200){
                alert("ban da update thanh cong")
                $location.path("trang-chu")
            }
        }).catch(function(error){
            alert("ERROR")
            console.log(errorF)
        })
    }
}