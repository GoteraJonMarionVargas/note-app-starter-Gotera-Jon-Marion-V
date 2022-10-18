const fs  = require ('fs')

const update = function (note , oldNote){
    const oNote = JSON.parse ( oldNote)
    const newNote =oNote.map(function (n,idx){
        if (n.id == note.id ){
          n.name = note.name
          n.age = note.age
          n.address = note.address
        }
        return n 
    })
fs.writeFileSync('./output.txt', JSON.stringify(newNote))
}
module.exports = update