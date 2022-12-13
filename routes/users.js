const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send ([{name: 'Pawan'}, {name: 'Ed'}, {name: 'Steven'}])
})

module.exports = router