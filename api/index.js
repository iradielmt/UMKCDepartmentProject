const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const api = express();
api.use(bodyParser());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "universitydatabase"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});

api.listen(3000, () => {
    console.log("Server started ...");
});
api.get("/", (req, res) => {
    res.send("Hello From The Server");
})

function validateFName(fname) {
    let errors = [];
    if (fname.length == 0) {
        errors.push("First Name Is Null");
    }

    if (fname.length > 50) {
        errors.push("First Name Length Can Not Exceed 50 Characters.");
    }
    return errors;
}

function validateLName(lname) {
    let errors = [];
    if (lname.length == 0) {
        errors.push("Last Name Is Null");
    }

    if (lname.length > 50) {
        errors.push("Last Name Length Can Not Exceed 50 Characters.");
    }

    return errors;
}

function validateID(umkcID) {
    let errors = [];
    // check whether ID is empty or not
    if (umkcID.length == 0) {
        errors.push("ID Is empty");
    }
    // checks whether ID length is less then 10 character
    if (umkcID.length < 8) {
        errors.push("ID must be at least 8 Digits");
    }

    // checks whether contact no length is more then 10 character
    if (umkcID.length > 9) {
        errors.push("ID Must Be of 10 Digits");
    }

    // Using regular expression check whether contactno is only containing digits or not
    if (!(/[0-9]/g.test(umkcID))) {
        errors.push("ID must contain digits only");
    }

    return errors;
}

function isAdmin(umkcID){
    let admin = false;

    if(umkcID.length == 9){
        admin = true;
    }
    return admin;
}

api.post("/student", (req, res) => {
    console.log("Requesey..	");
    let fname = req.body.fname;
    let lname = req.body.lname;
    let umkcID = req.body.umkcID;

    let errFName = validateFName(fname); // will validate first name
    let errLName = validateLName(lname); // will validate last name
    let errID = validateID(umkcID); // will validate ID
    let admin = isAdmin(umkcID); // will determine if user is student or admin

    if (errFName.length || errLName.length || errEmail.length || errContactNo.length || errBirthDate.length || errSemester.length || errCourse.length) {
        res.json(200, {
            msg: "Validation Failed",
            errors: {
                fname: errFName,
                lname: errLName,
                umkcID: errID,
            }
        });
    }
    else {
        let query = `INSERT INTO USERS (fname, lname, umkcID, admin) VALUES ('${fname}', '${lname}', '${umkcID}', '${admin}')`;

        connection.query(query, (err, result) => {
            if (err) {
                // status code 500 is for Internal Server Error
                res.json(500, {
                    msg: "Some thing went wrong please try again"
                })
            }

            // if we reach till this point means record is inserted succesfully


            res.json(200, {
                msg: "User Registered Succesfully",
            })
        })

    }
});

api.get("/api/students", (req, res) => {
    let query = "SELECT * FROM STUDENTS";

    connection.query(query, (err, result) => {
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

api.listen(3000, () => {
    console.log("Server started ...");
});



