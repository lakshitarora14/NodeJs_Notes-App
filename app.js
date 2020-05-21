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
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'to remove a command',
    handler: function(){
        console.log("Remove a note")
    }
})

yargs.parse()
