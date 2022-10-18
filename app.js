const write = require ('./write')
const read = require ('./read')
const add = require ('./add')
const present = require ('./present')
const del = require ('./del')
const update = require ('./update')
const data = process.argv

var note = {}
 
if (data[2] == 'add'){
    // build object
    note = {
        id: data[3],
        name: data[4],
        age: data[5],
        address: data [6]
        


    }
    var oldNote = read()
    add (note , oldNote)
    present (read())

}

if  (data[2] == 'read'){

    present (read())
}

if (data [2] ==='delete'){
    let address = data [3]
    let oldNote= read()

    del (address, oldNote)

    console.log (read())

}
if (data [2]=== 'update'){
    note = {
        id:data [3],
        name:data [4],
        age:data [5],
        address:data [6]
    }
    let oldNote = read()
    update (note, oldNote)
    
    present (read())
}








//write(data)
//console.log (read())

