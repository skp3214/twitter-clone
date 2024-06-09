
module.exports = app => {
    const generateToken = require('../Utils/generateToken');
    const authController = require('./auth.controller');
    const router = require('express').Router();
    const bcrypt = require('bcryptjs');
    router.post('/signup', async (req, res) => {
        try {
            let newUser = {
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newUser.password, salt);
            newUser.password = hashedPassword;
            const results = await authController.saveUser(newUser);
            const token = generateToken(results._id)
            res.cookie("token", token);
            return res.status(200).send(results);
        } catch (error) {
            console.log("Unexpected error in saving user..!", error);
            return res.status(400).json({message:"error in creating user" });
        }
    });

    router.post('/login', async (req, res) => {
        try {
            const username = req.body.username;
            const password = req.body.password;

            const results = await authController.loginUser(username, password);

            const token = generateToken(results._id);
            res.cookie("token", token);
            return res.status(200).json(results);
        } catch (err) {
            console.log("Error in login", err);
            res.status(500).json({ error: "Error during login" });
        }
    });

    router.post('/logout', async (req, res) => {
        try {
            const results = await authController.logout(res);
            res.status(200).json(results);
        }
        catch (err) {
            res.status(500).json({ error: "Internal Server Error" })
        }
    })

    router.get('/getuser', async (req, res) => {
        try {
            const results = await authController.getUser(req);
            res.status(200).json(results);
        }
        catch (err) {
            res.status(500).json({ error: "erro during user fetch" })
        }
    })

    app.use("/api/auth", router)
}

