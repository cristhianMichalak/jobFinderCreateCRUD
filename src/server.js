import app from "./app.js"

//define the port

const port = 8080

//listening the server

app.listen(port, () => {
    console.log(`App running on ${port}`)
})