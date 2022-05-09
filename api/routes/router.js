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
                        console.log(err);
                        return res.status(500).send({
                            msg: JSON.stringify(err)
                        });
                    } else {
                        // has hashed umkcID => add to database
                        db.query(
                            `INSERT INTO Accounts (email, isAdmin, umkcID) VALUES (${db.escape(req.body.email)}, ${db.escape(req.body.isAdmin)}, ${db.escape(hash)} )`,
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        msg: 'An unexpected error occurred'
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

router.post("/register/student", (req, res) => {
    db.query(
        `INSERT INTO Students (umkcID, fname, lname, contactNo, email, certified) VALUES (${db.escape(req.body.umkcID)}, ${db.escape(req.body.fname)}, ${db.escape(req.body.lname)}, ${db.escape(req.body.contactNo)}, ${db.escape(req.body.email)}, ${db.escape(req.body.certified)})`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: 'An unexpected error occurred'
                });
            }
            return res.status(201).send({
                msg: 'Information Recorded'
            });
        }
    );
})


router.post("/send/app", (req, res) => {
    db.query(
        `INSERT INTO Applications (fname, lname, umkcID, email, currLevel, gradSemester, GPA, hrsCompleted, degree, currMajor, position, certified, courseID) VALUES (${db.escape(req.body.fname)}, ${db.escape(req.body.lname)}, ${db.escape(req.body.umkcID)}, ${db.escape(req.body.email)}, ${db.escape(req.body.currLevel)}, ${db.escape(req.body.gradSemester)}, ${db.escape(req.body.GPA)}, ${db.escape(req.body.hrsCompleted)}, ${db.escape(req.body.degree)}, ${db.escape(req.body.currMajor)}, ${db.escape(req.body.position)}, ${db.escape(req.body.certified)}, ${db.escape(req.body.courseID)})`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: 'An unexpected error occurred'
                });
            }
            return res.status(201).send({
                msg: 'Information Recorded'
            });
        }
    );
})

router.post('/login', (req, res, next) => {
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
                                umkcID: result[0].umkcID,
                                idRef: req.body.umkcID.toString()
                            },
                            'TOKEN', {
                                expiresIn: '3d'
                            }
                        );
                        db.query(
                            `UPDATE Accounts SET last_login = now() WHERE email = '${result[0].email}'`
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

router.get('/validate', userMiddleware.isLoggedIn, (req, res, next) => {
    res.send('Logged in');
});

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

router.get("/courses", (req, res) => {
    let query = `SELECT * FROM Courses ORDER BY courseNo ASC`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

router.get("/applicationsGPA", (req, res) => {
    let param = req.query.courseNo;
    let query = `SELECT * FROM Applications WHERE courseID = '${param}' ORDER BY GPA DESC`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

router.get("/applicationsHrs", (req, res) => {
    let param = req.query.courseNo;
    let query = `SELECT * FROM Applications WHERE courseID = '${param}' ORDER BY hrsCompleted DESC`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

router.get("/applicationsFName", (req, res) => {
    let param = req.query.courseNo;
    let query = `SELECT * FROM Applications WHERE courseID = '${param}' ORDER BY fname ASC`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

router.get("/applicationsLName", (req, res) => {
    let param = req.query.courseNo;
    let query = `SELECT * FROM Applications WHERE courseID = '${param}' ORDER BY lname ASC`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

router.get("/courseNum", (req, res) => {
    let query = `SELECT * FROM Courses WHERE courseNo ='${req.body.courseNo}'`;
    db.query(query, (err, result) => {
        if (err) {
            return res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
});

module.exports = router;
