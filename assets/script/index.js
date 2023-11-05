const button = document.querySelector('.button');
let username;

function sendUsername() {
    const radio = document.querySelector('input[name="radio"]:checked').value;
    if ((radio === "Yes") && (username !== "")) {
        username = document.getElementById('username').value;
        let user = username.substr(0, 1).toUpperCase() + username.slice(1).toLowerCase();
        document.querySelector(".resultusername").textContent = user;
    }
    else if (radio === "No") {
        document.querySelector('.sendcomment__name').style.display = "none";
        document.querySelector('.resultusername').textContent = "Аноним";
    }
}

let randomImage = Math.floor(Math.random() * 6);
const images = [];
images[0] = "assets/images/kitty1.jpg";
images[1] = "assets/images/kitty2.jpg";
images[2] = "assets/images/kitty3.jpg";
images[3] = "assets/images/kitty4.jpg";
images[4] = "assets/images/kitty5.jpg";
images[5] = "assets/images/kitty6.jpg";
images[6] = "assets/images/kitty7.jpg";

function sendUserAvatar() {
    let userAvatar = document.querySelector('.user-avatar-link').value;
    if (userAvatar) {
        document.querySelector('.user-avatar').src = userAvatar.value;
    }
    else {
        document.querySelector('.user-avatar').src = images[randomImage];
    }
}

function checkSpam() {
    const userMessage = document.querySelector('#usercomment').value;
    const noSpamMessage = userMessage.replace(/(xxx|viagra)/gi, "***");
    document.querySelector('.chat__message').innerText = noSpamMessage;
}

function addDate() {
    let dayNumber = new Date().getDay();
    let day =
        (dayNumber === 0) ? 'ВС' :
            (dayNumber === 1) ? 'ПН' :
                (dayNumber === 2) ? 'ВТ' :
                    (dayNumber === 3) ? 'СР' :
                        (dayNumber === 4) ? 'ЧТ' :
                            (dayNumber === 5) ? 'ПТ' :
                                (dayNumber === 6) ? 'СБ' : 'Такого дня недели не существует';
    let currentDate = new Date();
    currentDate = `${day}, ${currentDate.getDate()}.0${currentDate.getMonth() + 1}.${currentDate.getFullYear()} в ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    document.querySelector('.date').innerText = currentDate;
}

button.onclick = function sendAllInfo() {
    sendUsername();
    sendUserAvatar();
    checkSpam();
    addDate();
}