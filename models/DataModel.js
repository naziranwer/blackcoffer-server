// models/DataModel.js
const mongoose = require('mongoose');

// Define schema for the data
const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

// Create a model from the schema
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
