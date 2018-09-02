/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       
        /*document.getElementById("cordova").innerHTML = device.cordova;
        document.getElementById("model").innerHTML = device.model;
        document.getElementById("platform").innerHTML = device.platform;
        document.getElementById("version").innerHTML = device.version;
        document.getElementById("manufacturer").innerHTML = device.manufacturer;
        document.getElementById("isVirtual").innerHTML = device.isVirtual;
        
        alert(device.cordova);
        alert(device.model);
        alert(device.version);
        alert(device.manufacturer);
        
        function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            //alert('Connection type: ' + states[networkState]);
            document.getElementById("conectionType").innerHTML = states[networkState];
        }
        checkConnection();
        */


    },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {

        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            alert("Level: " + status.level + " isPlugged: " + status.isPlugged);

            document.getElementById("level").innerHTML = status.level;
            document.getElementById("isPlugged").innerHTML = status.isPlugged;
        }

    }
    */

    /* 
    alert: function(){

            function alertDismissed() {
                alert("Esse é o alert nativo do JavaScript")
            }

            navigator.notification.alert(
            'Esse é o Alert do Pluguin Phonegap',  // message
            alertDismissed,         // callback
            'Pluguin Alert do Phonegap XD',            // title
            'OK'                  // buttonName
            );
    }


   confirmar: function(){

            function onConfirm(buttonIndex) {
                alert('You selected button ' + buttonIndex);
            }

            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']     // buttonLabels
            );
    }
    

    prompt: function(){

        function onPrompt(results) {
            alert("Você selecionou " + results.buttonIndex + " e adicionou " + results.input1);
        }

        navigator.notification.prompt(
            'Informe seu Nome',  // message
            onPrompt,                  // callback to invoke
            'Registro',            // title
            ['Enviar','Sair'],             // buttonLabels
            'Joãozinho das Piadas ...'                 // defaultText
        );
    }


    beep: function(){
        // Beep twice!
        navigator.notification.beep(2);
    }


    capturePhoto: function(){

        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50, 
            destinationType: Camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true,
        });

        function onSuccess(imageData) {
            var image = document.getElementById('minhaImagem');
            image.style.display = "block";
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
    */



};

/*
document.getElementById("openBrowser").addEventListener("click", openBrowser);

function openBrowser() {
   var url = 'https://www.google.com.br';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}


document.getElementById("getPosition").addEventListener("click", getPosition);
document.getElementById("watchPosition").addEventListener("click", watchPosition);

function getPosition() {
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
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
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

function watchPosition() {
   var options = {
      maximumAge: 3600000,
      timeout: 3000,
      enableHighAccuracy: true,
   }
   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {
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
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}*/

//-----------------------------------------------------------------------------------
/*
function getLanguage() {
   navigator.globalization.getPreferredLanguage(onSuccess, onError);

   function onSuccess(language) {
      document.getElementById("visor1").innerHTML = 'language: '+language.value;
   }

   function onError(){
      document.getElementById("visor1").innerHTML = 'Error!';
   }
}
function getLocaleName() {
   navigator.globalization.getLocaleName(onSuccess, onError);

   function onSuccess(locale) {
       document.getElementById("visor2").innerHTML = 'Local: '+locale.value;
   }

   function onError(){
      document.getElementById("visor2").innerHTML = 'Error!';
   }
}

function getDate() {
   var date = new Date();

   var options = {
      formatLength:'short',
      selector:'date and time'
   }
   navigator.globalization.dateToString(date, onSuccess, onError, options);

   function onSuccess(date) {
      alert(data.value);
      document.getElementById("visor3").innerHTML = 'Data :'+data.value;
   }

   function onError(){
      document.getElementById("getDate").innerHTML = 'Error!';
   }
}

//-----------------------------------------------------------------------------------

document.addEventListener("deviceready", device, false);
function device() {
    
    alert('OI');
    document.getElementById("visor1").innerHTML = 'Model: '+device.model;
    document.getElementById("visor2").innerHTML = 'Platform: '+device.platform;
    document.getElementById("visor3").innerHTML = 'UUID: '+device.uuid;
    document.getElementById("visor4").innerHTML = 'Version: '+device.version;
    document.getElementById("visor5").innerHTML = 'Fabric: '+device.manufacturer;
    document.getElementById("visor6").innerHTML = 'SERIAL: '+device.serial;
    document.getElementById("visor7").innerHTML = 'Virtal: '+device.isVirtual;
}


//-----------------------------------------------------------------------------------
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
    document.getElementById("model").innerHTML = status.level;
    document.getElementById("model").innerHTML = status.isPlugged;
}

//-----------------------------------------------------------------------------------
function openBrowserSHODAN() {
   var url = 'https://www.shodan.io';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}

//-----------------------------------------------------------------------------------
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    
    document.getElementById("model").innerHTML = device.model;
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("manufacturer").innerHTML = device.manufacturer;
    document.getElementById("serial").innerHTML = device.serial;
    document.getElementById("isVirtual").innerHTML = device.isVirtual;
}

//-----------------------------------------------------------------------------------
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
    document.getElementById("model").innerHTML = device.model;
    document.getElementById("model").innerHTML = device.model;
}


//-----------------------------------------------------------------------------------

document.getElementById("networkInfo").addEventListener("onclick", networkInfo);
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

function networkInfo() {
   var networkState = navigator.connection.type;
   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.CELL]     = 'Cell generic connection';
   states[Connection.NONE]     = 'No network connection';
   
   document.getElementById("tipoConexao").innerHTML = states[networkState];
}

function onOffline() {
   alert('Você está Offline!');
}

function onOnline() {
   alert('Você está Online!');
}

//-----------------------------------------------------------------------------------


function getPosition() {
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }

  var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
        document.getElementById("latitude").innerHTML = position.coords.latitude;         
        document.getElementById("longitude").innerHTML = position.coords.longitude;        
        document.getElementById("altitude").innerHTML = position.coords.altitude;         
        document.getElementById("accuracy").innerHTML = position.coords.accuracy;         
        document.getElementById("altitudeAccuracy").innerHTML = position.coords.altitudeAccuracy; 
        document.getElementById("headin").innerHTML = position.coords.headin;          
        document.getElementById("speed").innerHTML = position.coords.speed;                      
        document.getElementById("timestamp").innerHTML = position.timestamp;                   
    };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

//-----------------------------------------------------------------------------------

function watchAcceleration() {
   var accelerometerOptions = {
      frequency: 3000
   }
   var watchID = navigator.accelerometer.watchAcceleration(
      accelerometerSuccess, accelerometerError, accelerometerOptions);

   function accelerometerSuccess(acceleration) {
      document.getElementById("Alatitude").innerHTML = acceleration.x;
      document.getElementById("Alongitude").innerHTML = acceleration.y;
      document.getElementById("Aaltitude").innerHTML = acceleration.z;
      document.getElementById("Atimestamp").innerHTML = acceleration.timestamp;

      setTimeout(function() {
         navigator.accelerometer.clearWatch(watchID);
      }, 10000);
   };

   function accelerometerError() {
      alert('onError!');
   };
  
}
//-----------------------------------------------------------------------------------

/*
function watchAcceleration() {
   var accelerometerOptions = {
      frequency: 3000
   }
   var watchID = navigator.accelerometer.watchAcceleration(
      accelerometerSuccess, accelerometerError, accelerometerOptions);

   function accelerometerSuccess(acceleration) {
      document.getElementById("Alatitude").innerHTML = position.coords.latitude;         
        document.getElementById("Alongitude").innerHTML = position.coords.longitude;        
        document.getElementById("Aaltitude").innerHTML = position.coords.altitude;         
        document.getElementById("Aaccuracy").innerHTML = position.coords.accuracy;         
        document.getElementById("AaltitudeAccuracy").innerHTML = position.coords.altitudeAccuracy; 
        document.getElementById("Aheadin").innerHTML = position.coords.headin;          
        document.getElementById("Aspeed").innerHTML = position.coords.speed;                      
        document.getElementById("Atimestamp").innerHTML = position.timestamp;                   
    };

      setTimeout(function() {
         navigator.accelerometer.clearWatch(watchID);
      }, 10000);
   };

   function accelerometerError() {
      alert('onError!');
   };
  
}

//-----------------------------------------------------------------------------------
function openBrowserSHODAN() {
   var url = 'https://www.shodan.io';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}
//-----------------------------------------------------------------------------------

function openBrowserINSECAM() {
   var url = 'http://www.insecam.org/';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}
//-----------------------------------------------------------------------------------
*/
function openBrowser() {
  alert('Função execultada...');
   var url = 'https://duckduckgo.com/';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
   //-----------------------------------------------------------------------------------
}


function teste(){

    internet.getStatus(function(status) {
       switch(status) {
           case internet.CONNECTED: alert('Connected !'); break;
           case internet.DISCONNECTED: alert('Disconnected...');
       }
    });

}


function cleanAll(){
  document.getElementById("visor1").innerHTML = '.';
  document.getElementById("visor2").innerHTML = '.';
  document.getElementById("visor3").innerHTML = '.';
  document.getElementById("visor4").innerHTML = '.';
  document.getElementById("visor5").innerHTML = '.';
  document.getElementById("visor6").innerHTML = '.';
  document.getElementById("visor7").innerHTML = '.';
}