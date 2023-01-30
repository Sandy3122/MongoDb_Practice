const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/heroviredassessments", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase 
    const db = client.db("heroviredassessments");

//Fetching Data From MongoDB Database
db.collection("Task_2_StudentData").find().sort({Name: 1}).toArray().then((result) => {
    console.log("Details Found"),
    console.log(JSON.stringify(result, undefined, 2));
});
    (error => {
        {
            console.log("Unable To Get The Data", error)
        }
    });
client.close()  //Closing The Connection
});