const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const mysql = require('mysql');
const formatMessage = require('./utils/messages');
const {getCurrentUser,userJoin,userLeave} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

var nama = [];

app.use(express.static(path.join(__dirname,'public')));

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password:'',
    database:'kembaliin'
});

const sql = `SELECT username FROM login`;

con.connect((err)=>{
    if(err) throw err;{
        con.query(sql,(err,fields,results,rows)=>{
            if(err) throw err;

            var string = JSON.stringify(fields);
            var data = JSON.parse(string);
            //console.log(data[7].username);
            //nama = data[7].username
            
            for (var i in data){
                //console.log(data[i].username)
                nama[i]=data[i].username;
            }
            //console.log(nama)
        })
    }
    //console.log("Connected to mysql")
})

io.on('connection', socket =>{
    //console.log();

    const user = userJoin(socket.id,nama);

    //welcome user
    socket.emit('message', formatMessage('Admin','Welcome to mobile legend'));

    //broadcast
    socket.broadcast.emit('message', formatMessage('Admin',`si ${user.username} masuk`));

    //Send online users info
    io.emit('onlineUsers',user.username);

    //listen for chatMessage
    socket.on('chatMessage', msg =>{
        const user = getCurrentUser(socket.id);
        io.emit('message', formatMessage(user.username,msg));
    });

    //runs when client dc
    socket.on('disconnect', ()=>{
        const user = userLeave(socket.id);

        //console.log(user.username)
        if(user){
            io.emit('message', formatMessage('Admin',`${user.username} has left the chat`));

            //Send online users info
            io.emit('onlineUsers', user.username);
        }
    });
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`))