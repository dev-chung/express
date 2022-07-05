const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST")
//     res.send("HELLO")
// })
app.get('/', (req, res) => {
    res.send("HOME")
})

app.post('/help', (req, res) => {
    res.send("Post /help")
})

app.get('/help', (req, res) => {
    res.send("HELP!")
})

app.get('/about', (req, res) => {
    res.send("About")
})

app.get('*', (req, res) => {
    res.send("No Where")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})