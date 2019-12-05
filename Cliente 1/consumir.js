 function agregar(){ 
   
   var param = {
        numero: document.getElementById("base").value,
                };

    var datos = $.ajax({
        data: param,               
        url: "http://localhost:8080/Restful003/webresources/Nodo/Anumero?",
        method: "get",
        success: function(data) {
            /*La variable data contiene la respuesta de tu script PHP*/
            //alert(data);                    
            //datitos(data);
            jQuery("#resultado span").text(data)

        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
        }
    });
}

function agregarNodo(){

    var param = {
        nodo: document.getElementById("nodo").value,
                };

    var datos = $.ajax({
        data: param,               
        url: "http://localhost:8080/Restful003/webresources/Nodo/Anodo?",
        method: "get",
        success: function(data) {
            /*La variable data contiene la respuesta de tu script PHP*/
            //alert(data);                    
            //datitos(data);
            jQuery("#Nnodos span").text(data)

        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
        }
    });
}

function consultar(){

    var datos = $.ajax({
                   
        url: "http://localhost:8080/Restful003/webresources/Nodo/Consultar",
        method: "get",
        success: function(data) {
            /*La variable data contiene la respuesta de tu script PHP*/
            //alert(data);                    
            //datitos(data);
            jQuery("#Tnodos span").text(data)

        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
        }
    });
}