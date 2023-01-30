const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/heroviredassessments", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase 
    const db = client.db("heroviredassessments");

    //Updating Data
db.collection("Task_1_Data").updateMany({
    Submission: 0
    },
    {
        $set: {
            Grade: 'C'
        }
    },
    {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
client.close()  //Closing The Connection
});