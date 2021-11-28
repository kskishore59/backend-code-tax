const express = require("express")
const app = express()
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json())

const db = mysql.createConnection({
    user: 'b9e1be04dd0dc8',
    host: 'us-cdbr-east-04.cleardb.com',
    password: 'c045a89f',
    database: 'heroku_a38e0f32cb7ac05'
})


app.post('/', (req, res) => {
    const basic = req.body.basic;
    const lta = req.body.lta;
    const hra = req.body.hra
    const food = req.body.food
    const medi = req.body.medi
    const inv80C = req.body.inv80C
    const rent = req.body.rent
    const city = req.body.city

    db.query('INSERT INTO tax-calculator (basic, lta, hra, food, inv80C, medi, citytype, rent) VALUES (?,?,?,?,?,?,?,?)', [basic, lta, hra, food, inv80C, medi, city, rent],
        (err, result) => {
            if(err){
                console.log(err)
            } else{
                res.send("Values Inserted")
            }
        }
    )
});

app.get("/read/", (req,res) => {
    db.query('SELECT * FROM tax-calculator', (err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
            console.log(result)
        }
    })
})



app.listen(process.env.PORT || 3006, () => {
    console.log("Server running on port 3006")
})