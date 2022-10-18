const fs =require ('fs')

const read = function(){
    return fs.readFileSync('message.txt', 'utf8')
}
module.exports= read