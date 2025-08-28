const express = require('express');
const db = require('./config/db');
const User = require('./models/users'); // renamed from response to User
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');

app.use(express.json());

app.use(cors({
  origin: "https://mohammed-hussain.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.post("/addUser", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log(req.body);

    const createdUser = await User.create({
      name,
      email,
      message,
    });

    if (createdUser) {
      return res.json({ success: true, message:"Message sent. We will get back to you shortly." });
    } else {
      return res.status(500).json({ success: false, message: "Failed to add user" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
