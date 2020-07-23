const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//       res.json({
//       message: "Welcome to my platform",
//       email: email,  
//   })
//   }

// exports.signUp = (req, res, next) => {
//     const email = req.params.email;
//     const password = req.params.password;
//       res.json({
//       message: "Welcome to my platform",
//       email: email,  
//   })
//   }
// exports.signUp = (req, res, next) => {
//     const email = req.query.email;
//     const password = req.query.password;
//       res.json({
//       message: "Welcome to my platform",
//       email: email,  
//   })
//   }

// exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//       res.json({
//       message: "Welcome to my platform",
//       email: email,  
//   })
//   }



// exports.signUp = (req, res, next) => {
//     console.log(req.body);
//     const password = req.body.password;
//       res.json({
//       message: "Welcome to my platform", 
//   })
//   }

//   exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     console.log(req.body);
//     res.json({
//       message: "Welcome to my platform",
//       email: email,
//     });
//   };
  

// exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     if(!email || !password) {
//        res.status(400).send({
//           status: false,
//           message: "All fields are required"
//   })
//    return;
//   }
//     res.json({
//       message: "Welcome to my platform",
//       email: email,
//     });
//   };

// exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     if(!email || !password) {
//        res.status(400).send({
//           status: false,
//           message: "All fields are required"
//   })
//    return;
//   }
//     bcrypt
//       .hash(password, 12)
//       .then(password => {
//         let user = new User({
//           email,
//           password,
//         });
//         return user.save();
//       })
//       .then(() => res.status(200).send({ status: true, message: "User registered successfully" }))
//       .catch(err => console.log(err));
//   };

// exports.signUp = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     if(!email || !password) {
//        res.status(400).send({
//           status: false,
//           message: "All fields are required"
//   })
//    return;
//   }
//   User.findOne({ email })
//       .then(user => {
//         if (user) {
//           return res
//             .status(423)
//             .send({status: false, message: "This email already exists"});
//         }
//     bcrypt
//       .hash(password, 12)
//       .then(password => {
//         let user = new User({
//           email,
//           password,
//         });
//         return user.save();
//       })
//       .then(() => res.status(200).send({ status: true, message: "User registered successfully" }))
//       .catch(err => console.log(err));
//   };

exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password) {
       res.status(400).send({
          status: false,
          message: "All fields are required"
  })
   return;
  }
  User.findOne({ email })
      .then(user => {
        if (user) {
          return res
            .status(423)
            .send({status: false, message: "This email already exists"});
        }
      })
    bcrypt
      .hash(password, 12)
      .then(password => {
        let user = new User({
          email,
          password,
        });
        return user.save();
      })
      .then(() => res.status(200).send({ status: true, message: "User registered successfully" }))
      .catch(err => console.log(err));
  };

  // exports.logIn = (req, res, next) => {
  //   const email = req.body.email;
  //   const password = req.body.password;
  // }

  // exports.logIn = (req, res, next) => {
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   res.json({ status:true, data: email })
  // }

  // exports.logIn = (req, res, next) => {
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   res.json({ status:true, data: email })
  //   User.findOne({ email })
  //     .then(user => {
  //       if (!user) {
  //         return res
  //           .status(404)
  //           .send("User not found, please provide valid credentials");
  //       }
  //       bcrypt.compare(password, user.password).then(valid => {
  //         if (!valid) {
  //           return res
  //             .status(403)
  //             .send(
  //               "Incorrect username or password, please review details and try again"
  //             );
  //         }
  //         const token = jwt.sign(
  //           { email: user.email, _id: user._id },
  //           "somesecretkey",
  //           { expiresIn: "1hr" }
  //         );
  //         res.status(200).send({
  //           _id: user._id,
  //           token
  //         });
  //       });
  //     })
  //     .catch(err => console.log(err)); 
  //     }

  // exports.logIn = (req, res, next) => {
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   User.findOne({ email })
  //     .then(user => {
  //       if (!user) {
  //         return res
  //           .status(404)
  //           .send("User not found, please provide valid credentials");
  //       }
  //       bcrypt.compare(password, user.password).then(valid => {
  //         if (!valid) {
  //           return res
  //             .status(403)
  //             .send(
  //               "Incorrect username or password, please review details and try again"
  //             );
  //         }
  //         const token = jwt.sign(
  //           { email: user.email, _id: user._id },
  //           "somesecretkey",
  //           { expiresIn: "1hr" }
  //         );
  //         res.status(200).send({
  //           _id: user._id,
  //           token
  //         });
  //       });
  //     })
  //     .catch(err => console.log(err)); 
  //     }

      exports.logIn = (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({ email })
          .then(user => {
            if (!user) {
              return res.json({ 
                 status: 404,
                 message : 'User not found, please provide valid credentials'});
            }
            bcrypt.compare(password, user.password).then(valid => {
              if (!valid) {
                return res.json({
                    status: 403, 
                    message :'Incorrect username or password, please review details and try again'}
                  );
              }
              const token = jwt.sign(
                { email: user.email, id: user.id },
                "somesecretkey",
                { expiresIn: 3600 }
              );
              res.json({
                status: 200,
                data:{
                id: user.id,
                token,
                message : 'User Logged in Sucessfully'
                }
              });
            });
          })
          .catch(err => console.log(err)); 
          }
//  export default logIn;