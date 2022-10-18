const fs = require ('fs')

const del = function (num, oldPaper){
    const paper = JSON.parse(oldPaper)
    const newPaper = paper.filter(function(n,idx){
        return n.address !== num 

    }) 
    fs.writeFileSync('./message.txt', JSON.stringify(newPaper))
}
module.exports = del