const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to DB!');
})
.catch((e) => console.log(e));

const PhotoSchema = new mongoose.Schema({
    id: String,
    source: String,
    lowres_source: String,
    title: String,
    description: String,
    type: String,
    collection_id: String
});

module.exports = {
    PhotoSchema
};