var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Sales: String,
  Expenses: String
}, 
{
  collection: 'ems-calls-collection'
});

mongoose.model('GraphData', GraphDataSchema);
