const express = require("express")
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'taxableincome'
})


app.post('/details', (req, res) => {
    const basic = req.body.basic;
    const lta = req.body.lta;
    const hra = req.body.hra
    const food = req.body.food
    const medi = req.body.medi
    const inv80C = req.body.inv80C
    const rent = req.body.rent
    const city = req.body.city

    db.query('INSERT INTO taxable (basic, lta, hra, food, inv80C, medi, citytype, rent) VALUES (?,?,?,?,?,?,?,?)', [basic, lta, hra, food, inv80C, medi, city, rent],
        (err, result) => {
            if(err){
                console.log(err)
            } else{
                res.send("Values Inserted")
            }
        }
    )
});

const port = process.env.PORT || 3005 ;

app.listen(port, () => {
    console.log("Server running on port 3005")
})