const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'To add a new note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: String
        },
        body:{
            describe: "body of the note",
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'to remove a command',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'to list all the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'to read a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
