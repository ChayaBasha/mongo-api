const journalEntry = require('../models/journalEntry.model');

exports.getAllJournalEntries = function(req, res) {
  journalEntry.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getJournalEntry = function(req, res) {
  journalEntry.findById(req.params.journalEntryId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createJournalEntry = function(req, res) {
  const newJournalEntry = new journalEntry({...req.body}); //if mongo validates properly this should work to get what was entered by the user when registering
  
  newJournalEntry.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateJournalEntry = function(req, res) {
  journalEntry.findOneAndUpdate(
    { _id: req.params.journalEnryId },
    req.body,
    { new: true },
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

exports.deleteJournalEntry = function(req, res) {
  console.log('working')
  journalEntry.deleteOne({ _id: req.params.journalEnryId }, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};