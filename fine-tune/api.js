import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: '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',
})
export const openai = new OpenAIApi(configuration)