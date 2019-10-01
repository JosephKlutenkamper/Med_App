// Import the messaging module
import * as messaging from "messaging";
import document from "document";

let marquee = document.getElementById("marquee");
marquee.text = "yo";
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(JSON.stringify(evt.data));
  marquee.text = evt.data;
};

setTimeout(function() {
  marquee.state = "enabled";
}, 2000);
