import express from 'express';
const app = express();



//routes/ endpoints for the requests
//app.httprequest("/routepagename", callbackfunction(requestobject, response, next))
// GET
app.get("/hello", (req, res, next) => {
    //send somehting to client in return statement
    return res.send("string we sent = hello");
});
// PUT - update/modify data
// POST - new data
// DELETE
//open dev portal - localhost
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map