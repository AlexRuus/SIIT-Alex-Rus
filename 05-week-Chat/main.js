const sendBtn = document.querySelector('#send-btn');
const userText = document.querySelector('#user-typing-area');


sendBtn.addEventListener('click',function(){
    let text = userText.value;
    console.log(text);
})