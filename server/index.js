import express from "express";
const app = express();
const PORT = 5000

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