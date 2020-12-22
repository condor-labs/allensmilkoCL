export const GetQuotes = function (req, res, next) {
    res.status(200).send({
        data:{
            message: "OK"
        }
    });
}
