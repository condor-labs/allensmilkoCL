"use strict";
exports.getSchedules = function (req, res, next) {
    res.status(200).send({
        data:{
            message: "OK"
        }
    });
}