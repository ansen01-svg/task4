let { getAllJokes, addJoke, editJoke, deleteJoke } = require('../controllers');
let router = require('express').Router();


router.route('/allJokes').get(getAllJokes);
router.route('/addJoke').post(addJoke);
router.route('/editJoke/:id').patch(editJoke);
router.route('/deleteJoke/:id').delete(deleteJoke);


module.exports = router;