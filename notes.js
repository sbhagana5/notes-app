const fs=require("fs")
const json = require("./test.json")
const chalk=require("chalk");

 const getnotes=()=>
{
    return "your notes..."
}
const addNote=(title,body)=>
{
 const notes =loadNotes();
 const duplicateNotes=notes.filter((note)=> note.title===title
 )
if(duplicateNotes.length===0)
{
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.bold("new note added==>",title))
}
 else{
     console.log(chalk.red.bold("duplicate found!!"));
 }
}
const saveNotes=(notes)=>{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

const loadNotes=()=>
{
   try
    {
        const databuffer=fs.readFileSync("notes.json")
        
        const data = databuffer.toString();
        
        return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }
}
const removeNote=(title)=>
{
   const  loadFile=loadNotes();
    const duplicate=loadFile.filter((value)=> value.title!==title
    )

    saveNotes(duplicate);
    if(duplicate.length===loadFile.length)
    {
        console.log(chalk.red.bold("no note deleted"));
    }
    else{
        console.log(chalk.green.bold("note deleted==>",title))
    }
    

}
const listNote=()=>{
    const list=loadNotes();
    list.forEach((note) => {
        console.log(note.title)
    });
}
const readNote=(title)=>
{
    const read= loadNotes();
    const duplicate=read.find((note) =>note.title===title)
if(duplicate)
{
    console.log(chalk.inverse("note==>",duplicate.title))
    console.log("body==>",duplicate.body)
}else
{
console.log(chalk.red.bold("error in finding note"));
}
    
}
module.exports = {
    getnote :getnotes,
    addNote : addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}

