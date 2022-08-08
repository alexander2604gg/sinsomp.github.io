const button = document.getElementById('btn-resolver');
const resultadoDiv = document.getElementById("resultado-div");
var funcion;
var funciones = [];
var funcionaux
var resultadoFunciones = []
var n = 0;
var limInfe = 0;
var limSupe = 0;
var deltaX = 0;
var sumatoria = 0;
var  aux;
var resultado = 0;
button.addEventListener("click" , function () {
	InicializarDatos();
	desarrollo();
	console.log(funcion)
	console.log(n)
	console.log(limInfe)
	console.log(limSupe)
	console.log(deltaX)

})

function InicializarDatos () {
	funcion = document.getElementById("funcion-input").value;
 	n = parseFloat(document.getElementById("n-input").value);
 	limInfe = parseFloat(document.getElementById("limInfe-input").value);
 	limSupe = parseFloat(document.getElementById("limSupe-input").value);
 

}

function desarrollo () {
	deltaX = parseFloat(((limSupe - limInfe)/n).toFixed(2))
	cont = n+1
	let number = limInfe

	for (let i=0 ; i<cont ; i++) {

		funcionaux = funcion.replace("x" , number);
		number = parseFloat((number + deltaX).toFixed(2));
		funciones.push(funcionaux)
		
	}

	for (let a=0 ; a<cont ; a++){

		resultadoFunciones.push(parseFloat(math.evaluate(funciones[a]).toFixed(5)));
		console.log(resultadoFunciones[a])

	}

	for (let w=0 ; w<cont ; w++) {

		if (w==0 || w==cont-1) {
			sumatoria = sumatoria + resultadoFunciones[w]; 
		}

		if (w%2!=0 && w!=cont-1) {
			sumatoria= sumatoria + 4*resultadoFunciones[w];
		}

		if (w%2==0 && w!=0 && w!=cont-1){
			sumatoria = sumatoria + 2*resultadoFunciones[w]
		}

	}

	sumatoria = parseFloat(sumatoria.toFixed(5))

	resultado = parseFloat((deltaX/3)*sumatoria).toFixed(5)


	console.log(sumatoria);
	console.log(resultado);

	var h1 = document.createElement("h1");
	h1.innerHTML = "El resultado es: " + resultado;
	resultadoDiv.appendChild(h1);

}



