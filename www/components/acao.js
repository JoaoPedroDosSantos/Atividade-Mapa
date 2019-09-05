
$(document).on("click","#mapa",function(){
  function checkConnection(){
    var networkState = navigator.connection.type;
    if(navigator.connection.type == Connection.NONE){
    alert("sem conexão com net");
    navigator.notification.beep(3);
    navigator.vibrate(5000);
   } 
}

checkConnection();

navigator.notification.beep(1);

var onSuccess = function(position) {
     L.mapquest.key = 'sNPOu9rXHGFFMMmZXAQHYObv5tN5Ab5F';

     L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 15
});
    };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

