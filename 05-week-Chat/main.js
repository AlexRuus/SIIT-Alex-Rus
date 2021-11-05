const sendBtn = document.querySelector('#send-btn');
const userText = document.querySelector('#user-typing-area');
const msgContainer = document.querySelector('#message-container');


//This function will add user messages

sendBtn.addEventListener('click',function(){
    let text = userText.value;
    if(text.trim() != ''){
        createUserBox();
    }
    userText.value = '';
});

userText.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        let text = userText.value;
        if(text.trim() != ''){
            createUserBox();
        }
        userText.value = '';      
    }
});


function createUserBox(){
    let message = document.createElement('div');
    message.classList.add('user-box');
    msgContainer.prepend(message);
    
    //Creating user-info delete-section DIV


    //User Info( User-info -> user-img && user-data /  user-data -> user-email && user-message)

    let userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    message.appendChild(userInfo);


    //User Image

    let userImg = document.createElement('div');
    userImg.classList.add('user-img');
    let userPhoto = document.createElement('img');

    // This code is used to generate one of those 3 pictures
    let math = Math.random();

    if(math > 0.8){
        userPhoto.src = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80';
    }else if (math > 0.4 && math <= 0.8){
        userPhoto.src = 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';
    }else{
        userPhoto.src = 'https://images.unsplash.com/photo-1578146024300-a8f9df2224ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }

    userPhoto.classList.add('img');
    userImg.appendChild(userPhoto);
    userInfo.appendChild(userImg);


    // User Data

    let userData = document.createElement('div');
    userData.classList.add('user-data');
    userInfo.appendChild(userData);

    //User Email

    let userEmail = document.createElement('div');
    userEmail.classList.add('user-email');
    userEmail.innerHTML = '<h4>email@test.supertest</h4>';
    userData.appendChild(userEmail);

    //User Message

    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = userText.value;
    userData.appendChild(userMessage);



    //Delete section
    
    let deleteSection = document.createElement('div');
    deleteSection.classList.add('delete-section');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'
    

    //This function remove user messages

    deleteBtn.addEventListener('click',function(){
        msgContainer.removeChild(message);
    });

    deleteSection.appendChild(deleteBtn);
    message.appendChild(deleteSection);
 
    
}
