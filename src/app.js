import express from "express";
import db from "./db/connection.js"
import applicationsRoutes from "./routes/applications.js"
//const express
const app = express();

app.use(express.json());

//defining the first route to the server
app.get("/", (req, res) => {
  res.json({ message: `Its working` });
});

//jobs routes
app.use('/applications', applicationsRoutes) 

//db connection
async function connectDb() {
    try {
        await db.authenticate()
        console.log(`Successfully connected`) 
    } catch (err) {
        console.log(`Unable to connect:`, err)
        process.exit(1)
    }
}



connectDb()
export default app;

