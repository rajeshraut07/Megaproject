const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() =>{
    console.log("db is connected");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
}

const initDB = async () =>{
    await Listing.deleteMany({});
    // initData.data=initData.data.map((obj)=>({
    //     ...obj,owner:"676fcf2ff6093b146473b7ac"
    // }));
    initData.data=initData.data.map((obj,index)=>{
        let categories =  ["Trending", "Rooms", "Iconic City", "Mountains", "Castles", "Amazing Pools", "Farms", "Camping", "Arctic", "Boats", "Domes"];
        let category = categories[index % categories.length];
        return {
            ...obj,
            owner: "676fcf2ff6093b146473b7ac",
            category: category
          };
    });
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
};

initDB();