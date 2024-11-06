import express from "express";
import "dotenv/config"; 
import {db} from "./configs/db.js"
import userRoutes from "./routes/user.route.js"

const app = express();

// middleware
app.use(express.json());

const PORT = process.env.PORT;

// api
app.use("/api/v1/users", userRoutes);


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