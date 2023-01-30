const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/students",(error,client)=>{
    if(error){
        return console.log("unable to connect");

    }
    console.log("connected successfully");

    const db=client.db("students");
    // db.collection("Details").find().toArray().then((docs)=>{
    //     console.log("Details found");

    //     console.log(JSON.stringify(docs,undefined,2));
    // },(error)=>{
    //     console.log("unable to fetch the data",error);
    // });



    // db.collection("Details").find({Name:"Akhil"}).toArray().then((docs)=>{
    //     console.log("Details found");

    //     console.log(JSON.stringify(docs,undefined,2));
    // },(error)=>{
    //     console.log("unable to fetch the data",error);
    // });


    db.collection("Details").find().count().then((count)=>{

        console.log(`count is: ${count}`);
    });
    
    client.close();
});