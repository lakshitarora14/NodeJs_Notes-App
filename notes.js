const fs = require('fs')

const getNotes = function(){
    return 'get Notes'
}

const addNotes = function(title,body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        console.log('Note added')
        saveNotes(notes)
    }
    else{
        console.log("Title already taken")
    }
    

}

const saveNotes = function(notes){
    const notesJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json',notesJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}



module.exports = {
    getNotes,addNotes

}