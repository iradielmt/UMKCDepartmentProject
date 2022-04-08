const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/database.js');
const userMiddleware = require('../middleware/users.js');

router.get("/", (req, res) => {
    res.send("Hello From The Server");
})

router.post('/register', userMiddleware.validateRegister, (req, res, next) => {

    db.query(
        `SELECT * FROM Accounts WHERE LOWER(email) = LOWER(${db.escape(
            req.body.email
        )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This email is already in use!'
                });
            } else {
                // New account being created
                bcrypt.hash(req.body.umkcID, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {
                        // has hashed pw => add to database
                        db.query(
                            `INSERT INTO Accounts (email, umkcID) VALUES (${db.escape(req.body.email)}, ${db.escape(hash)} )`,
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                return res.status(201).send({
                                    msg: 'Registered!'
                                });
                            }
                        );
                    }
                });
            }
        }
    );
});

router.post('/login', (req, res, next) => {
    let umkcID = req.body.umkcID.toString();
    db.query(
        `SELECT * FROM Accounts WHERE email = '${req.body.email}'`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or ID is incorrect!'
                });
            }
            // check password
            console.log(umkcID);
            bcrypt.compare(
                req.body.umkcID.toString(),
                result[0].umkcID.toString(),
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Email or ID is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({
                                email: result[0].email,
                                umkcID: result[0].umkcID
                            },
                            'TOKEN', {
                                expiresIn: '3d'
                            }
                        );
                        db.query(
                            `UPDATE Accounts SET last_login = now() WHERE email = '${result[0].id}'`
                        );
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});

// router.post("/student", (req, res) => {
//     console.log("Request..	");
//     let fname = req.body.fname;
//     let lname = req.body.lname;
//     let umkcID = req.body.umkcID;
//
//     let errFName = validateFName(fname); // will validate first name
//     let errLName = validateLName(lname); // will validate last name
//     let errID = validateID(umkcID); // will validate ID
//     let admin = isAdmin(umkcID); // will determine if user is student or admin
//
//     if (errFName.length || errLName.length || errID.length) {
//         res.json(200, {
//             msg: "Validation Failed",
//             errors: {
//                 fname: errFName,
//                 lname: errLName,
//                 umkcID: errID,
//             }
//         });
//     }
//     else {
//         let query = `INSERT INTO Students (fname, lname, umkcID, admin) VALUES ('${fname}', '${lname}', '${umkcID}', '${admin}')`;
//         db.connection.query(query, (err, result) => {
//             if (err) {
//                 console.log(err.message);
//                 // status code 500 is for Internal Server Error
//                 return res.json(500, {
//                     msg: "Something went wrong please try again"
//                 })
//             }
//             // if we reach till this point means record is inserted succesfully
//             return res.json(200, {
//                 msg: "User Registered Succesfully",
//             })
//         })
//     }
// });
//
router.get("/students", (req, res) => {
    let query = "SELECT * FROM STUDENTS";

    db.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }

        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
})
//
// router.post("/login", (req, res, next)=> {
//     let umkcID = req.body.umkcID;
//     let email = req.body.email;
//     let errID = validateID(umkcID); // will validate ID
//     let errEmail = validateEmail(email); // will validate user email is in proper format
//     if (errID.length || errEmail.length) {
//         res.locals.errors = {
//             umkcID: errID,
//             email: errEmail,
//         }
//         return next("Validation Failed");
//     }
//
//     else {
//         let query = `SELECT umkcID, email FROM Accounts WHERE umkcID = '${umkcID}'`;
//         db.connection.query(query, (err, results) => {
//             if (err) {
//                 console.log(err.message);
//                 // status code 500 is for Internal Server Error
//                 return res.json(500, {
//                     msg: "Something went wrong please try again"
//                 })
//             }
//             if(results.length == 1){
//                 res.locals.data = {
//                     msg: "Succesful Login",
//                 }
//                 return next();
//             }
//             return res.json(401, {
//                 msg: "Unknown user"
//             })
//         })
//     }
// })

module.exports = router;
