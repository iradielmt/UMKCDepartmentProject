const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const api = express();

api.listen(3000, () => {
    console.log("Server started ...");
});

api.get("/", (req, res) => {
    res.send("Hello From The Server");
})

api.use(bodyParser());

api.post("/student", (req, res) => {
});

let fname = req.body.fname;
let lname = req.body.lname;
let umkcID = req.body.umkcID;

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