const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;


async function handleGetAllUsers(req, res) {
    try {
        const Alluser = await User.find().select("-password");
        return res.json(Alluser);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}
async function handleRegisterNewUser(req, res) {
    try {
        const body = req.body;
        if (!body || !body.name?.trim() || !body.email?.trim() || !body.password) {
            return res.status(400).json({ msg: "field is required" });
        }
        const email = body.email.trim().toLowerCase();
        const existuser = await User.findOne({ email });
        if (existuser) {
            return res.status(409).json({ msg: " A user with this already exist" })
        }
        const hashpassword = await bcrypt.hash(body.password, 10);
        const user = await User.create({
            name: body.name,
            email,
            password: hashpassword,
        });
        const Data = {
            user: {
                id: user._id
            }
        }
        const authtoken = jwt.sign(Data, SECRET_KEY);
        return res.json({ authtoken });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}
async function handleLoginUser(req, res) {
    try {
        const email = String(req.body?.email || "").trim().toLowerCase();
        const { password } = req.body || {};
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
        const Data = {
            user: {
                id: user._id
            }
        }
        const authtoken = jwt.sign(Data, SECRET_KEY);
        return res.status(200).json({
            message: "Login successful",
            authtoken
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}
async function handleGetUserById(req, res) {
    try {
        if (String(req.user.id) !== req.params.id) {
            return res.status(403).json({ message: "You can only view your own account" });
        }
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });

    }

}

async function handleDeleteUser(req, res) {
    try {
        if (String(req.user.id) !== req.params.id) {
            return res.status(403).json({ message: "You can only delete your own account" });
        }
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "user not found" });
        }
        return res.status(200).json({ msg: "user deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });

    }

}
async function handleEditAllNotes(req, res) {
    try {
        const updateduser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,

        );
        if (!updateduser) {
            return res.status(404).json({
                msg: "user not found"
            });
        }
        return res.status(200).json({
            msg: "user updated successfully",
            updateduser
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Server error"
        });
    }
}
async function handleGetUser(req, res) {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}


module.exports = {
    handleGetAllUsers,
    handleRegisterNewUser,
    handleLoginUser,
    handleGetUserById,
    handleDeleteUser,
    handleGetUser,
    handleEditAllNotes,

};

