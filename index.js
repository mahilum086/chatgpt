//npm init
//npm install express openai body-parser cors
//node .\index.js
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
    organization: 'org-o2hlYmBdByt5Qjj8Qf0Lyviq',
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
// app.get("/", async(req, res) => {
//     const completion = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {role: "user", content: "Hello World"},
//         ]
//     })
//     res.json({
//         completion: completion.data.choices[0].message
//     });
// });

app.post("/", async(req, res) => {
    const {messages} = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",      
        messages: [
            //{role: "user", content: `${message}`},
            {"role": "system", "content": "You are a  helpful customer support agent."},
            ...messages
        ]
    })

    res.json({
        completion: completion.data.choices[0].message
    });
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});