// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();
app.use(express.json()) // for parsing(read) application/json
app.use(express.urlencoded({ extended: true }))

const URI = process.env.MONGO_URI;
const port = process.env.PORT || 8009;


// db
mongoose.set("strictQuery", false);
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).
then(() => console.log("DB connected Successfully"))
.catch(err => console.log("DB not connected", err));


// middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

// routes import
// const authRoutes = require('./routes/authRoute');

//routes
// app.use('/auth', authRoutes);

//listener
app.listen(port, () => console.log(`Server is running on port ${port}`));