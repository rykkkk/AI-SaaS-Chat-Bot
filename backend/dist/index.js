import express from 'express';
const app = express();

//middleware
app.use(express.json());

//routes/ endpoints for the requests
//app.httprequest("/routepagename", callbackfunction(requestobject, response, next))
// GET
//    //send somehting to client in return statement
//    return res.send("string we sent = hello");
//});
//// PUT - update/modify data
//app.put("/put", (req, res, next) => {
//    console.log(req.body.name);
//    return res.send("string we sent = hello");
//});
//// POST - new data
//app.post("/post", (req, res, next) => {
//    console.log(req.body.name);
//    return res.send("hello");
//});
// DELETE
//app.delete("/delete/:id", (req, res, next) => {
//    console.log(req.params.id);
//    //send somehting to client in return statement
//    return res.send("hello");
//});


//connections and listeners
//open dev portal - localhost
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map