const fs = require('fs')
const chalk = require('chalk')

const getNotes =() =>  'get Notes'

const addNotes = (title,body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=>note.title == title)

    if(!duplicateNote){
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

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json',notesJSON)
}

const loadNotes = () => {
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

const removeNote = (title)=> {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    if(notes.length === newNotes.length){
        console.log(chalk.red("No note with this title found"))
    }
    else{
        console.log(chalk.green("Note Removed Successfully"))
    }
    saveNotes(newNotes)
}

const listNotes = ()=> {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}
const readNotes = (title)=>{
    const notes = loadNotes()
    
        const body = notes.find((note)=>note.title === title)
    if(body){
        console.log(chalk.inverse.white('Note'))
        console.log(chalk.blue(title))
        console.log(body.body)
    }
    else
    {
        console.log(chalk.red('No note with this title found'))
        listNotes()
    }
    
}
module.exports = {
    getNotes,addNotes,removeNote,listNotes,readNotes
}

// const newNotes = notes.filter(function(note){
    // if(note.title === title)
    // {
    //     return false
    // }
    // return true
//     return note.title !== title
// })