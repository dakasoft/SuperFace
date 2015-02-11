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
            password: "superPass",
            name: "Clark Kent",
            race: "Kriptoniano",
            home: "Tierra",
            img: "img/fotoPerfil.jpg",
            description:"Soy super fuerte. =)",
            // Array con las fotos de un usuario att: LDMV
            photos: [
                {
                    img: 'img/batman.jpg',
                    description: 'Aqui en gótica',
                    comments: ['lindo', 'lindisimo', 'linda cuidad', 'cuidad gótica ya no es la misma de antes'
					],
                    likes: 1,
                    dislikes: 0
                },
                {
                    img: 'img/flash.jpg',
                    description: '',
                    comments: ['feo', 'feisimo', 'Tomaron esta foto con flash?'],
                    likes: 0,
                    dislikes: 0
                },
                {
                    img: 'img/linterna.jpg',
                    description: '',
                    comments: ['asqueroso', 'noob', 'Eres el peor superheroe', 'Donde conseguiste ese anillo'],
                    likes: 0,
                    dislikes: 0
                }
            ]
        }
    };
    // Funcion de comprobacion de login? att: LDMV
    this.validateLogin = function (pNewRequest) {
        var testPassword = '';
        if (this.users[pNewRequest.username]) {
            testPassword = this.users[pNewRequest.username].password;
            if (pNewRequest.password === testPassword) {
                this.currentUser = this.users[pNewRequest.username];
                $scope.bLoginValid = true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    // Variable para acceder a la info de un usuario más facilmente att: LDMV
    this.currentUser = {};
    
    this.addComentario =  function(pPhoto){
        if (this.comentario) {
        pPhoto.comments.push(this.comentario);
        this.comentario = '';
        } else {
            return false;
        }
    }
});

app.controller("NewImgController",function(){
    this.addFoto = function(pPhotoAlbum) {
        this.foto.comments = [];
        pPhotoAlbum.push(this.foto);
        console.log(this.foto);
        //$('.modal').modal('hide')
    this.foto = {};
    };
});

})();