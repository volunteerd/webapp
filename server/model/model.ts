const { Pool } = require('pg');
require('dotenv').config();

const URI = process.env.PG_URI;

console.log(URI);

const pool = new Pool ({
    connectionString: URI
})

module.exports = {
    query: (text: string, params: [] | string) =>{
        console.log('executed query', text);
        return pool.query(text, params);
    }
};