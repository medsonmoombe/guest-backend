const app = require("./index");
const routes = require("./routes/router");

app.use("/", routes);
app.listen(3000,function () {
      console.log("Server started. Go to http://localhost:3000/");
});