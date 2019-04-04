const router = require('express').Router();
const User = require('../db').import('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 }); //24 hours

                res.status(200).json({
                    user: user,
                    sessionToken: token,
                    message: 'User created'
                })
            },

            createError = (err) => {
                res.status(500).json({ error: err })
            }
        )
})


router.post('/signin', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                            expiresIn: 60 * 60 * 24
                        });
                        res.status(200).json({
                            user: user,
                            sessionToken: token,
                            message: 'User signed in'
                        });
                    } else {
                        Response.status(502).json({ error: 'Username or password does not match' })
                    }
                })
            } else {
                res.status(502).json({ error: 'Username or password does not match' })
            }
        },
            err => res.status(501).json({ error: 'Username or password does not match' })
        )
})

module.exports = router; 