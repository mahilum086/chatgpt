import { openai } from './api.js'
import { fileId } from './fileId.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'davinci:ft-personal-2023-05-16-08-18-42'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()