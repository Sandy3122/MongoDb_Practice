const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/students", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("students");

    // db.collection("Details").findOneAndDelete(
    //     {Name:"Kumar"}
    // ).then((result) => {
    //     console.log(result);
    // });
    
    db.collection("Details").deleteOne(
        {Name:"Sandeep"}
    ).then((result) => {
        console.log(result);
    });


    client.close()  //Closing The Connection
});
