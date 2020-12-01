var api = new Object();    
  
if (window.File && window.FileReader && window.FileList && window.Blob){  
     //El navegador soporta el API File
     document.write("<p>Este navegador soporta el API File </p>");
} else{
        document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
}

api.leerArchivoTexto=function(files) {
    var archivo = files[0];
    var nombre = document.getElementById("nombreArchivo");
    var tamaño = document.getElementById("tamañoArchivo");
    var tipo = document.getElementById("tipoArchivo");
    var ultima = document.getElementById("ultimaModificacion");
    var contenido = document.getElementById("contenidoArchivo");
    var areaVisualizacion = document.getElementById("areaTexto");
    var errorArchivo = document.getElementById("errorLectura");
    nombre.innerText = "Nombre del archivo: " + archivo.name;
    tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
    tipo.innerText = "Tipo del archivo: " + archivo.type;
    ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
    contenido.innerText="Contenido del archivo:"
    
    if (archivo.type.match(/text.*/) || archivo.type.match(/application.*/)) {
        var lector = new FileReader();
        lector.onload = function (evento) {        
            areaVisualizacion.innerText = lector.result;
        }      
        lector.readAsText(archivo);
    } else {
        errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
    }       
};