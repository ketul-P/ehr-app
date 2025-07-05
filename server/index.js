require("dotenv").config();

const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("EHR is running!")
})

app.use("/auth", authRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));