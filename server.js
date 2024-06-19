import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { generateResume } from './services/resumeGenerator.js';
import { extractJobDescription } from './services/extractJD.js';


dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Function to handle errors
function errorHandler(err, req, res, next) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
}

app.post('/generate-resume', async (req, res, next) => {
    try {
        const { pageContent, existingResume = "Generate a new resume" } = req.body;
        const jobDescription = await extractJobDescription(pageContent);
        const customizedResume = await generateResume(jobDescription, existingResume);
        res.json({ resume: customizedResume });
    } catch (error) {
        next(error);
    }
});

// Use the error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
