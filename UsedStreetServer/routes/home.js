'use strict';

const express = require('express') ;
const router = express.Router();

router.get('/', (req, res) => {
	res.send('成功开启服务器');
});

module.exports = router;
