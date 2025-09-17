const { execSync } = require('child_process')
const express = require('express')
const mysql = require('mysql2')

const app = express()
app.use(express.json)
const PORT = process.env.PORT || 3000

const db = mysql.createConnection({
    host: ''
})


db.connect ( err => {
    if(err){
        console.error("Erro ao conectar no MySql:", err)
        return;
    }
    console.log("conectado ao banco de dados")
})