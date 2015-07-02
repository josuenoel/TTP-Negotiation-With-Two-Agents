function Agent(agentName, matrix){

	// General Variables Declaration
	this.agentName = agentName;
	this.originalMatrix = matrix;
	this.tempMatrix = matrix;
	this.actualPosition;
	this.compensation = 1;


	// Agent's Logic

	this.findBestPosition = function(){	// Ojo Validar
		var maxNum = 0;
		var x, y;
		for(var i = 0; i < this.tempMatrix.length; i++){
			for(var j = 0; j < this.tempMatrix.length; j++){
				if (this.tempMatrix[i][j] > maxNum){
					maxNum = this.tempMatrix[i][j];
					x = i;
					y = j;
				}
			}
		}
		this.actualPosition = {"x":x, "y":y}
		return {"maxNum":maxNum, "x":x, "y":y};
	}


	this.makeOffer = function(){
		var bestPosition = this.findBestPosition();
		this.tempMatrix[bestPosition.x][bestPosition.y] -= this.compensation;
		console.log(this.agentName);
		//console.log(bestPosition);
		console.log(this.tempMatrix);
		return {"position":{"x":bestPosition.x, "y":bestPosition.y}, "compensation":this.compensation};
	}


	this.evaluateOffer = function(offer){
		//console.log(this.agentName + " " + position);
		this.tempMatrix[offer.position.x][offer.position.y] += offer.compensation;
		this.findBestPosition();
		if (offer.position.x == this.actualPosition.x && offer.position.y == this.actualPosition.y){
			// Responder OFERTA ACEPTADA {"acepted":true}
			console.info(agentName + " acepta!");
			return {"acepted": true};
		} else {
			// Responder OFERTA RECHAZADA {"acepted":false, "x":x, "y":y}
			return {"acepted": false};
		}
	}


	this.getOffer = function(offer){
		if (offer.acepted){
			// Actualizar Matriz Original
		} else {
			// Hacer otra oferta
		}
	}

















	this.sumar = function(funcion, num){
		var suma = num + 1;
		if (suma < 21){
			console.log("Suma desde " + this.id + ": " + suma);
			funcion.sumar(this, suma);
		}
		
	}

}