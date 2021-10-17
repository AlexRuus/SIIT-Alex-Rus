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
    
    //Creating user-info delete-section DIV


    //User Info( User-info -> user-img && user-data /  user-data -> user-email && user-message)

    let userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    message.appendChild(userInfo);


    //User Image

    let userImg = document.createElement('div');
    userImg.classList.add('user-img');
    let userPhoto = document.createElement('img');
    userPhoto.src = 'https://metro.co.uk/wp-content/uploads/2020/05/PRI_152296606.jpg?quality=90&strip=all&zoom=1&resize=480%2C282';
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
    userMessage.innerHTML = '<p>Aici apare textul de user</p>';
    userData.appendChild(userMessage);



    //Delete section
    
    let deleteSection = document.createElement('div');
    deleteSection.classList.add('delete-section');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'DELETE'
    
    deleteSection.appendChild(deleteBtn);
    message.appendChild(deleteSection);
 
    
}
