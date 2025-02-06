let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn")

sendMsgBtnEl.onclick = function() {
    let userInputValue = userInputEl.value;

    let containerEl = document.createElement("div");
    containerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(containerEl);

    let spanContainer = document.createElement("span");
    spanContainer.classList.add("msg-to-chatbot");
    spanContainer.textContent = userInputValue;
    containerEl.appendChild(spanContainer);
    userInputValue.value = ""
    getReplayFromChatBox();


}

function getReplayFromChatBox() {

    let chatbotMsgListLen = chatbotMsgList.length;

    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgListLen) - 1];

    let containerEl = document.createElement("div");
    containerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(containerEl);

    let spanContainer = document.createElement("span");
    spanContainer.classList.add("msg-from-chatbot");
    spanContainer.textContent = chatbotMsg;
    containerEl.appendChild(spanContainer);
}
