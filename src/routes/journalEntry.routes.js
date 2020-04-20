const journalEntryController = require('../controllers/journalEntry.controller');
const express = require('express');

const journalEntryRoutes = express.Router();
// Routes if there is nothing added to the Path

journalEntryRoutes
  .get('/', journalEntryController.getAllJournalEntriesByUserId) 
  .post('/', journalEntryController.createJournalEntry); 

journalEntryRoutes
  .get('/:journalEntryId', journalEntryController.getJournalEntry)
  .post('/:journalEntryId', journalEntryController.updateJournalEntry)
  .delete('/:journalEntryId', journalEntryController.deleteJournalEntry);

module.exports = journalEntryRoutes;