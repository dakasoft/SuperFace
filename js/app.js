(function(){ // define funcionalidad
var app = angular.module('store', []);

app.controller('BooksController',function($scope){
	this.books = books;
	this.yo = superman;
	this.comentario = "";
	$scope.currentPage = 0;
	$scope.data = books;
  //return de numer of pages 
  $scope.numberOfPages=function(){
    return Math.ceil($scope.data.length/$scope.pageSize);                
  }
  this.addComentario =  function(book){
  	book.comentario.push(this.comentario);
  }

});

//custom filter to slipt de books collection
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
 		}
});

app.controller("NewImgController",function(){
	this.foto ={};
		this.addFoto = function(library) {
		  library.books.push(this.foto);
		  this.foto ={};
	};
});


app.controller("loginController",function($scope){
	this.logeado =false;
	this.yo = superman;
});

var superman ={
	user: "superUser",
	pass: "superPass",
	nombre: "Clark Kent",
	raza: "Kriptoniano",
	hogar: "Tierra",
	img: "img/fotoPerfil.jpg",
	descripcion:"Soy super fuerte. =)"
};

var books =[

{
	comentario: [
	'linda cuidad',
	'cuidad gótica ya no es la misma de antes'
	],
	descripcion:"Aqui en gótica",
	img:'img/batman.jpg'
},
{
	comentario: [
	'Eres el peor superheroe',
	'Donde conseguiste ese anillo'
	],
	descripcion:"Pegando Porte",
	img:'img/linterna.jpg'
},
{
	comentario: [
	'Tomaron esta foto con flash?',
	'noob'
	],
	descripcion:"",
	img:'img/flash.jpg'
}];

})();


