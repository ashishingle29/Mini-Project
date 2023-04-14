const jwt = require("jsonwebtoken");
const userModel = require("../SchemaModel/userModel");

const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) return res.status(401).send({ message: "Token not found" })
        // console.log(token);
        if (token) {
            token = token.split(" ")[1];
            const decoded = jwt.verify(token, "AshishIngle");

            const user = await userModel.findOne({
                email: decoded.email,
                password: decoded.password,
            });

            if (user) {
                req.user = user;
                next();
            } else {
                res.status(401).send({
                    message: "Unauthorized",
                });
            }
        } else {
            res.status(401).send({
                message: "Unauthorized",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal server error",
            error: error,
        });
    }
};

exports.auth = auth;
