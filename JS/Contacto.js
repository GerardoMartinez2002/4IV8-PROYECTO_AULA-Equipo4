function validar(Contacto){
if(Contacto.Nombre.value.length < 5){
    alert("Por favor escribe mas de 5 caracteres en el campo nombre");
    Contacto.Nombre.focus();
return false;
}

var checkas = "QWERTYUIOPASDFGHJKLÑZXCVBNM" 
+ "qwertyuioasdfghjklzxcvbnm";

var checkStd = Contacto.Email.value;

var allValid = true;

for(var i = 0; i < checkStd.length; i++){
    var ch = checkStd.charAt(i);
    for( var j = 0; j < checkas.length; j++)
    if(ch == checkas.charAt(j))
        break;
    
    if(j == checkas.length){
        allValid = false;
        break;
    }
}

if(!allValid){
    alert("Escribe solo letras en el campo Nombre");
    Contacto.Email.focus();
    return false;
}


var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" 
+ "qwertyuioasdfghjklzxcvbnm";

var checkStr = Contacto.Nombre.value;

var allValid = true;

for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for( var j = 0; j < checkOk.length; j++)
    if(ch == checkOk.charAt(j))
        break;
    
    if(j == checkOk.length){
        allValid = false;
        break;
    }
}

if(!allValid){
    alert("Escribe solo letras en el campo Nombre");
    Contacto.Nombre.focus();
    return false;
}



var txt = Contacto.Email.value;

//expresion regular
//algo@algo.com
//algo@algo.algo.com
var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

alert("Email" + (b.test(txt)?"":" no ") + " valido");
return b.test(txt);




}