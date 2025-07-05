const express = require("express");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const validateCredentials = require("./middleware/validateCredentials")

const router = express.Router();
const prisma = new PrismaClient();

/*
//keeping the registeration code for future use
router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, password: hashed, role }
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});
*/

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post("/login", validateCredentials, async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  
  res.send("Login Successfull!");
});

module.exports = router;
