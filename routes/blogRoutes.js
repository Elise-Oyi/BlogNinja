const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()


//GETTING ALL THE BLOGS 
router.get('/', blogController.blog_index)

//GETTING THE CREATE FORM
router.get('/create', blogController.blog_create_get)

//posting to the db
router.post('/', blogController.blog_create_post)

 //getting a post by id (route parameter) ---details page
 router.get('/:id',blogController.blog_details)
 
 //deleting a post by id
 router.delete('/:id', blogController.blog_delete)

 module.exports = router