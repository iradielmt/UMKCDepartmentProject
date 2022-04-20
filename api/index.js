const express = require("express");
const bodyParser = require("body-parser");
const api = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
api.use(express.json());
api.use(cors());
api.use(bodyParser());

const router = require('./routes/router');
api.use('/api', router);

api.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


api.use((req, res, next) => {
    res.status(200).send(res.locals.data)
})

api.use((err, req, res, next) => {
    console.error(err.stack)
    return res.json(500, {
        msg: err.message,
        errors: {...res.locals.errors}
    });
})


// function validateEmail(email) {
//     let errors = [];
//
//     // checks whether email is empty or not
//     if (email.length == 0) {
//         errors.push("Email Is Null");
//     }
//     // checks whether email length is more then 100 or not
//     if (email.length > 100) {
//         errors.push("Email Can not exceed 100 Character");
//     }
//     // checks whether email is valid or not usinf regular expression
//     if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email))) {
//         errors.push("Email Is Not Valid");
//     }
//
//     return errors;
// }

// function validateFName(fname) {
//     let errors = [];
//     if (fname.length == 0) {
//         errors.push("First Name Is Null");
//     }
//     if (fname.length > 50) {
//         errors.push("First Name Length Can Not Exceed 50 Characters.");
//     }
//     return errors;
// }
//
// function validateLName(lname) {
//     let errors = [];
//     if (lname.length == 0) {
//         errors.push("Last Name Is Null");
//     }
//     if (lname.length > 50) {
//         errors.push("Last Name Length Can Not Exceed 50 Characters.");
//     }
//     return errors;
// }

// function validateID(umkcID) {
//     let errors = [];
//     umkcID = umkcID.toString(10);
//     // check whether ID is empty or not
//     if (umkcID.length == 0) {
//         errors.push("ID Is empty");
//     }
//     // checks whether ID length is less then required digits
//     if (umkcID.length < 8) {
//         errors.push("ID must be at least 8 Digits");
//     }
//     // checks whether ID length is more then 10 digits
//     if (umkcID.length > 9) {
//         errors.push("ID can't exceed 9 Digits");
//     }
//     // Using regular expression check whether ID is only containing digits or not
//     if (!(/[0-9]/g.test(umkcID))) {
//         errors.push("ID must contain digits only");
//     }
//     return errors;
// }

function isAdmin(umkcID){
    let admin = 0;

    if(umkcID.length == 9){
        admin = 1;
    }
    return admin;
}