const express = require('express')

//express app
const app = express()

// register view engine
app.set('view engine','ejs')
// app.set('views','myViews')

//listen for request
app.listen(3001)


app.get('/',(req,res)=>{
    // res.send("<p>Home page</p>");
    res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})

//redirect
 app.get('/about-me',(req,res)=>{
    res.redirect('/about')
 })

 //404 page
 app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
 })

 //creating a custom middleware
app.use((req,res, next)=>{
    console.log('new request made:')
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    next()
})

// mongoose and mongo sandbox routes
  // saving a blog into the database
  app.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: 'new blog 1',
        snippet: 'about my new blog',
        body: 'quiet frankly this is just about my new blog, i really dont know what more you want to see :|'
    })
    //saving the blog in the database
    blog.save()
     .then((result)=>{
        res.send(result)
     })
      .catch((error)=>{console.log(error)})
})
  // getting all blogs from the database
   app.get('/all-blogs', (req,res)=>{
     Blog.find()
      .then((result)=>{
        res.send(result)
      })
      .catch((error) =>{console.log(error)})
   })

   //getting a single blog by Id
   app.get('/single-blog', (req,res)=>{
    Blog.findById('64a595842b8f63ad0ddd5b0d')
    .then((result)=>{
        res.send(result)
      })
      .catch((error) =>{console.log(error)})
   })
 

   //routes
   app.get('/',(req,res)=>{
    // rendering a view
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title :'Home',blogs})
})

{/* <script>
    const trashcan = document.querySelector('a.delete'); 
    trashcan.addEventListener('click', (e) => {
      const endpoint = `/blogs/${trashcan.dataset.doc}`;
      fetch(endpoint, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => window.location.href = data.redirect)
      .catch(err => console.log(err));
    });
    
  </script> */}
