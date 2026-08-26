import express from "express";
import db from "./db/connection.js"
import applicationsRoutes from "./routes/applications.js"
import coursesRoutes from "./routes/courses.js"
import educationRoutes from "./routes/education.js"
import experiencesRoutes from "./routes/experiences.js"
import jobsRoutes from "./routes/jobs.js"
import resumesRouter from "./routes/resumes.js"
import skillsRouter from "./routes/skills.js"
import userCandidateRouter from "./routes/users_candidates.js"
import userCompanyRouter from "./routes/users_companies.js"

//const express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//acessing static pages
app.use(express.static('public'));

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

//resumes router
app.use(`/resumes`, resumesRouter)

//skills router
app.use(`/skills`, skillsRouter)

//userCandidates router
app.use(`/users_candidates`, userCandidateRouter)

//userCompanies.js router
app.use(`/users_companies`, userCompanyRouter)

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

