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
  user_id: {
    type: Schema.Types.ObjectId,
    required:true

  }
  
});

const journalEntryModel = mongoose.model('journalEntry', journalEntrySchema);
module.exports = {journalEntryModel, journalEntrySchema};