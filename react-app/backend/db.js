const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://arunava:arunavag95@atlascluster.gooheer.mongodb.net/go_food?retryWrites=true&w=majority&appName=AtlasCluster';

const mongoDB = async () =>
    await mongoose
        .connect(mongoURI)
        .then(async () => {
            console.log('MongoDB Connected');

            const foodItems = await mongoose.connection.db.collection('food_items');

            await foodItems.find({}).toArray().then((data) => {
                global.foodItems = data;
            })
        })
        .catch((err) => console.log(err));

module.exports = mongoDB;
