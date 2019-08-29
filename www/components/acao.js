 $(document).on("click","#mapa",function(){
 var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
 });
 function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Sem conexão com a Internet';
    states[Connection.ETHERNET] = 'Sem conexão com a Internet';
    states[Connection.WIFI]     = 'Sem conexão com a Internet';
    states[Connection.CELL_2G]  = 'Sem conexão com a Internet';
    states[Connection.CELL_3G]  = 'Sem conexão com a Internet';
    states[Connection.CELL_4G]  = 'Sem conexão com a Internet';
    states[Connection.CELL]     = 'Sem conexão com a Internet';
    states[Connection.NONE]     = 'Sem conexão com a Internet';

    alert('Tipo de conexão: ' + states[networkState]);
};

checkConnection();
