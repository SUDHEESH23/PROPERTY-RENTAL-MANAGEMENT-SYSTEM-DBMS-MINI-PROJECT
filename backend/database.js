const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Sudheesh',
  password: 'password123',
  database: 'property_rental_management'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
