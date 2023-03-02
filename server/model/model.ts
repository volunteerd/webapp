const { Pool } = require('pg');

const myURI = 'postgres://vzvhuktt:yalUBRXjlbLQwsAemZE-h5vUjgdpJ5hU@isilo.db.elephantsql.com/vzvhuktt';

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