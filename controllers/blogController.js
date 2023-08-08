const Blog = require('../models/blog')


// a controller function to get a blogs
const blog_index = (req,res) => {
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
       res.render('index',{title: 'All Blogs', blogs:result })
    })
     .catch((error)=>{console.log(error)})
}

// a controller function to get blog details
const blog_details = (req,res)=>{
    const id = req.params.id
    // console.log(id)
    Blog.findById(id)
     .then((result)=>{
        res.render('details', {blog:result, title:'Blog Details'})
     })
      .catch((error)=>{
        res.status(404).render('404',{title:'Blog not found!'})
      })
}


// a controller function to delete a blogs
const blog_delete = (req,res)=>{
    const id = req.params.id

    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    })
    .catch((error)=>{console.log(error)})
}

// a controller function to create get
const blog_create_get = (req,res)=>{
    res.render('create',{title :'Create a new blog'})
}

// a controller function to create blog post
const blog_create_post = (req,res) => {
       // console.log(req.body)
       const blog = new Blog(req.body)

       blog.save()
       .then((result)=>{
           res.redirect('/blogs')
       })
       .catch((error)=>{console.log(error)})
}


module.exports = {
    blog_index,
    blog_details,
    blog_delete,
    blog_create_get,
    blog_create_post
}