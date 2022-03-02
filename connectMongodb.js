const {MongoClient} = require('mongodb');

async function connectMongoDB(){
    const uri = "mongodb+srv://ajeet:shilpa@cluster0.rj6qf.mongodb.net/myDB?retryWrites=true&w=majority";
     const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = connectMongoDB;