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

function isAdmin(umkcID){
    let admin = 0;

    if(umkcID.length == 9){
        admin = 1;
    }
    return admin;
}