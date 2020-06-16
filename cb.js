$(document).ready(function () {
        
/// First userinput form///
  $(".form-input").on("submit", function (event) {
    event.preventDefault(); //prevents page from refreshing
    
    $(this).find(":submit").attr("disabled", "disabled"); //disables  user re-entering anymore text

    var name = $("[name=name]").val();
    var order = $("[name=order]").val();
    addMessage( "<ul>Hello " + name +". Thankyou for getting in touch in regards order number: " +order +". How can we help you today?</ul>","bot");

     clearForm() //clears first input form from the page

/// Second userinput form ///
    $("#user-input").on("submit", function (event) {
      event.preventDefault();
      var userInput = $("[name=userInput]").val();
     
      addMessage(userInput, "user"); //adds message from user into 'chatbot'
      
      setTimeout(() => {addMessage(createReply(replies), "bot");}, 3000); //adds random message from comp with delay
      
      clear(".submit-form") //clears userInput following submission

    });
  });
});

///// EXTERNAL FUNCTIONS //////

// Adds messages to chat and based on the 2nd argument decides on it class
function addMessage(message, who) {
  $(".chat-box").append(`<div class=${who}> <div> ${message} </div><div class="time"> ${getTime()} </div></div>` );
  var d = $('.chat-box');
 return d.scrollTop(d.prop("scrollHeight"));
}

// Gets random automatic reply from an array
function createReply(replies) {
  var random = Math.floor(Math.random() * replies.length);
  return replies[random];
}

// Gets time to appends to message
function getTime() {
  var currentdate = new Date();
  var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
  return datetime;
}

// Array of automated responses provided to the chatbot
const replies = [
        'Apologies for this, please wait a few moments while we check your order.', 
        'Your order was placed 28th May 2020',
        'It looks like your order was delivered 2nd June. Please can you confirm you have not recieved the item.',
        'Thank you very much!',
        'Is there anything else I can help you with today?',
        'We look forward to you shopping with us again'
        ];

//clears userInput following submission
 function clear(type){
        $(type)[0].reset();
 }

//clears first input form from the page
function clearForm(){
    $(".container-one").remove()
}
