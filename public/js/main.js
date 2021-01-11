const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
//const roomName = document.getElementById('room-name')
const userList = document.getElementById('users');
//const cf = require();

//get username
//const username = a;
//const cf = con();
//const sql = `SELECT username FROM login`;

const socket = io();

//join chatroom
//socket.emit('joinRoom', {username});

const {username} = Qs.parse(location.search,{
    ignoreQueryPrefix: true
});

//message from server
socket.on('message', message=>{
    console.log(message);
    outputMessage(message);

    //scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

//Get online users
socket.on('onlineUsers',users =>{
    outputUsers(users);
});

//message submit
chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //isi pesan
    const msg = e.target.elements.msg.value;

    //emit message to server
    socket.emit('chatMessage', msg);

    //clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

//output message to DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class = 'meta'>${message.username}<span> ${message.time}</span></meta>
    <p class="text">${message.text}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
};

//add users to DOM
function outputUsers(users){
    console.log(users);
    userList.innerHTML = "";
    Array.from(users).forEach(user=>{
        const li = document.createElement('li')
        li.innerText = user;
        userList.appendChild(li);
    });
}