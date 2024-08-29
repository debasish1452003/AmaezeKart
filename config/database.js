const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        colors.bgGreen.white(
          `Mongodb connected with server: ${data.connection.host}`
        )
      );
    });
};

module.exports = connectDatabase;

// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       tls: true, // Enable TLS/SSL
//       tlsAllowInvalidCertificates: true, // Use with caution, for development purposes
//     })
//     .then((data) => {
//       console.log(
//         colors.bgGreen.white(
//           `Mongodb connected with server: ${data.connection.host}`
//         )
//       );
//     })
//     .catch((err) => {
//       console.error(
//         colors.bgRed.white(`Mongodb connection error: ${err.message}`)
//       );
//     });
// };

// module.exports = connectDatabase;
