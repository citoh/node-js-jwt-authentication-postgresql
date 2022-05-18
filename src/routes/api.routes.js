var router = require('express').Router()

router.get('/', (req, res, next) => {
    res.status(200)
    res.json({
        'title': 'Citoh API',
        'message' : 'Welcome to Citoh API'
    })
    next()
});

module.exports = router;