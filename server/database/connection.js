const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://polop286:3jeOClfeQRGYvPKD@argentbank.b5rzn.mongodb.net/'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
