import  app  from "./app.js";

app.listen(app.get("port"), function ()
    {
        console.log("Server listen on port " + app.get("port"))
    })