function onhover(element){
  element.style.color = "white";
}
function outhover(element){
    element.style.color = "gray";
}

$(document).ready(function (){
  $("#videographers").click(function (){
      $('html, body').animate({
          scrollTop: $("#videographerss").offset().top
      }, 2000);
  });
});
$(document).ready(function (){
  $("#aboutus").click(function (){
      $('html, body').animate({
          scrollTop: $("#videographerss").offset().top
      }, 2000);
  });
});
$(document).ready(function (){
  $("#reviews").click(function (){
      $('html, body').animate({
          scrollTop: $("#review").offset().top
      }, 2000);
  });
});
$(document).ready(function (){
  $("#lastt").click(function (){
      $('html, body').animate({
          scrollTop: $("#last").offset().top
      }, 2000);
  });
});
$(document).ready(function (){
  $("#contacts").click(function (){
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 2000);
  });
});

function initMap() {
  var options = {
  center: { lat: 43.242362293173514, lng: 76.89867084127673 },
  zoom: 11,
}
 var map = new google.maps.Map(document.getElementById("map"), options);
 
 var marker = new google.maps.Marker({
  position: new google.maps.LatLng(43.26324632193841, 76.93252863386469),
  map: map,
 icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png')
});
var marker2 = new google.maps.Marker({
  position: new google.maps.LatLng(43.23901718210478, 76.8950566636854),
  map: map,
 icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png')
}); 
var marker3 = new google.maps.Marker({
  position: new google.maps.LatLng(43.23894226579325, 76.82976209819137),
  map: map,
 icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png')
 
}); 

    
  
}
