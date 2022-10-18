const fs = require ('fs')

const add = function (paper =[] , oldPaper){
    let finalPaper = JSON.parse (oldPaper)

    finalPaper.push (paper)

    let objectPaper = JSON.stringify(finalPaper)

    fs.writeFileSync ('message.txt' , objectPaper)

}
module.exports = add 