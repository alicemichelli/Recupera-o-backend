require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require ('express');
const cors = require('cors');

//Aqui colocar as rotas das pastinhas
const Funcionarios = require("./src/routes/funcionarios");


//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    //Chamar as rotas que adicionei acima
    .use("/Funcionarios", Funcionarios)
    
   

app.listen(PORT, () => {
    console.log('Respondendo na porta ' + PORT);
});
