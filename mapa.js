
///region  asd

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
var myradio=8;

function crearCircle(xmin, ymax,cp,dxC,dxCant,nco) {

  var distancia= 5000; // espacio entre los puntos 
  var min = Math.ceil(-5);
  var max = Math.floor(+5 );
  
  var vald= Math.floor(Math.random() * (max - min+1) + min); // The maximum is exclusive and the minimum is inclusive
  var rd2= Math.floor(Math.random() * (max - min+1) + min); // The maximum is exclusive and the minimum is inclusive
  var vald2= vald/distancia;
  var vald3 = rd2/distancia;
 var x =xmin+vald2;
 var y= ymax+vald3;
 //L.circleMarker(L.latLng(-5.40855833,-79.61306), {
  var circle3 =L.circleMarker(L.latLng([x,y]), {
    //
    radius: myradio,
    fillColor:  mcolr[nco].code.hex,
    color: 'f03',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.7,
    
  });
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
/*
var e = document.getElementById("enfx");
for (var z = 0; z < tmnioDX; z++) {   
  var temdx=sem34[0].DX[z];
  var para = document.createElement("p");
  para.innerHTML="<p>"+temdx+" </p>";
  e.append(para);
}
*/
// para formato vea

var dxarr=[tmnioDX];
for (var i = 0; i < tmnioDX; i++) {
  dxarr[i]=0;
}
//este for hace segun el lugar x DX 
var pruebaxxx=[];

function PORLUGAR() {
  
for (var i = 0; i < tmbLugares; i++) {
  var templugar=sem34[0].CANTLUGARES[i].LUGAR;  //console.log("lugar:"+i+"-"+templugar);//es el lugar
  var resultbusq=BUSCCP(templugar);  //console.log("buscando a"+resultbusq);
  if ( resultbusq>=0){
     var pruebadxx2=[tmnioDX];
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
             var lll=[tempcan];
             for (var l = 0; l < tempcan; l++) {
               dxarr[j]+=1;
               //console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j)
               var nretorno=crearCircle(xcor,ycor,templugar,temdx,tempcan,j);
               lll[l]={id:temdx,it:nretorno};
             }
             pruebaxxx.push(lll);
             pruebadxx2[j]=pruebaxxx;
             pruebaxxx.pop;
         }
       }
   }
 }
}

//PORLUGAR();
var pruebaxxx3=[];
var pruebalayer=[tmnioDX];
function PORDX() {
  for (var j = 0; j < tmnioDX; j++) {
    var xxx2=[];
    var temdx=sem34[0].DX[j];
      //console.log("diag: j "+j+"-"+temdx);//es la DX
          for (var i = 0; i < tmbLugares; i++) {
           // console.log("cant j: "+j+"-"+sem34[0].CANTLUGARES[i].NDX[j]  ); // ES LA CANTIDAD
           var templugar=sem34[0].CANTLUGARES[i].LUGAR; 
         //  console.log("lugar:"+i+"-"+templugar);//es el lugar
           var resultbusq=BUSCCP(templugar);  //console.log("buscando a"+resultbusq);
           if ( resultbusq>=0){  
            var tempcan=sem34[0].CANTLUGARES[i].NDX[j];
              if(tempcan>0){
                // console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j)
              // console.log(temdx+"-"+templugar+"-"+tempcan+"-"+j+"-"+dxarr[j]);
                for (var l = 0; l < tempcan; l++) {
                  var xcor=ubicanfai[resultbusq].x;
                  var ycor=ubicanfai[resultbusq].y;
                  //console.log(templugar+"-"+temdx+"-"+tempcan+"-"+j)
                  var nretorno=crearCircle(xcor,ycor,templugar,temdx,tempcan,j);
                    if (l==0){
                      xa=nretorno;
                    }else{
                      xa+=nretorno;
                    }
                  xxx2.push(nretorno);
                  nretorno
                }
              }
            }
         }
         pruebalayer[j]=  L.layerGroup(xxx2);
         xxx2.pop;
   }
  
  }

  PORDX();
var myCar;
myCar={
  label: sem34[0].DX[0],
    type: "circle",
    radius: 6,
    color: 'f03',
    fillColor:mcolr[0].code.hex,
    fillOpacity: 0.6,
    weight: 2,
    layers: pruebalayer[0], inactive: false
 
};

console.log(pruebalayer);

var myCar2;
var daax=[];
//daax.push(myCar);
for (var i = 0; i < pruebalayer.length; i++) {
  myCar2={
    label: sem34[0].DX[i],
    type: "circle",
    radius: myradio,
    color: 'f03',
    fillColor:mcolr[i].code.hex,
    fillOpacity: 0.6,
    weight: 1,
    layers: pruebalayer[i],inactive:false
  };
  pruebalayer[i].addTo(map);
  daax.push(myCar2);
   }

console.log(daax);
// Agregar un marcador

// Agregar la leyenda


const legend = L.control.Legend({
  position: "bottomright",
  collapsed: false,
  symbolWidth: 24,
  opacity:1,
  column:1,
  legends:  daax

}).addTo(map);

