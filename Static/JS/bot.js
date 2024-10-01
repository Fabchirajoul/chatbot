// // This allows the bot icon to show when the popup is open
// // function toggleBotPopup() {
// //     var chatPopup = document.getElementById("botPopup");
// //     chatPopup.classList.toggle("show");
// // }

// This allows the bot icon to disappear when the popup is open
function toggleBotPopup() {
    var chatPopup = document.getElementById("botPopup");
    var botIcon = document.getElementById("botIcon");
    
    chatPopup.classList.toggle("show");
    
    if (chatPopup.classList.contains("show")) {
        botIcon.style.display = "none";
    } else {
        botIcon.style.display = "block";
    }
}