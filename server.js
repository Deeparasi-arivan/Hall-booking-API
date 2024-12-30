// const express = require('express');
// const app = express();
// app.use(express.json()); // To parse JSON requests

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log('Server is running on port ${PORT}');
// });

// let bookings =[];


// //2. Create POST endpoint to book a room:

// app.post('/bookings', (req, res) => {
//   const { customerName, roomId, date, startTime, endTime } = req.body;
//   const booking = {
//     id: bookings.length + 1,
//     customerName,
//     roomId,
//     date,
//     startTime,
//     endTime,
//     status: 'Booked',
//     bookingDate: new Date(),
//   };
//   bookings.push(booking);
//   res.status(201).json(booking);
// });

// //step 4: Create GET endpoint to view bookings

// //1. Define a GET route to list all bookings:

// app.get('/bookings', (req, res) => {
//   res.json(bookings);
// });


const express = require('express');
const app = express();
app.use(express.json());

//let bookings = [];

app.post('/bookings', (req, res) => {
  const { customerName, roomId, date, startTime, endTime } = req.body;
  const booking = {
    id: bookings.length + 1,
    customerName,
    roomId,
    date,
    startTime,
    endTime,
    status: 'Booked',
    bookingDate: new Date(),
  };
  bookings.push(booking);
  res.status(201).json(booking);
});

app.get('/bookings', (req, res) => {
  res.json(bookings);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});


// {
//     "customerName": "John Doe",
//     "roomId": 1,
//     "date": "2024-12-30",
//     "startTime": "10:00",
//     "endTime": "12:00"
//   }
  
  