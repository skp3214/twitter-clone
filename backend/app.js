const express = require('express');
const cookieParser = require('cookie-parser');
const connectToMongo = require('./database/dbConnect');
const config = require('./config');
const cors=require('cors');
connectToMongo();

const app = express();
const PORT = config.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require('./Auth/auth.route')(app);
require('./User/user.routes')(app);
require('./Post/post.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


