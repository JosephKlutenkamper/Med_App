// Import the messaging module
import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  fetch("https://medappweb.azurewebsites.net/Person/probe")
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data[0].FirstName);
      sendMessage(data[0].FirstName);
    });
};

function sendMessage(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send(data);
  }
}

// fetch("https://medappweb.azurewebsites.net/Person/probe")
//   .then(resp => resp.json())
//   .then(function(data) {
//     console.log(data[0].FirstNam);
//     sendMessage
//   });

// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myArr = JSON.parse(this.responseText);
//     myFunction(myArr);
//   }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(arr) {
//   var out = "";
//   var i;
//   for(i = 0; i < arr.length; i++) {
//     out += arr[i].display;
//   }
//   console.log(out);
//}
