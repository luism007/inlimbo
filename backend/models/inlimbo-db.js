const mongoose = require('mongoose');

mongoose
.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@sandbox.buuvy.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`, {
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
    collection_id: String,
    photo_meta_data: String
});

module.exports = {
    PhotoSchema
};