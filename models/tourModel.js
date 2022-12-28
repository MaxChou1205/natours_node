const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'a tour must have a name'],
    unique: true,
  },
  price: {
    type: Number,
    require: [true, 'a tour must have a price'],
  },
  rating: Number,
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
