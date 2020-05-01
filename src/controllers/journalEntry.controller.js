const { journalEntryModel } = require('../models/journalEntry.model');

exports.getAllJournalEntriesByUserId = function (req, res) {
  journalEntryModel.find({ user_id: req.user._id }, function (err, journalEntries) {
    if (err) {
      res.send(err);
    } else if (journalEntries) {
      res.json(journalEntries);
    } else {
      res.status(400).send("Could not get Journal Entries ")
    }
  });
};

exports.getJournalEntry = function (req, res) {
  journalEntryModel.findOne({ _id: req.params.journalEntryId, user_id: req.user._id },
    function (err, journalEntry) {
      if (err) {
        res.send(err);
      }
      res.json(journalEntry);
      console.log(JSON.stringify(journalEntry))
    }
  );
};

exports.createJournalEntry = function (req, res) {
  const newJournalEntry = new journalEntryModel({ ...req.body, user_id: req.user._id });
  newJournalEntry.save(function (err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};


exports.updateJournalEntry = function (req, res) {
  journalEntryModel.findOneAndUpdate(
    { _id: req.params.journalEntryId, user_id: req.user._id },
    req.body,
    { new: true },
    function (err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

exports.deleteJournalEntry = function (req, res) {
  journalEntryModel.deleteOne({ _id: req.params.journalEntryId, user_id: req.user._id }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ msg: 'Entry has been deleted.' });
    }
  });
};