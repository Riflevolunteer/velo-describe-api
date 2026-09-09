require('dotenv').config()

const config = {
    db: {
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    marketplace: {
        url: process.env.MARKETPLACE_URL,
        clientId: process.env.MARKETPLACE_CLIENT_ID,
        clientSecret: process.env.MARKETPLACE_CLIENT_SECRET,
        devid: process.env.MARKETPLACE_DEVID
    }
}

module.exports = config
