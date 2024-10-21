import express from "express";
import "dotenv/config"; 
import {db} from "./configs/db.js"

const app = express();
const PORT = process.env.PORT;

app.use("/", (req, res) => {
    res.status(200).json({
        message: "Hello World"
    });
});

app.use("*", (req, res)=>{
    res.status(404).json({
        message: "Page not found"
    })
})
//  start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})