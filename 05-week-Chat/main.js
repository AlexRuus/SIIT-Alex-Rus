const sendBtn = document.querySelector('#send-btn');
const userText = document.querySelector('#user-typing-area');
const msgContainer = document.querySelector('#message-container');

sendBtn.addEventListener('click',function(){
    let text = userText.value;
    console.log(text);
    createUserBox();
});


function createUserBox(){
    let message = document.createElement('div');
    message.classList.add('user-box');
    msgContainer.appendChild(message);
}