const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'ok',
    data: tours,
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((item) => item.id === id);
  if (!tour)
    return res.status(404).json({
      status: 'not found',
      message: 'Invalid ID',
    });

  res.status(200).json({
    status: 'ok',
    data: tour,
  });
});

app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (error) => {
      res.status(200).json({
        status: 'ok',
        data: newTour,
      });
    }
  );
});

app.listen(3000, () => {
  console.log('running on port 3000...');
});
