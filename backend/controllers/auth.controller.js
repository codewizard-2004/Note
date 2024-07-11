import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js";



export const signup = async(req , res) => {
    try {
        const {username , password , confirmPassword} = req.body;

        //SERVER SIDE VERIFICATION
        if (password !== confirmPassword) {
            return res.status(400).json({error: "passwords do not match"})
        }

        //CHECK IF THE USERNAME ALREADY EXISTS
        const check_user = await User.findOne({ username: username })

        if (check_user) {
            return res.status(400).json({error:"Username already exists"})
        }

        //Create new user
        const newUser = new User({
            username: username,
            password: password
        })

        //If all right save it
        if (newUser) {
            //Generate JWT tokens
            generateTokenAndSetCookie(newUser._id , res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id ,
                username: newUser.username
    
            })
        }else {
            res.send(400).json({error: "Invalid user data"})
        }

        
    } catch (error) {
        console.log("Error in signup controller" , error.message);
        res.status(500).json({error: "Internal server error"})
    }
}



//LOGIN CONTROLLER
export const login = async(req , res) => {
    try {
        const {username , password} = req.body;
        const user = await User.findOne({username: username});

        //CHECK IF USER IS PRESENT 
        if (!user) {
            return res.status(400).json({error: "Invalid username or password"});
        }
        if (user.password !== password) {
            return res.status(400).json({error: "Invalid Username or password"});
        }
       

        generateTokenAndSetCookie(user._id , res)
        res.status(200).json({
            _id: user._id,
            username: user.username,
        })

    } catch (error) {
        console.log("Error in login controller" , error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export const logout = async(req , res) => {
    try {
        res.cookie("jwt" , "" ,{maxAge:0});
        res.status(200).json({message: "Logged out successfully"})
        
    } catch (error) {
        console.log("Error in login controller" , error.message);
        res.status(500).json({error: "Internal server error"})
    }
}