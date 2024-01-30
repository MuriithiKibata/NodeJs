const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    res.status(200).json({ success: true, data: name });
});

module.exports = router;