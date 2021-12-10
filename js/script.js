var operandoA;
var operandoB;
var operacion;



function init(){
	//variables
    //Numeros
    var cero           = document.getElementById('cero');
    var uno            = document.getElementById('uno');
    var dos            = document.getElementById('dos');
    var tres           = document.getElementById('tres');
    var cuatro         = document.getElementById('cuatro');
    var cinco          = document.getElementById('cinco');
    var seis           = document.getElementById('seis');
    var siete          = document.getElementById('siete');
    var ocho           = document.getElementById('ocho');
    var nueve          = document.getElementById('nueve');
    var punto          = document.getElementById('punto')

	var resultado      = document.getElementById('resultado');
	var masOmenos      = document.getElementById('masOmenos');
	var porsentage     = document.getElementById('porsentage');
	var reset          = document.getElementById('reset');
    var suma           = document.getElementById('suma');
    var resta          = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division       = document.getElementById('division');
    var igual          = document.getElementById('igual');
    
    
	var borrar         = document.getElementById('borrar');
}

/** funcion borrar digitos */
    borrar.onclick = function(e){
        let dato = viewletf.textContent;
        if(dato.length == 1){
            viewletf.textContent = "0";
        }else{
            viewletf.textContent = dato.substring(0,dato.length - 1);
        }
    }
/** fin de funcion borrar digitos */

/** eventos para digitar numeros del 0 hasta 9 */
    cero.onclick = function(e){
        if(viewletf.textContent == "0"){
            viewletf.textContent = "0";
        }else{
            viewletf.textContent = viewletf.textContent + "0";
        }
    }

    uno.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "1";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "1";
            }else{
                viewletf.textContent = viewletf.textContent + "1";
            }
        }
    }

    dos.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "2";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "2";
            }else{
                viewletf.textContent = viewletf.textContent + "2";
            }
        }
    }

    tres.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "3";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "3";
            }else{
                viewletf.textContent = viewletf.textContent + "3";
            }
        }
    }

    cuatro.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "4";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "4";
            }else{
                viewletf.textContent = viewletf.textContent + "4";
            }
        }
    }

    cinco.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "5";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "5";
            }else{
                viewletf.textContent = viewletf.textContent + "5";
            }
        }
    }

    seis.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "6";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "6";
            }else{
                viewletf.textContent = viewletf.textContent + "6";
            }
        }
    }

    siete.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "7";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "7";
            }else{
                viewletf.textContent = viewletf.textContent + "7";
            }
        }
    }

    ocho.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "8";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "8";
            }else{
                viewletf.textContent = viewletf.textContent + "8";
            }
        }
    }

    nueve.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-2);
        if(viewletf.textContent == "0"){
            viewletf.textContent = "9";
        }else{
            if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                viewletf.textContent = symb.substring(0,symb.length - 1);
                viewletf.textContent = viewletf.textContent + "9";
            }else{
                viewletf.textContent = viewletf.textContent + "9";
            }
        }
    }

    punto.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-1);
        if(syrplace == "-" || syrplace == "*" || syrplace == "/" || syrplace == "+"){
            viewletf.textContent = viewletf.textContent + "0.";
        }else{
            viewletf.textContent = viewletf.textContent + ".";
        }
    }
/** fin de funciones para digitar numeros */

/** funcion de operaciones */
    //Suma
    suma.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-1);
        if(syrplace == "-" || syrplace == "*" || syrplace == "/"){
            viewletf.textContent = symb.substring(0,symb.length - 1);
            viewletf.textContent = viewletf.textContent + "+";
        }else{
            if(syrplace == "+"){
                viewletf.textContent = viewletf.textContent;
            }else{
                viewletf.textContent = viewletf.textContent + "+";
            }
        }
    }

    //Resta
    resta.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-1);
        if(syrplace == "+" || syrplace == "*" || syrplace == "/"){
            viewletf.textContent = symb.substring(0,symb.length - 1);
            viewletf.textContent = viewletf.textContent + "-";
        }else{
            if(syrplace == "-"){
                viewletf.textContent = viewletf.textContent;
            }else{
                viewletf.textContent = viewletf.textContent + "-";
            }
        }
    }

    //Multiplicacion
    multiplicacion.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-1);
        if(syrplace == "-" || syrplace == "+" || syrplace == "/"){
            viewletf.textContent = symb.substring(0,symb.length - 1);
            viewletf.textContent = viewletf.textContent + "*";
        }else{
            if(syrplace == "*"){
                viewletf.textContent = viewletf.textContent;
            }else{
                viewletf.textContent = viewletf.textContent + "*";
            }
        }
    }

    //Division
    division.onclick = function(e){
        let symb = viewletf.textContent;
        let syrplace = symb.slice(-1);
        if(syrplace == "-" || syrplace == "*" || syrplace == "+"){
            viewletf.textContent = symb.substring(0,symb.length - 1);
            viewletf.textContent = viewletf.textContent + "/";
        }else{
            if(syrplace == "/"){
                viewletf.textContent = viewletf.textContent;
            }else{
                viewletf.textContent = viewletf.textContent + "/";
            }
        }
    }
/**fin de funviones de operaciones */

/* funciion reset valores */
    reset.onclick = function(e){
        resetear();
    }

    function resetear(){
        viewletf.textContent = "0";
        resultado.textContent = "0";
    }
/** fin de funcion resetear */

/** Funcion del Boton Igual (=) */
let historial = [];
var bandera = 0;

    igual.onclick = function(e){
        let rept = viewletf.textContent
        let resul = eval(rept)

        if(bandera==0){
            //lee los datos del localstorage para guardarlos en un vector
            let $nom = localStorage.getItem("lisDato");
            historial.push($nom);

            //se captura los datos nuevos
            let $hisdatos = viewletf.textContent +" = "+resul;
            $hisdatos = document.querySelector("#history").innerHTML = "<br>"+$hisdatos;    

            // los agg al vector despues de los otros ya guardado
            historial.push($hisdatos);

            localStorage.setItem("lisDato",historial);
            bandera=1;
        }else{
            let $hisdatos = viewletf.textContent +" = "+resul;
            $hisdatos = document.querySelector("#history").innerHTML = "<br>"+$hisdatos; 

            historial.push($hisdatos);
            localStorage.setItem("lisDato",historial);
        }

        let $nom = localStorage.getItem("lisDato");
        document.querySelector("#history").innerHTML = $nom;

        viewletf.textContent = resul;
    }
/**fin de funcion igual */

/** funcion para resolver operaciones */
    function mostrarResult(){
        let rept = viewletf.textContent
        resultado.textContent = eval(rept);
    }

    setInterval("mostrarResult()",1);
/** fin de funcion  */

/**Borrar historial */
function delet(){
    historial = [];
    bandera = 0;
    localStorage.setItem("lisDato","");
    document.querySelector("#history").innerHTML = "";
}
/** fin borrar historial */

/** CAPTURA EVENTO DEL TECLADO */

var eventoControlado = false;

window.onload = function() {
    document.onkeypress = mostrarInformacionCaracter;
    document.onkeyup = mostrarInformacionTecla; 
}

function mostrarInformacionCaracter(evObject) {
    var msg = ''; 
    var elCaracter = String.fromCharCode(evObject.which);

    if (evObject.which!=0 && evObject.which!=13) {

        if(elCaracter == 0 || elCaracter == 1 ||elCaracter == 2 ||elCaracter == 3 ||elCaracter == 4 ||elCaracter == 5 ||elCaracter == 6 ||elCaracter == 7 ||elCaracter == 8 ||elCaracter == 9){
            let symb = viewletf.textContent;
            let syrplace = symb.slice(-2);
            if(viewletf.textContent == "0"){
                viewletf.textContent = elCaracter;
            }else{
                if(syrplace == "+0" || syrplace == "-0"  || syrplace == "*0" || syrplace == "/0"){
                    viewletf.textContent = symb.substring(0,symb.length - 1);
                    viewletf.textContent = viewletf.textContent + elCaracter;
                }else{
                    viewletf.textContent = viewletf.textContent + elCaracter;
                }
            }
        }else{
            if(elCaracter== "+" || elCaracter == "-" || elCaracter == "*" || elCaracter == "/"){

                let symb = viewletf.textContent;
                let syrplace = symb.slice(-1);

                if(syrplace == "-" || syrplace == "*" || syrplace == "+"){
                    viewletf.textContent = symb.substring(0,symb.length - 1);
                    viewletf.textContent = viewletf.textContent + elCaracter;
                }else{
                    if(syrplace == "-" || syrplace == "+" || syrplace == "/"){
                        viewletf.textContent = symb.substring(0,symb.length - 1);
                        viewletf.textContent = viewletf.textContent + elCaracter;
                    }else{
                        if(syrplace == "+" || syrplace == "*" || syrplace == "/"){
                            viewletf.textContent = symb.substring(0,symb.length - 1);
                            viewletf.textContent = viewletf.textContent + elCaracter;
                        }else{
                            if(syrplace == "-" || syrplace == "*" || syrplace == "/"){
                                viewletf.textContent = symb.substring(0,symb.length - 1);
                                viewletf.textContent = viewletf.textContent + elCaracter;
                            }else{
                                if(syrplace == "/"){
                                    viewletf.textContent = viewletf.textContent;
                                }else{
                                    if(syrplace == "*"){
                                        viewletf.textContent = viewletf.textContent;
                                    }else{
                                        if(syrplace == "-"){
                                            viewletf.textContent = viewletf.textContent;
                                        }else{
                                            if(syrplace == "+"){
                                                viewletf.textContent = viewletf.textContent;
                                            }else{
                                                viewletf.textContent = viewletf.textContent + elCaracter;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
    eventoControlado=true;
}

function mostrarInformacionTecla(evObject) {
    var msg = ''; var teclaPulsada = evObject.keyCode;

    if (teclaPulsada == 20) { 
        msg = 'Pulsado caps lock (act/des mayúsculas)';
    } else {
        if (teclaPulsada == 16) { 
            msg = 'Pulsado shift';
        }else{
            if(teclaPulsada == 8){
                let dato = viewletf.textContent;
                if(dato.length == 1){
                    viewletf.textContent = "0";
                }else{
                    viewletf.textContent = dato.substring(0,dato.length - 1);
                }
            }
            if(teclaPulsada == 190){
                let symb = viewletf.textContent;
                let syrplace = symb.slice(-1);
                if(syrplace == "-" || syrplace == "*" || syrplace == "/" || syrplace == "+"){
                    viewletf.textContent = viewletf.textContent + "0.";
                }else{
                    viewletf.textContent = viewletf.textContent + ".";
                }
            }
            if(teclaPulsada == 13){
                let rept = viewletf.textContent
        let resul = eval(rept)

        if(bandera==0){
            //lee los datos del localstorage para guardarlos en un vector
            let $nom = localStorage.getItem("lisDato");
            historial.push($nom);

            //se captura los datos nuevos
            let $hisdatos = viewletf.textContent +" = "+resul;
            $hisdatos = document.querySelector("#history").innerHTML = "<br>"+$hisdatos;    

            // los agg al vector despues de los otros ya guardado
            historial.push($hisdatos);

            localStorage.setItem("lisDato",historial);
            bandera=1;
        }else{
            let $hisdatos = viewletf.textContent +" = "+resul;
            $hisdatos = document.querySelector("#history").innerHTML = "<br>"+$hisdatos; 

            historial.push($hisdatos);
            localStorage.setItem("lisDato",historial);
        }

        let $nom = localStorage.getItem("lisDato");
        document.querySelector("#history").innerHTML = $nom;

        viewletf.textContent = resul;
            }
        }
       // if (msg) {control.innerHTML += msg + '------------tecla3-----------------<br/>';}
        eventoControlado = false;
    }
}