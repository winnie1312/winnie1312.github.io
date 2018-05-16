
//user's message
function insertMessage() {
  let userInput = $('#message-box').val();
  $('<div class="new-message">' + '<span class="user-text">' + userInput + '</span>'+ '</div>').appendTo($('.chat-area'));
  $('#message-box').val('');
  // $('.chat-area').scrollTop(document.getElementsByClassName('chat-area')[0].scrollHeight);
  $('.chat-area').scrollTop($('.chat-area')[0].scrollHeight);
};

//autoReply
let reply= [
  "Nice to meet you",
  "How are you?",
  "Very great, thank you. Anyway did I tell you? You are talking to a cat.",
  "Yes, that is right, I am a cat, I'm cute and human-friendy, I will be your best friend.",
  "You can ask Winnie, she loves me a lot even I often pee on her bed.",
  "Haha :D",
  "Anw I have to go now, Winnie is giving me yummy food",
  "It is a very good time to chat with you",
  "Yes see you very soon",
  ":D"
];

let i=0;
function autoReply() {
  $('<div class="auto-message">' + '<img id="icon" src="images/woori.png">' +'<span class="auto-text">' + reply[i] + '</span>' + '</div>').appendTo($('.chat-area'));
  i++;
  if (reply.length === i){
    i = 0;
  }
  //element.scrollTop() method
  $('.chat-area').scrollTop($('.chat-area')[0].scrollHeight);
  // console.log($('.chat-area'));
};

// button is clicked--> trigger
let clicked = function(e) {
  e.preventDefault();
  if ($.trim($('#message-box').val()).length > 0) {
    insertMessage();
    setTimeout(function() {
      autoReply();
    }, 500);
  }
};
$("#message-submit").on("click",clicked);

//enter key is pressed
let keyPress = function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    if ($.trim($('#message-box').val()).length > 0) {
      insertMessage();
      setTimeout(function() {
        autoReply();
      }, 500);
    }
  }
};
$(document).keypress(keyPress);
