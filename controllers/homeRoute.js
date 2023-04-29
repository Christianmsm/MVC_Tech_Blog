const router = require('express').Router();


router.get('/', async (req, res) => {
   try {
    // Query Database for post
    res.render('homepage', {
        // Hand off posts
        logged_in: req.session.logged_in 
    })
   } catch (err) {
    res.status(500).json(err);
   }
})




module.exports = router;