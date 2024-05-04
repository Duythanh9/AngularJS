window.addController = function($scope,$http,$location){
    $scope.h1 = "Day la trang add"
    $scope.addLoa = function(){
        const apiLoa = "http://localhost:3000/loa";
            let newLoa = {
                tenLoa:$scope.l.tenLoa,
                giaLoa:$scope.l.giaLoa,
                diaChi:$scope.l.diaChi,
            }
            $http.post(apiLoa,newLoa).then(function(response){
                if(response.status == 201 ){
                    alert("Ban da add thanh cong")
                    $location.path("trang-chu")
                }
            })
    }
}