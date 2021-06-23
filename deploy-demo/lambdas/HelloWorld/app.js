const axios = require('axios')

const between = (min, max) => {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const handler = async (event,context) => {
  try {
    console.log('Getting dog facts')
    const { data } = await axios.get('https://dog-api.kinduff.com/api/facts')
    
    const i = between(0, data.length)
    return {
      statusCode: 200,
      body: data[i].text
    }
  } catch(err) {
    return {
      statusCode: 500,
      body: err.message
    }
  }
}

module.exports = {
  handler,
  between
}