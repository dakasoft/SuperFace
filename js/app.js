(function(){ // define funcionalidad
var app = angular.module('store', []);

app.controller('SuperController',function($scope){
    //return de numer of pages 
    // no sé que demonios hace esto? XD att: LDMV
    $scope.numberOfPages=function(){
    return Math.ceil($scope.data.length/$scope.pageSize);                
    }
    $scope.currentPage = 0;
    // $scope.data = books;

    //Array con los usuarios (para que parezca que pensamos hacer mas XD) att: LDMV
    this.users = {
        superUser: {
            username: "superUser",
            pass: "superPass",
            name: "Clark Kent",
            race: "Kriptoniano",
            home: "Tierra",
            img: "img/fotoPerfil.jpg",
            description:"Soy super fuerte. =)",
            // Array con las fotos de un usuario att: LDMV
            photos: [
                {
                    img: 'img/batman.jpg',
                    description: '',
                    comments: ['lindo', 'lindisimo']
                },
                {
                    img: 'img/flash.jpg',
                    description: '',
                    comments: ['feo', 'feisimo']
                },
                {
                    img: 'img/linterna.jpg',
                    description: '',
                    comments: ['asqueroso', 'noob']
                }
            ]
        }
    };
    // Boolean de comprobacion de login?
    // this.bLoginValid = false;
    this.loginValidate = function () {
        var potato = document.getElementById('user').value;
        $scope.currentUser = $scope.users[potato];
    }
    // Variable para acceder a la info de un usuario más facilmente att: LDMV
    this.currentUser = {};
    // Ni idea si voy a usar esto XD
    this.comment = "";
    
    this.addComentario =  function(pPhoto){
    pPhoto.comments.push(this.comentario);
    }
    this.comentario = '';
});

//custom filter to slipt de books collection
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
        }
});

app.controller("NewImgController",function(){
    this.addFoto = function(pPhotoAlbum) {
        pPhotoAlbum.push(this.foto);
        console.log(this.foto);
        //$('.modal').modal('hide')
    };
    this.foto ={};
});


// app.controller("loginController",function($scope){
//     this.logeado =false;
//     this.yo = superman;
// });

})();


