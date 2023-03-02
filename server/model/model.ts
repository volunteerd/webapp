const { Pool } = require('pg');

const myURI = '';

const URI = process.env.PG_URI || myURI;

const pool = new Pool ({
    connectionString: myURI
})

module.exports = {
    query: (text: string, params: [] | string) =>{
        console.log('executed query', text);
        return pool.query(text, params);
    }
};