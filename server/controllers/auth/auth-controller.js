//register

const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require ('../../models/User');
const user = require('../../models/User');


const registerUser = async (req,res)=>{
   
    
    const {userName , email, password } = req.body;
    try{

     const checkUser = await user.findOne({email});
     if(checkUser) return res.json({success : false , message:'user already exists with same email! please try another one '})

        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password : hashPassword,
        })

        await newUser.save()
        res.status(200).json({
            success:true,
            message: "Registration successfull",
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message: "some error occured",
        });
    }
};


//login

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const checkUser = await User.findOne({ email });
        if(!checkUser)
            return res.json({
        succsse: false,
        message: "User does not exists! please register first",
     });

     const checkPaswordMatch = await bcrypt.compare(
        password,
        checkUser.password
     );
     if (!checkPaswordMatch) 
        return res.json({
           success: false,
           message: "Incorrect password! Please try again",
        });
        
        const token = jwt.sign(
            {
                id: checkUser._id,
                role: checkUser.role,
                email: checkUser.email,
                userName: checkUser.userName,
            },
            "CLIENT_SECRET_KEY",
            { expiresIn: "60min" }
        );

        res.cookie("token", token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", 
            sameSite: "lax", 
        });
        
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            token,
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
                userName: checkUser.userName,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
};




//logout
const logoutUser = (req,res) =>{
    res.clearCookie('token').json({
        success : true,
        message : 'logged out successfully'
    })
}


//auth middleware

const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token) return res.status(401).json({
        success : false,
        message : 'unauthorised user!!'
    })
    try{
        const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY');
          req.user = decoded;
          next()
    }
    catch (error){
res.status(401).json({
    success : false,
    message : 'logged out successfully'
});
}   
};

module.exports = { registerUser , loginUser , logoutUser,authMiddleware};