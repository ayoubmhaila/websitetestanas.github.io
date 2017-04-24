function initMap() {
        var uluru = {lat: 33.5801543, lng: -7.5674638};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
/*----------------*/
var imagevar = 0, imagesTotal  = 5;
function myFunc(x){
var img = document.getElementById("beta");

imagevar+=x;
if(imagevar>imagesTotal) imagevar=1;
if(imagevar<1) imagevar=imagesTotal;

var ur = "images/a_"+imagevar+".png";
img.style.backgroundImage = "url('" + ur + "')";
clearInterval(myTimer);
myTimer = setInterval(myFunc2, 10000);
}
function myFunc2(){
var img = document.getElementById("beta");

imagevar+=1;
if(imagevar>imagesTotal) imagevar=1;
if(imagevar<1) imagevar=imagesTotal;

var ur = "images/a_"+imagevar+".png";
img.style.backgroundImage = "url('" + ur + "')";
}
//window.setInterval(myFunc2,10000);
var myTimer = setInterval(myFunc2, 10000);
/*----------------------------------------------------------*/
$(document).ready(function(){

s = new slider(".galerie");
});
var slider = function(id){
self = this ;

this.div = $(id);
this.slider = this.div.find(".slider");

this.largeurCache = this.div.width();

this.largeur = 0;
this.div.find(".bloc").each(function(){
self.largeur +=$(this).width();
self.largeur +=parseInt($(this).css("padding-left"));
self.largeur +=parseInt($(this).css("padding-right"));
self.largeur +=parseInt($(this).css("margin-left"));
self.largeur +=parseInt($(this).css("margin-right"));
});
this.prec = this.div.find(".prec");
this.suiv = this.div.find(".suiv");
this.saut = this.largeurCache/2;
this.nbEtapes = Math.ceil(this.largeur/this.saut - this.largeurCache/this.saut);
this.courant = 0;

this.suiv.click(function(){
	if(self.courant < (self.nbEtapes-1)){
	self.courant++;	
	self.slider.animate({
	
	left:-self.saut * self.courant

},1000);}
});


this.prec.click(function(){
	if(self.courant > 0){
	self.courant--;	
	self.slider.animate({
	
	left:-self.saut * self.courant

},1000);}
});}
