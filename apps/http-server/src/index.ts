import express from "express";

const app = express();

app.get("/" , (req , res) => {
    res.send("Hello world from http-server")
})

app.listen(3001 , () => {
    console.log(`HTTP SERVER running on http://localhost:3001`)
})