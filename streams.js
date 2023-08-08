const fs = require('fs')

// const readStream = fs.createReadStream('./docs/blog2.txt',{encoding:'utf8'})

// readStream.on('data', (chunk)=>{
//     console.log("**************NEW CHUNK**************")
//     console.log(chunk)
// })
// console.log("---------this is before the stream----------")

//write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt')

