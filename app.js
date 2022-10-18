const write = require ('./write')
const read = require ('./read')
const add = require ('./add')
const present = require ('./present')
const data = process.argv

var paper = {}
 
if (data[2] == 'add'){
    // build object
    paper = {
        id: data[3],
        name: data[4],
        address: data[5]

    }
    var oldPaper = read ()
    add (paper , oldPaper)
    present (read())

}

if  (data[2] == 'read'){

    present (read())
}
 







//write(data)
//console.log (read())

