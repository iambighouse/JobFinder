const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

// Body Parser
app.use(bodyParser.urlencoded({extend: false}));

// DB Connection
db.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso");
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
});;

//Routes 
app.get('/', (req, res) => {
    res.send("Está funcionando");
});

// Routes do Jobs
app.use('/jobs', require('./routes/jobs'));