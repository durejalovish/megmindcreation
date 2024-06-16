const Promise = require('promise');
const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL;

const dbConfig = {
    user: "PostgreSQL 16",
    host: "localhost",
    database: "postgres",
    password: "admin",
    port:5432,
  };
  const client = new Client(dbConfig);

async function connect() {
    try {
        console.log("here I am in database");
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
        throw error;
    }
}

async function query(sql, params) {
    try {
        const result = await client.query(sql, params);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}

module.exports  = {connect,query} ;