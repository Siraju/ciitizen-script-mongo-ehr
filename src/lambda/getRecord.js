// const MongoClient = require('mongodb');
// const client = MongoClient.MongoClient;
// // Connection url
// const url = 'mongodb://localhost:27017';
// // Database Name
// const dbName = 'test';
//
// export function handler(event, context, callback) {
//   console.log(event)
//   // Connect using MongoClient
//   MongoClient.connect(url, function(err, client) {
//     // Use the admin database for the operation
//     const adminDb = client.db(dbName).admin();
//     // List all the available databases
//     adminDb.listDatabases(function(err, dbs) {
//       if (err) callback(err)
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(dbs)
//       })
//       client.close();
//     });
//   });
//
// }
