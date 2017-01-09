angular.module('starter').controller('HomeController', function($scope, CondominioService){

});

angular.module('starter').controller('AtasController', function($scope, CondominioService){
    
    $scope.atas = [];
    $scope.atas[0] = {
        name: "Ata 01/01/2017",
        url: "https://www.dropbox.com/s/krbyjfm90p1rm2k/ata_modelo.pdf?dl=1&_download_id=242216503770178974648521447289045411615321284465413172536826669" 
    };
    $scope.atas[1] = {
        name: "Ata 02/12/2016",
        url: "https://www.dropbox.com/s/krbyjfm90p1rm2k/ata_modelo.pdf?dl=1&_download_id=242216503770178974648521447289045411615321284465413172536826669" 
    };
    $scope.atas[2] = {
        name: "Ata 03/09/2016",
        url: "https://www.dropbox.com/s/krbyjfm90p1rm2k/ata_modelo.pdf?dl=1&_download_id=242216503770178974648521447289045411615321284465413172536826669" 
    };
    $scope.atas[3] = {
        name: "Ata 04/08/2016",
        url: "https://www.dropbox.com/s/krbyjfm90p1rm2k/ata_modelo.pdf?dl=1&_download_id=242216503770178974648521447289045411615321284465413172536826669" 
    };
    $scope.atas[4] = {
        name: "Ata 05/04/2016",
        url: "https://www.dropbox.com/s/krbyjfm90p1rm2k/ata_modelo.pdf?dl=1&_download_id=242216503770178974648521447289045411615321284465413172536826669" 
    };
});
 