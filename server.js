const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((con) => {
    console.log(con.connections);
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'a tour must have a name'],
    unique: true,
  },
  price: Number,
  rating: {
    type: Number,
    require: [true, 'a tour must have a price'],
  },
});
const Tour = mongoose.model('Tour', tourSchema);
const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.7,
  price: 290,
});
testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
