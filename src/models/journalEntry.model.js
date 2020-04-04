//imports 
const mongoose = require('mongoose');

//set up
const Schema = mongoose.Schema;

// Create our user Schema (this should match the front end object properies)
const journalEntrySchema = new Schema({
  entryName: {
      type: String,
      default: 'Unamed Entry'
  },
  entryBody: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('journalEntry', journalEntrySchema);