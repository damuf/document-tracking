import mongoose from "mongoose";

console.log("User",process.env.user);

const connection = `mongodb+srv://admin:1234@document-tracking.wgdqmjg.mongodb.net/?retryWrites=true&w=majority`
mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to succesfully")
    })
    .catch((e) => {
        console.log("Database error", e)
    })

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};
