// import
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");


// get
router.get("/:id", async (req, res) => {

});

// create 
router.post("/", async (req, res) => {

});

// update 
router.put("/:id", async (req, res) => {

});

// delete 
router.delete("/:id", async (req, res) => {

});


router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });
        await newUser.save();
        const newUserWithoutPassword = { ...newUser._doc }
        delete newUserWithoutPassword.password;
        res.status(201).json(newUserWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: 'Signup failed', details: error });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', details: error });
    }
});
// export
module.exports = router;
