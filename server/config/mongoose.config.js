const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/debug_me', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("Error connectiong to DB", err));