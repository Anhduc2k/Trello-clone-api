require('dotenv').config()

export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  HOST: process.env.HOSTNAME,
  PORT: process.env.PORT
}
