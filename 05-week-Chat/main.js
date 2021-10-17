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


    let math = Math.random();
    console.log(math);
    if(math > 0.8){
        userPhoto.src = 'https://metro.co.uk/wp-content/uploads/2020/05/PRI_152296606.jpg?quality=90&strip=all&zoom=1&resize=480%2C282';
    }else if (math > 0.4 && math <= 0.8){
        userPhoto.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PEBAPEg8QEA8PEBAPDw8PDQ8QFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLjcBCgoKDg0OFhAQGC0dHR0tKy0rKystLSstKy0tKy0tLS0tKy0rKy0tLS03Nys3Ny0tKystLSsrKy0rKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EADkQAAIBAgUDAgQEBAUFAQAAAAABAgMRBAUSITEGQVEiYRNxgaEjMpGxB0JiwTNDUtHhFnKCkvAU/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACIRAQEBAAIDAAMAAwEAAAAAAAABAgMREiExBBNBIjNRMv/aAAwDAQACEQMRAD8A8PEFYgAAAAAAAAAAAAAAALYQAAVDkwkwDoI0EGAOaEsAgAAAAAAAAAAAAAAAAoAAAIKxAFEAAkAKgAAALACLfIMvp15OMpNNK6StuioJWXYt0akai7bNeURfi3HZNS1rJdOUHsk0/mV1fpaV/TONvdNMsMDmU6/+HH59lFF3Sopc3k7fcw71L7evePg3n1ljH0xX7aWvN0TaHSDdtdVLzpje33NjGmu3B2pLS07LZ334fsLymfwM2d9MlHpCkualSS7pKMX9xJ9KUv5XU9r6TYYiSk/THSkrW/ucpRRH7Wk/BzJ8Y7EdJqMYy1TV7J7RlZ+Nipz3JXhp2Tc4WTUtLi/k12PRHR5i3pTcXJ6dVttnb5C1cpgoVry+PDQ4pSg1qbjdO7fJbO+3JzfjZzLXkbQhNzTByo1ZU5K1rNX8NXREaN3m2dGgABAAAAAAAAAABQAAAQUQAFsIKgkCjhQGIB4gDUScFhZVZqC78u3BwNN0nQajOab9Xp9rEW9RpxY8tSL3LcLGjBQgtu77tlzSwtoa27cW8PyvmV1KLLKjSdtTUktWm72V12OTV7e9xceZ1Ickd8Mo6nr06dMlZpve23DQkIHanRcnZRbfsZ9vQ8PXThoioUtP5nD8TU27SESO9Sm4uzTT8M5tDtEx1PTlLiV1dycbPvFRVrE3KbSvT2jJyjKUnf1QXMX9wn8OUOFGaSW13q83IilpepF86cnNxzWbGI/iJhdFeFSztVjJq7vdRlZfaxkbnof8QI0p0IzUk6kJJRiotKMHyjz2x15vp8/zZ8ddGAAFmIAACAAAAAAAKAAAMQUEAAgBBJ4XGgAqkKJpFAGbPpyNqMUvqYxmz6aq/gL9CnJ8dX4f+xd4d8Pw0/HBZ0ql004x/wASVRPdyu+12VtEtqdDSk7p37Rd2vocle/jxl9n0yXha2iakvqvK7o4Rptb6Zf+rHwhfXuouMXK0/Tqt2RT+ujW8f2uuLrKehRjpjCOmKu5O1+7fJEkjvKLUYNuHripJRmpP6+DmyU8fj1/iZKk9MZcKUZyer02UXbZvkjXS54/sd5zavu901ztZ9rEWV3svki0Y8nfvtnOs6Ufga1Ld1FHS+fmYS5r+tcRtCn3u279rPgyB14+Pnfy/wD2RoQc0I0XcpoCiAAAAQAAAFAAAGIKAAAgqCTkhREwuA4BqYoAavpe8qaS5UvoZQ0vRlb1Th7XRGvjTi3467ailjcPSlaeqbVr7XVzS5X1Pgm1FrQ77Jw/4Mu4WnGMErydm7bIn4bKak6koaYysrqS2Rh4ytNcuu/r0qhiqc4JxaafhHLHZnSoxcpJS9lG7Zl+nq0oVvhO9r2L7qCFo+lXfuYWdadWd3WFFi+po1Xpp5fTb/1Siov9bHCr8S950Phx7/CldL6EbEZa5wco1Gql/wAu6R0o4LEw03kmn2fP09jb/Hpzzk5Zr1XbEKLpfluv5ZxjaX/kVb9r35252L6TaVn4M9mVXRJNR1Rf5kuy8mf2u7j/ACtZnWvbI9bU7uE73e6d+TJo1HWDTjSkndO//BlrnVj44fy7P2FEaHCF3KaxBzQlgGgKxAgAAAKAAAADBAAAASLijRbgKhw1DgEaLXpmq44iHummVTZPyOaVeDfkikeq4fBOaTXJZ4ahOPlETJsSuLl1VrJR9zj1bK7ePMqHlVK+IuabE0tWzKXp+g3UbZf4mm1wZ7dHHmdKuWRx/NFvy7M6UMCl2f1uydTr7NePDCnjaa2b38dyO6t45UuYULJlDhIfixv31L7F/nFZO9jN1Kso1IONtW/PBpxufl6ZX+J+Www7w/w7KEoybS41XXBhDV/xBr1J14Oo7+iyS2it+yMqdePjk5b3oAAF2YEFABkgSFkhEwEaEFYgQUAAAAGAAAAEkFEABRUxAAU64eppnGXhpnFCsD1LJcUrRlflGj1a1szzjpnHXhpb3ia/AZlFL1PZeDm3n23xvpa5bja+HqP+eL/Uv61WVeP4l0tvSnsZ+hm1N/khKX0aJ1PGVpW00re7ZTp04l18XOF9EdMU/qV+NxcW3Hn5LgiVZVZemc5K/aLscKzjDZEeJu3Prt0lLbdlLOd6q9rnevjNrdyNhqb3m+F3LSdMNXtmOt8M52qJX0bP5NmMaPS8XDXdW2Znsz6YveVPZ86ezNc6kZanbKMQ64jDypvTOLT9zm0axSzoCA0AQAYCMBgABKCgAAAqEBAAgtgCSAKIAoAmAAKhBUBIweIdOSkvqvJr8rzBSSd078oxLJ+U4jRUXiWzK6icvTcHXatKJMoZ7OcvhpO/F3wijy/EpJd1YtcqzGkpS9Kv5MenRnlsnXa7S0x1S5ZV4uvfklV8epJ3tb2KLFYhylpjxfkr17Na8vjvRpupJLa1932sWePppRjCPj6+7ZCwa0Lz+5Y4RObcny/siOxUQoer5ElUlYXENKUl7j4xuVq0iuzDKaVWNpRT+m5kM26VlC8qLuv9L5+h6RDD35GVcF7Ezk6NcfbxWtSlF2kmn4fIxHp+fdOwrRva0+0kjzfHYSdKpKnNbp/qvJ0535MNY6cRrFEkWZmCoQUlAAACQxRBYhBUgcRQCTWhGPEaAYAAEBDkNFCTizynBObUnwiupR1NLy0jW4aKhFJFd3pfM7dJRa2TG4atOE78jvi3auOnTtv2MW3jFjTxMpbdiZQSRUUKposnUYxWIqK6TtSpv/Mmu7/pX7ikkiwhFUadpRvXqx2T/wAqm+7XaTJuVLkrIycpOc3eT3b8sn0K+iLfdmdTPqqzCf4r+ZPwsNkVGJeqo3Z8k6jOSW8kitWl6q4jYbOoiFHEq35vucZ1m3ZFfFp5RJrTTMd1bk3xlrgvxI8e5pKkZdmRZza5L4vTLXt5RWpSg7Si0/dNHFs9QzDLaWIi1KKv2e2pP2Z5/nOVzw83GS2/ll2Z053K59ZV1gADRQAAAA6I0dEIKKIASUaxQaAbYQcxoCCiBcISsvX4kfmaenBvcoMloaql+0TVRhZGe23G4qmd6SWlp8L7D6VK/JzrqzsuDJqmZdl+p65t/Bg1qkud/wCX2uWfxXUnqtpS9MIr8sIrhL/fuVOA+LdxjNqnJWnFPaf0LqCURaokUrLeTCNT4nH5V9yDrc3bhFthKVlwZ1pmOGLkoJLZyfbg4RoOXLf6i21zk32bRbYXDcEdryd1Djgh1HDWdy4jQXuc50UvJTyX/Wh1InCpBM74gbTWxaK2KmtS0vYi5tlyr05Ra3s2n4ZZ41HOl+VM0yx1PbyPFUHTnKEuYuzOJputsIo1VUX86s/mkZk6s3uOfU6oAAJQBYiMVBBwogoSBGAjYCNiC2ECCAAAaLpuns37mijEqenqNqa99y9jGxhv63z6hL6URaFJyd/LOmKldpEvBwskVWS8NRSO89xt9huvYiodcFTLZU7RZAy3kuKi9EvkZ1thSYRXlb3NLhaW3BnMu/P9TXYNbFNr8X9Oo4W4/EYOyexcYCgnyNzmKUbeSvi1tYvGrdnCHB3xq9RztsXjOq7FISjC0R2KJFKl6U/3Ly9Mb9Y/rLCaqLaW8Xq+nc8/Z6znNJSjOPlNfY8qxENMnHw2v0Z0cV7jDkjkA6wGrLsgqEHRAUUQfSpSm1GEXKT4SV2wkxjWdsVhalN6akJQfiSscAAQUQIAAAGyySS+HH5FspmdyLEXgl42LqMjHU9t830cleZZU48FVTn6y4otNFFg6nYi1sRZrwd8RGxUY+pZMDR5ZXV1uaCu7038jA5Ljk3ya/8A/Ren9Cml8VxyuN5mvwa4MnlCs7+5pqFTgy21w0OBkQM6xF20Pw1ayZUY6tqb3InxdWYndnKb2Hy5GuO5MVqDKnecV5aLHFNKO1iHxUjftdnHH4tcXNIxt6qvx873PLMxt8Wpb/XL9z0TH4naW/Z/seb4h3lJ+7f3OjjY8nxyAUDVgC3wGRzqR1XUU+LlVBbr5o9P6boR+FG63t3K6vUaZndefZjltSi/UvS+JLhlx0BUjHFJytfS7X827HoNfLqc4uLimnymrlG+jIRn8SlKUGndJXa+5nOWde2n6+q6dY5fLEw7a47xe137XPMq1GUJOMlaS2aPYJYWppSk07d+CuzfpulXpt2tUS2kubkY5OjWXljEO+LounOUHzFtHA3Y0AABCwyivplbyaajUujFRlZprsXmXY6+xTc7aYq4nO0l7lvgsQrIz1WtexMwlbgyatA2mVeY0NjtDEq3JFxmJI6TFPSbhO68pGzwNWThb2KXKsvdSSm/O3+5tsJl6srcMrqxaZ7+OGVxafuXtOXBHp4PTud4xMdXttnNiTrdmQppsustoRlyyfXwdKMXa3BEizI/D/vcScUS8akm7EGpU2CKos6r6WrMp6mIlLuWWcO8kV8aRvmObf1Cxd3CX/a/2MJU5PQcXsmYTHwtOS9zbjZb+IwABqyScvjerBf1I9ay+klGNttkeRYWppnGXh3N5h+rqcYxXhGfJLfjTF6rb0o8EqMDErrSlZbq/wBDrHriku6/VGP6638419VK3Yh19ov5MzE+taT7r7Eet1fTfcmYqutxhs3d69V/1shErMqynVnJcN3Ip0T4579AABKAPpTcXdDAA0uBjrin5CdR05WfHK+RW5dmCpqzO2IzOM+TK5vbebnSxWYq1h+BqfGqKPPcoJYiPknZPmUKU9T/AHHjTyj0vL8OlFWRosHFWR55h+sKSSRPpddUl/8AIw1jTbG5G8kzjOdjG/8AXlHyMfXFHyin69NP25bKOIlHhkmjjpy2bME+taPlfqd8P1xQXLRM49F5c/8AWpxkrtkGckjOYrrWi27MiT6wpeV9if11W8mVnjd579kR5IppdUU277fY41epYPwazF6c2te03GyuY/O4WqfNFrVzyDKbM8Sqkk14L5zZUWzpDAQDdkUcxQKJCEACQBAUAGS5EAAgAAAAAAAKwAmBBUAAdIgwApVp8AMACKByAAmmyGMUAg1j5CgWP6ZIaABBQACR/9k=';
    }else{
        userPhoto.src = 'https://pbs.twimg.com/profile_images/1233023990349742082/Glnty3NM_400x400.jpg'
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
