const userModel = require("../SchemaModel/userModel");
const jwt = require("jsonwebtoken");

//..............Signup...............
exports.userSignup = async (req, res) => {
    const data = req.body;

    const userData = await userModel.create(data);

    res.status(200).send({
        message: "User created successfully",
        data: userData,
    });
}


//..............Login...............
exports.userLogin = async (req, res) => {
    try {
        const data = req.body;

        const { email, password } = data;

        const userData = await userModel.findOne({ email, password });

        if (userData) {
        const token = jwt.sign({ Email: userData.email, Password: userData.password }, "AshishIngle");

            return res
                .status(200)
                .send({ message: "User logged in successfully", Token: token });
        } else {
            return res.status(404).send({ message: "Get register first" });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal server error",
            error: error,
        });
    }
    
}



//..............Get Name...............
exports.getName = async (req, res) => {
    try {
        // const data = req.body;
        
        const { email, password } = req.user

        const userData = await userModel.findOne({ email, password });

        if (userData) {
            const name = userData.name;
            return res
                .status(200)
                .send({ message: "User Data Fetch successfully", UserName: name });

        } else {
            return res.status(404).send({ message: "Get register first" });
        }

    } catch (error) {
        res.status(500).send({ message: "Internal server error", Error: error });
    }
}