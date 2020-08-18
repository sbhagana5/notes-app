const notes=require("./notes.js")
const yargs =require("yargs")
const chalk= require("chalk")
const { describe } = require("yargs")
console.log(chalk.red.bold("success!!!!"))

yargs.version('1.1.0')
//to add command
yargs.command({
    command:"add",
    describe:"to add the note",
    builder:{
        title:{
            title:"frst argument",
            describe:"for the frst argument",
            demandOption:true,
            type:"string"
        },
        body:{
            title:"second argument",
            describe:"for the second argument",
            demandOption:true,
            type:"string"
        }
    
    },
    handler:(argv)=> notes.addNote(argv.title,argv.body)
})
//command to remove
yargs.command({
    command:"remove",
    describe:"to remove",
    builder:{
        title:{
            title:"frst argument",
            describe:"passing frst argument",
            demandOption:true,
            type:"String"
        }
    }   ,
        handler(argv){notes.removeNote(argv.title)}
}) 
// to list command
yargs.command({
    command:"list",
    describe:"list of notes",
    builder:{
        title:{
            describe:"this is for listing",
        demandOption:true,
        type:'string '
        },
        body:{
            describe:"aranging",
            demandOption:true,
           type:"string"
        }

            },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        console.log(argv.title ,argv.body)
         }
})
// command to list notes

yargs.command({
    command:"list",
    describe:"to check the list",
    handler:()=>{
        console.log(chalk.blue.bold("your notes ==>"))
        notes.listNote();
    }
})
//command  to read  note
yargs.command(
{
    command:"read",
    describe:"to search the note",
    builder:{
      title:    {  describe:"frst argument",
                demandOption:true,
                type:"String"
                }
             },
    handler:(argv)=>
    {
        notes.readNote(argv.title);
    }
})
yargs.parse();
