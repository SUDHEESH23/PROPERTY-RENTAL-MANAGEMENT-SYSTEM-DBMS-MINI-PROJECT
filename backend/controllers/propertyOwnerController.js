// controllers/propertyOwnerController.js
const db = require('../database');

// Controller methods to handle CRUD operations for property owners
exports.getPropertyOwners = (req, res) => {
  let sql = 'SELECT * FROM PropertyOwner'; // Change 'PropertyOwner' to your table name
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching property owners:', err);
      res.status(500).send('Error fetching property owners');
      return;
    }
    res.json(result);
  });
};

exports.getPropertyOwnerById = (req, res) => {
  const ownerId = req.params.id;
  const sql = 'SELECT * FROM PropertyOwner WHERE OwnerID = ?';
  db.query(sql, ownerId, (err, result) => {
    if (err) {
      console.error('Error fetching property owner by ID:', err);
      res.status(500).send('Error fetching property owner by ID');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Property owner not found');
      return;
    }
    res.json(result[0]);
  });
};

exports.createPropertyOwner = (req, res) => {
  const { name, contactInformation, propertyOwnershipDetails } = req.body;

  // Check if required fields are missing
  if (!name || !contactInformation || !propertyOwnershipDetails) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query = 'INSERT INTO PropertyOwner (Name, ContactInformation, PropertyOwnershipDetails) VALUES (?, ?, ?)';
  db.query(query, [name, contactInformation, propertyOwnershipDetails], (err, results) => {
    if (err) {
      console.error('Error creating property owner:', err);
      return res.status(500).json({ error: "Error creating property owner" });
    }
    res.send('Property owner created successfully');
  });
};

exports.updatePropertyOwner = async (req, res) => {
  const ownerId = req.params.id;
  const { name, contactInformation, propertyOwnershipDetails } = req.body;
  try {
    await db.query('UPDATE PropertyOwner SET Name = ?, ContactInformation = ?, PropertyOwnershipDetails = ? WHERE OwnerID = ?', 
    [name, contactInformation, propertyOwnershipDetails, ownerId]);
    res.send('Property owner updated successfully');
  } catch (error) {
    console.error('Error updating property owner:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deletePropertyOwner = async (req, res) => {
  const ownerId = req.params.id;
  try {
    await db.query('DELETE FROM PropertyOwner WHERE OwnerID = ?', [ownerId]);
    res.send('Property owner deleted successfully');
  } catch (error) {
    console.error('Error deleting property owner:', error);
    res.status(500).send('Internal Server Error');
  }
};
