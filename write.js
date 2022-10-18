const fs = require ('fs')

const write = function(data){
    fs.writeFileSync('output.txt', data)
}
module.exports = write