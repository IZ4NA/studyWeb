//requires
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//imports
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//port
const app = express();
const port = 3001

//db
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

//app.use
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
 res.send("")
})

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})