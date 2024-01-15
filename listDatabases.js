const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

// Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const listDatabases = async () => {
    const res = await notion.search()
    console.log(res);
}

listDatabases()

// node listDatabases.js