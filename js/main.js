$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
   
  }
  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Baja California",
        resumen: "Si eres amante del vino y las hermosas vistas, no tienes que buscar más ya que Valle de Guadalupe te enamorará. La cultura del vino en México ha crecido exponencialmente en los últimos años y tiene como epicentro el Valle de Guadalupe, cerca de Ensenada en Baja California. En esta zona del país se producen las etiquetas de mayor renombre en el país: L.A. Cetto, Pedro Domecq y Monte Xanic y la mejor parte es que puedes visitar los viñedos y deleitarte con deliciosos platillos.",
        link: "https://cutt.ly/rRFxlIa",
      },
      {
        title: "Jalisco",
        resumen:"Si te gusta el tequila, no existe mejor destino para ti que la población en Jalisco que le da su nombre, el Pueblo Mágico de Tequila. Puedes subir al Tequila Express y hacer el tour de Mundo Cuervo para aprender el proceso y entrar a una cata de tequila. También puedes visitar las destilerías donde conocerás el proceso que sigue esta bebida y disfrutar de una cata de tequila.",
        link:"https://cutt.ly/rRFxlIa",
      },
    ];
    //console.log(posts);

    // Recorrer el JSON para enviar al index.HTML
    posts.forEach((item) => {
      var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <p>
                        ${item.resumen}
                    </p>
                    <a href="${item.link}" class="button-more">Artículo completo</a>
                </article>`;
     // console.log(post);
     $("#posts").append(post);
    });
  }
  $("#cot form ").submit(function(){
    let form_destino = $("#inputGroupSelect01").val();
    localStorage.setItem("inputGroupSelect01", form_destino);
    console.log(form_destino);
    let form_dias = $("#inputGroupSelect02").val();
    localStorage.setItem("inputGroupSelect02", form_dias);
    let form_adultos = $("#inputGroupSelect03").val();
    localStorage.setItem("inputGroupSelect03", form_adultos);
    let form_niños = $("#inputGroupSelect04").val();
    localStorage.setItem("inputGroupSelect04", form_niños);
    

  });
  var form_destino= localStorage.getItem("inputGroupSelect01");
  var form_dias= localStorage.getItem("inputGroupSelect02");
  var form_adultos= localStorage.getItem("inputGroupSelect03");
  var form_niños= localStorage.getItem("inputGroupSelect04");
  
  if (form_destino !=null && form_dias !=null && form_adultos !=null && form_niños !=null && form_destino !="undefined" && form_dias !="undefined" && form_adultos !="undefined" && form_niños !="undefined") {
    let ab_p = $("#about p");
    var total =0;
    var precioDestino=0;
    var precioAdulto = 100;
    var precioNino = 50;
    var precioK=150;
    var destino="";
    var ruta="";
    switch (form_destino) {
      case "1":
        destino = "Aguascalientes";
        precioDestino=precioK*124;
        
        break;
        case "2":
        destino = "Baja California N";
        precioDestino=precioK*1732 ;
        break;
        case "3":
        destino = "Baja California S";
        precioDestino=precioK*1153 ;
        break;
        case "4":
          destino = "Campeche";
        precioDestino=precioK*1497;
        break;
        case "5":
          destino = "Coahuila";
        precioDestino=precioK*844 ;
        break;
        case "6":
          destino = "Colima";
          precioDestino=precioK*413 ;
        break;
        case "7":
          destino = "Chiapas";
          precioDestino=precioK*1191 ;
        break;
        case "8":
          destino = "Chihuahua";
          precioDestino=precioK*1073 ;
        break;
        case "9":
          destino = "Estado de México";
          precioDestino=precioK*336 ;
        break;
        case "10":
          destino = "Durango";
          precioDestino=precioK*526 ;
        break;
        case "11":
          destino = "Guerrero";
          precioDestino=precioK*423 ;
        break;
        case "12":
          destino = "Hidalgo";
          precioDestino=precioK*389 ;
        break;
        case "13":
          destino = "Jalisco";
          precioDestino=precioK*220 ;
        break;
        case "14":
          destino = "Mexico";
          precioDestino=precioK*382 ;
        break;
        case "15":
          destino = "Michoacán";
          precioDestino=precioK*261 ;
        break;
        case "16":
          destino = "Morelos";
          precioDestino=precioK*509 ;
        break;
        case "17":
          destino = "Nayarit";
          precioDestino=precioK*457 ;
        break;
        case "18":
          destino = "Nuevo León";
          precioDestino=precioK*743 ;
        break;
        case "19":
          destino = "Oaxaca";
          precioDestino=precioK*826 ;
        break;
        case "20":
          destino = "Puebla";
          precioDestino=precioK*498 ;
        break;
        case "21":
          destino = "Querétaro";
          precioDestino=precioK*171 ;
        break;
        case "22":
          destino = "Quintana Roo";
          precioDestino=precioK*1782 ;
        break;
        case "23":
          destino = "San Luis Potosí";
          precioDestino=precioK*179 ;
        break;
        case "24":
          destino = "Sinaloa";
          precioDestino=precioK*1060 ;
        break;
        case "25":
          destino = "Sonora";
          precioDestino=precioK*1664 ;
        break;
        case "26":
          destino = "Tabasco";
          precioDestino=precioK*1161 ;
        break;
        case "27":
          destino = "Tamaulipas";
          precioDestino=precioK*597 ;
        break;
        case "28":
          destino = "Tlaxcala";
          precioDestino=precioK*466 ;
        break;
        case "29":
          destino = "Veracruz";
          precioDestino=precioK*737 ;
        break;
        case "30":
          destino = "Yucatán";
          precioDestino=precioK*1741 ;
        break;
        case "31":
          destino = "Zacatecas";
          precioDestino=precioK*211 ;
        break;
    
      default:
        destino="Error";
        break;
    }
    total=(parseInt(form_niños)*precioNino*parseInt(form_dias))+(parseInt(form_adultos)*precioAdulto*parseInt(form_dias))+precioDestino;

    $("#about p").html(""+form_destino + form_dias + form_adultos + form_niños + destino );
    $("#tt").html("<table class='table table-striped'><thead>Datos de Viaje</thead>" + 
    "<tbody> <tr class='table-active'></tr>"+ 
    "<tr></tr><tr> <th scope='row'>Destino</th> <td class=''>"+ destino +"</td></tr> "+
    " <tr><th scope='row'>Días</th> <td>"+form_dias +"</td></tr> "+
    " <tr><th scope='row'>Adultos</th> <td>"+form_adultos +"</td></tr><tr>"+
    "<th scope='row'>Niños</th> <td>"+form_niños+"</td></tr> "+
    "<th scope='row'>Total</th> <td>"+"$"+total+"</td></tr>"+"</tbody> </table>");

    $("#imgd").html("<img id='' class='img_Detalle' src='img/"+form_destino+".jpg' alt='imagen de detalle'>");
  }
  

});
