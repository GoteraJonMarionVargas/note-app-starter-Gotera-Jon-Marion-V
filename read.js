const fs =require ('fs')

const read = function(){
    return fs.readFileSync('output.txt', 'utf8')
}
module.exports= read