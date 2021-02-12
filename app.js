//Gestion de las Novedades

fetch('http://localhost:1337/novedades').then(res => res.json()).then(function(aa){
    const arreglillo = aa
   for (let i = 0; i < arreglillo.length; i++) {
       const data = arreglillo[i];

        novedad =  `<div class="novedad row align-items-center">
                    <div class="col-2 nov-img"> 
                    <img class="nov-img-img" src="http://localhost:1337${data.Imagen.url}" width="150" height="auto">
                    </div>
                    <div class="col-4 nov-inf">
                    <h3 class="nov-tit ">${data.Titulo}</h3>
                    <p class="nov-des">${data.Descripcion}
                    </p>
                    </div>
                    
                    </div>`


       novedades = document.getElementById('novedades').innerHTML + novedad             
       document.getElementById('novedades').innerHTML = novedades
}})
 

 //Gestion del precio del cereal

 fetch('http://localhost:1337/preciodelcereals/60233eab9c2252129cdaa4b0').then(res => res.json()).then(data => {
    soja = data.Soja;
    maiz = data.Maiz;
    document.getElementById('soja').innerHTML =  'U$S ' + soja
    document.getElementById('maiz').innerHTML =  'U$S ' + maiz
})

//Gestion del Tipo de cambio

fetch('http://localhost:1337/tipodecambios/60233eb49c2252129cdaa4b1').then(res => res.json()).then(data => {
   tc = data.tipodecambio;
    document.getElementById('tc').innerHTML = '$ ' + tc
})

fetch('http://localhost:1337/tipodecambios/60233eb49c2252129cdaa4b1').then(res => res.json()).then(data => {
   tc = data.tipodecambio;
    document.getElementById('tc2').innerHTML = '$ ' + tc
})