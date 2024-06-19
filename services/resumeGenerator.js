import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResume(jobDescription, existingResume) {

    // TODO: Call the Python AI Engine to generate a full blown resume out of this
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: jobDescription.jobDescription }],
        model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion)
    return chatCompletion
}
