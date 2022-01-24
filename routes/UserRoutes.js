const express = require('express')
const User = require('../userModal')
const router = express.Router()
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router