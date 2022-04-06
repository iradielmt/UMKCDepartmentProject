const jwt = require("jsonwebtoken");
module.exports = {
    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(
                token,
                'TOKEN'
            );
            req.userData = decoded;
            next();
        } catch (err) {
            return res.status(401).send({
                msg: 'Your session is not valid!'
            });
        }
    },
    validateRegister: (req, res, next) => {
        //Validates email
        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(req.body.email))) {
            return res.status(400).send({
                msg: 'Please enter a valid email'
            });
        }
        // checks whether email is empty or not
        if (req.body.email.length == 0) {
            return res.status(400).send({
                msg: 'Email Cannot Be Null'
            });
        }
        // checks whether email length is more then 100 or not
        if (req.body.email.length > 100) {
            return res.status(400).send({
                msg: "Email Cannot exceed 100 Character"
            });
        }
        // first name validation
        if (!req.body.fname || req.body.fname.length > 50) {
            return res.status(400).send({
                msg: 'Please enter a valid first name'
            });
        }
        // last name validation
        if (!req.body.lname || req.body.lname.length > 50) {
            return res.status(400).send({
                msg: 'Please enter a valid last name'
            });
        }
        //validates umkcID first by making sure field isn't null then validating
        if (!req.body.umkcID) {
            return res.status(400).send({
                msg: 'ID cannot be null'
            });
        }
        let umkcID = req.body.umkcID.toString(10);
        if (!(/[0-9]/g.test(req.body.umkcID))) {
            return res.status(400).send({
                msg: 'ID must contain digits only'
            });
        }
        // checks whether ID length is less then required digits
        if (umkcID.length < 8) {
            return res.status(400).send({
                msg: 'ID must be at least 8 Digits'
            });
        }
        // checks whether ID length is more then 10 digits
        if (umkcID.length > 9) {
            return res.status(400).send({
                msg: 'ID cannott exceed 9 Digits'
            });
        }
        // password min 6 chars
        // if (!req.body.isAdmin || req.body.password.length < 6) {
        //     return res.status(400).send({
        //         msg: 'Please enter a password with min. 6 chars'
        //     });
        // }
        // if (!req.body.umkcID || req.body.umkcID.length > 50) {
        //     return res.status(400).send({
        //         msg: 'Please enter a valid first name'
        //     });
        // }
        // password (repeat) does not match
        // if (
        //     !req.body.password_repeat ||
        //     req.body.password != req.body.password_repeat
        // ) {
        //     return res.status(400).send({
        //         msg: 'Both passwords must match'
        //     });
        // }
        // next();
    }
};