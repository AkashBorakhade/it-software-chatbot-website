function sendMessage() {
  var input = document.getElementById("userMessage");
  var chatBox = document.getElementById("chatBox");
  var message = input.value;

  if (message === "") {
    return;
  }

  chatBox.innerHTML += "<p><b>You:</b> " + message + "</p>";

  var reply = "Sorry, I didn't understand.";

  if (message.toLowerCase() === "hello") {
    reply = "Hello! Welcome to TechSoft Solutions 👋";
  } 
  else if (message.toLowerCase() === "services") {
    reply = "We provide Web Development and Software Solutions.";
  } 
  else if (message.toLowerCase() === "contact") {
    reply = "Email us at info@techsoft.com";
  }

  chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
  input.value = "";
}
