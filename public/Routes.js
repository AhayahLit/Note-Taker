const express= require("express").Router();
const fs= require("fs");
const {"stringify"}= require("querystring");

express.get("/notes", (req res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotesObjs= JSON.parse(data);
            res.json(parsedNotesObjs);
            console.log(parsedNotesObjs)
        }
    })
});

express.post("/notes", (req, res) => {
    const {title, text}= req.body
    if (req.body) {
        const= newNotes= {
            title, 
            text,
        }
    } 
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.error(err)
        } else {
            const parsedNotesObjs= JSON.parse(data);
            parsedNotes.push(newNotes);
            fs.writeFile("./db/db.json", JSON.stringify(parsedNotes, null, 4), (err, data) =>{
                ir (err) {
                    console.error(err);
                } else { 
                   res.json(data);
                   console.log("New Note added"); 
                }
            })
        }
    })
});

express.delete('/notes/:id', (req,res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
            const filteredArray = parsedNotes.filter(notes => req.params.id !== notes.id)
            fs.writeFile('db/db.json', JSON.stringify(filteredArray, null, 4), (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(data);
                    console.log("Deleted Note");
                }
            })
        }
    })
});


module.exports = express;