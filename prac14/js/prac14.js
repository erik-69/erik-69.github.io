$(document).ready(function(){
    var cadena="";
    for(var i=1; i<10;i++){
        cadena+="Valor de i = " + i + "<br />";
    }
    cadena+='<button id="btnpresion"> Presioina...</button>';
    $("#numeros").html(cadena);

   

    $("form").submit(function(event){
        event.preventDefault();
        var cjson = $(this).serializeArray();
        alert("se detuvo el envio..." + cjson);
        console.log(cjson);
    });
});