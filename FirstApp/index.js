// setting up/starting a server video 346
// restarting server with contr + C in bash

const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!!")
//     console.log(req)
//     // res.send("Hello we got your request and this is the respont")
//     // res.send({ color: 'red' })
//     res.send('<h1> This is my webpage </h1>')
// })

app.get('/', (req, res) => {
    res.send('This is the homepage!!!')
})

// defining a generic pattern for routes
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(request.params)
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/cats', (req, res) => {
    console.log("Cats REQUEST!")
    res.send('MEOW!')
})
app.get('/dogs', (req, res) => {
    res.send("Woof")
})
// console.dir(app)

// post request

app.post('/birds', (req, res) => {
    res.send('Post Request to /birds. This is different from a get request')
})

// this must come at the end because routes must be in order
// app.get(/(.*)/, (req, res) => {
//     res.send('I dont know that path')

// })



app.listen(3000, () => {
    console.log("listening on Port 3000!")
})
