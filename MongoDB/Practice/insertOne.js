const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/students", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("students");


    //Creating Collection In MOngoDB Using insertOne
    db.collection("Details").insertOne({    //Details is collection name in database
        Name: "Sandeep",
        Marks: 100,
        Grade: "A+"
    },
        (error, result) => {
            if (error) {
                console.log("Problem With Insertion", error)
            }

            console.log(JSON.stringify(result.ops, undefined, 2));

        });
    client.close()  //Closing The Connection
});
