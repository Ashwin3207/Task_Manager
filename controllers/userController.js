import Users from "../models/userModel.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Enter all fields'
            });
        }

        const existing = await Users.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const user = new Users({ name, email, password });
        await user.save();

        return res.status(201).json({
            success: true,
            message: 'Registered successfully',
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in registration',
            error
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Enter all fields'
            });
        }

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Add password validation here if you have password hashing
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in login',
            error
        });
    }
};
