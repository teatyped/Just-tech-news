const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/user', userRoutes);

router.use('/api', apiRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;