

  const cities = L.layerGroup();

  const mLittleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities);
  const mDenver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities);
  const mAurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities);
  const mGolden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

  const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  const streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
//OMS muestra tipo de mapa normal
  const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  const map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [osm, cities]
  });

  const baseLayers = {
      'OpenStreetMap': osm,
      'Streets': streets
  };

  const overlays = {
      'Cities': cities
  };

  const layerControl = L.control.layers(baseLayers, overlays).addTo(map);
  const crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.');
  const rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');

  const parks = L.layerGroup([crownHill, rubyHill]);

  const satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  layerControl.addBaseLayer(satellite, 'Satellite'); // muestra vista satelital
  layerControl.addOverlay(parks, 'Parks');





  //

  
let map = L.map('map').setView([4.639386,-74.082412],5.3)

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Agregar mapa base para el Mini Mapa
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});


// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
    }
}


// Agregar coordenadas para dibujar una polilinea
var coord_camino = [
    [4.798039528031478, -74.03124090388363],
    [4.79059838513191, -74.02832266048456],
    [4.786663954996014, -74.02806516841994],
    [4.784183541760121, -74.02832266048456],
    [4.781275459625073, -74.02703520016145],
    [4.777683105825763, -74.02617689327938],
    [4.7735878498196636, -74.02655897938767],
    [4.771834421730695, -74.02735291325358],
    [4.770316205986422, -74.02692375981255]
];

var camino = L.polyline(coord_camino, {
    color: 'red'
}).addTo(map);

// Agregar un marcador
var marker_cerro = L.circleMarker(L.latLng(4.791132952755172, -73.99527784552215), {
    radius: 6,
    fillColor: "#ff0000",
    color: "blue",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6,
}).addTo(map);

// Agregar la leyenda
const legend = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    legends: [
        {
            label: "Cerro Guayabos",
            type: "circle",
            radius: 6,
            color: "blue",
            fillColor: "#FF0000",
            fillOpacity: 0.6,
            weight: 2,
            layers: [marker_cerro],
            inactive: false,
        }, {
            label: "Carrera Septima",
            type: "polyline",
            color: "#FF0000",
            fillColor: "#FF0000",
            weight: 2,
            layers: camino
        },{
            label: "Marcador",
            type: "image",
            url: "Leaflet.Legend-master/examples/marker/purple.png"
        },{
            label: "Linea Punteada",
            type: "polyline",
            color: "#0000FF",
            fillColor: "#0000FF",
            dashArray: [5, 5],
            weight: 2
        }, {
            label: "Poligono",
            type: "polygon",
            sides: 5,
            color: "#FF0000",
            fillColor: "#FF0000",
            weight: 2
        }]
}).addTo(map);



/////////////////////FUNCIONA





let map = L.map('map').setView([-5.3466606,-79.6511884],12)
//Agregar tilelAyer mapa base desde openstreetmap
//AGREGA EL MAPA BASE
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
  if(feature.properties && feature.properties.NOMBDIST){
      layer.bindPopup("<strong>NOMBDIST: </strong>" + feature.properties.NOMBDIST + "<br/>" + "<strong>CAPITAL: </strong>" + feature.properties.CAPITAL);
    }
}
//var n=0;

var tmnioDX=sem34[0].DX.length;
var tmbLugares=sem34[0].CANTLUGARES.length;
var ncp=ubicanfai.length;
var dxarr2=[tmnioDX];
var dxarr3=[tmnioDX];
function crearCircle(xmin, ymax,cp,dxC,dxCant,nco) {

  var distancia= 2000; // espacio entre los puntos 
  var min = Math.ceil(-9);
  var max = Math.floor(+9 );
  
  var vald= Math.floor(Math.random() * (max - min+1) + min); // The maximum is exclusive and the minimum is inclusive
  var rd2= Math.floor(Math.random() * (max - min+1) + min); // The maximum is exclusive and the minimum is inclusive
  var vald2= vald/distancia;
  var vald3 = rd2/distancia;
 var x =xmin+vald2;
 var y= ymax+vald3;
  var circle3 = L.circle([x,y], {
    color: 'f03',
    fillColor: mcolr[nco].code.hex,
    fillOpacity: 0.5,
    radius: 300
    
  });
  dxarr2[nco]=circle3;
  
  dxarr2[nco].addTo(map);

// circle3.bindPopup(texto); // funciona tener en cuenta 
circle3.bindPopup("<strong>CENTRO POBLADO: </strong>" + cp + "<br/> <strong>Diagnostico: </strong>" + dxC
+ "<br/>  <strong># de Casos: </strong>" + dxCant); // cambiar recbir como paramet

return circle3;

}
// Agregar capa en formato GeoJson

L.geoJson(canchaque).addTo(map);
//agregar al poput
var barriosJS = L.geoJson(canchaque,{
  onEachFeature: popup
}).addTo(map);

// Agregar capa en formato GeoJson
//disx[0].DX[1] // enfermedad
//disx[0].CANTDIAGNOSITCO[0] // array lugar dentro esta ndx
//sem34[0].CANTDIAGNOSITCO[0].NDX[0]


function BUSCCP(MICP) {
  if (MICP=="LA VILLA"||MICP=="CENTRO"||MICP=="SAN JUAN"){
    MICP="CANCHAQUE";
  }
  for (var k = 0; k < ncp; k++) {   
    var templugarjs= ubicanfai[k].cp;
    if (templugarjs.indexOf(MICP)>=0){
     return k; // console.log("SE ENCONTRO");//es la DX
    }
   }
       return -1;//console.log("NO SE ENCONTRO");//es la DX
}

var e = document.getElementById("enfx");

for (var z = 0; z < tmnioDX; z++) {   
  var temdx=sem34[0].DX[z];
 

  var para = document.createElement("p");
  para.innerHTML="<p>"+temdx+" </p>";
  
  
  e.append(para);

}

// para formato vea

var dxarr=[tmnioDX];
for (var i = 0; i < tmnioDX; i++) {
  dxarr[i]=0;
}


//este for hace segun el lugar x DX 

var pruebaxxx=[];
for (var i = 0; i < tmbLugares; i++) {

  var templugar=sem34[0].CANTLUGARES[i].LUGAR;
 //console.log("lugar:"+i+"-"+templugar);//es el lugar

 var resultbusq=BUSCCP(templugar);
 //console.log("buscando a"+resultbusq);
 if ( resultbusq>=0){
  
 
 for (var j = 0; j < tmnioDX; j++) {
 // console.log("diag: j "+j+"-"+sem34[0].DX[j]);//es la DX
 
  var temdx=sem34[0].DX[j];
  
 // console.log("cant j: "+j+"-"+sem34[0].CANTLUGARES[i].NDX[j]  ); // ES LA CANTIDAD
  var tempcan=sem34[0].CANTLUGARES[i].NDX[j];
  
  var xcor=ubicanfai[resultbusq].x;
  var ycor=ubicanfai[resultbusq].y;
  if(tempcan>0){
   // console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j)
   
    //console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j+"-"+dxarr[j]);
    for (var l = 0; l < tempcan; l++) {
      dxarr[j]+=1;
    //console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j)
      var nretorno=crearCircle(xcor,ycor,templugar,temdx,tempcan,j);
      pruebaxxx.push({id:temdx,it:nretorno})

    }

    
  }
 }

}
}

console.log("--------");
var myCar;
for (var i = 0; i < tmnioDX; i++) {

  
  console.log(sem34[0].DX[i]+"-"+dxarr[i]);


  for (var i = 0; i < pruebaxxx.length; i++) {

    ///// compar pasar uno nuevo  luego pasar a mycar 
  }

   /*myCar.push({
    label: sem34[0].DX[i],
    type: "circle",
    radius: 6,
    color: "blue",
    fillColor: "#FF0000",
    fillOpacity: 0.6,
    weight: 2,
    layers: dxarr2[i],
    inactive: false
} );

*/


}


myCar={
  label: sem34[0].DX[0],
  type: "circle",
  radius: 6,
  color: "blue",
  fillColor: "#FF0000",
  fillOpacity: 0.6,
  weight: 2,
  layers: dxarr2[0],
  inactive: false
//CREAR UNA FUNCION Q LLENE ESTOS
  //-79.61306,x:-5.40855833
};


// Agregar un marcador
var marker_cerro = L.circleMarker(L.latLng(-5.3466606,-79.6511884), {
    radius: 6,
    fillColor: "#ff0000",
    color: "blue",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6,
}).addTo(map);
var circle4 = L.circleMarker([-5.3466606,-79.6511884], {
  color: 'f03',
  fillColor: 'f03',
  fillOpacity: 0.5,
  radius: 10
  
}).addTo(map);
// Agregar la leyenda
const legend = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    legends: [
      myCar,myCar
    ]
}).addTo(map);



console.log(pruebaxxx);