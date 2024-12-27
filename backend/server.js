// const http = require("node:http");
const app = require("./app");
const connectToDatabase = require("./databaseConfig/db");
const port = process.env.PORT || 3000;
// const server = http.createServer(app);

connectToDatabase().then(()=>{
    console.log("Connected with database");
    app.listen(port, () => {
        console.log("Server is running on port " + port);
      });
    
}).catch(err => {
    console.log("ERROR : ",err.message);
    
}); 

