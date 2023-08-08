  const fs = require('fs')

//   // reading files
//   fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
//   })

//   //writing files
//   fs.writeFile('./docs/blog.txt','let see if this will overwrite my previous text',()=>{console.log("wow it worked!")})

//   //directories
//   if(!fs.existsSync('./assets')){
//       fs.mkdir('./assets',(err)=>{
//     if(err){console.log(err)}
//     console.log("folder created!")
//   })
//   }
//   else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted!')
//     })
//   }
