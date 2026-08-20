import express from "express";
import db from "./db/connection.js"
import applicationsRoutes from "./routes/applications.js"
import coursesRoutes from "./routes/courses.js"
import educationRoutes from "./routes/education.js"
import experiencesRoutes from "./routes/experiences.js"
import jobsRoutes from "./routes/jobs.js"
//const express
const app = express();

app.use(express.json());

//defining the first route to the server
app.get("/", (req, res) => {
  res.json({ message: `Its working` });
});

//jobs routes
app.use('/applications', applicationsRoutes) 

//courses routes
app.use('/courses', coursesRoutes)

//Education routes
app.use(`/education`, educationRoutes)

//experiences routes
app.use(`/experiences`, experiencesRoutes)

//jobs routes
app.use(`/jobs`, jobsRoutes)

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

