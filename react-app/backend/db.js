const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://arunava:arunavag95@atlascluster.gooheer.mongodb.net/go_food?retryWrites=true&w=majority&appName=AtlasCluster';

const mongoDB = async () =>
    await mongoose
        .connect(mongoURI)
        .then(async () => {
            console.log('MongoDB Connected');

            const fetchedData = await mongoose.connection.db.collection('food_items');

            console.log(await fetchedData.find({}).toArray());
        })
        .catch((err) => console.log(err));

module.exports = mongoDB;
