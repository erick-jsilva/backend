const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require("socket.io")(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(bok);
    })
})

//Conexão com mongodb
mongoose.connect('mongodb+srv://erick_mongodb:erick_mongodb@cluster0-pt31r.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});
//Configura a rota de um servidor
/*app.get("/teste", (req, res) => {
    return res.send("Hello World");
})*/

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

server.listen(process.env.PORT || 80);
