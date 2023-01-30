const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/students",(error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");
});