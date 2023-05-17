import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: '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',
})
export const openai = new OpenAIApi(configuration)