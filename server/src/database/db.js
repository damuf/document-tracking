import mongoose from "mongoose";

console.log("User",process.env.user);

const connection = `mongodb+srv://admin:1234@document-tracking.wgdqmjg.mongodb.net/?retryWrites=true&w=majority`
mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch((e) => {
        console.log("Error conectando a la base de datos", e)
    })

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};
