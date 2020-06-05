const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3100;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// due to the where the public folder ends up after compiling,
// this is where your public static files end up
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfoliodb");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
