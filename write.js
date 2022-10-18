const fs = require ('fs')

const write = function(data){
    fs.writeFileSync('message.txt', data)
}
module.exports = write