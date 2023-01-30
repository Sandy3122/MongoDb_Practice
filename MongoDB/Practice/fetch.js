const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/students", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("students");

//Fetching All Data From MongoDB Database
// db.collection("Details").find().toArray().then((result) => {
//     console.log("Details Found"),
//     console.log(JSON.stringify(result, undefined, 2));
// });



//Fetching Specific Data From MongoDB Database
// db.collection("Details").find({Name:"Seeram"}).toArray().then((result) => {
//     console.log("Details Found"),
//     console.log(JSON.stringify(result, undefined, 2));
// });

db.collection("Details").find().count().then((count)=>{

    console.log(`count is: ${count}`);
});

    (error => {
        {
            console.log("Unable To Fetch The Data", error)
        }
    });
client.close()  //Closing The Connection
});