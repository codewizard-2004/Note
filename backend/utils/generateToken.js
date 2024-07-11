import jwt from "jsonwebtoken";

const JWT_SECRET = 'PTZ8p1hNB1qv/LTEjNcVXL2hy5KV3w9gefcgnCsp7g0='

const generateTokenAndSetCookie = (userId , res)=> {
    const token = jwt.sign({userId}, JWT_SECRET ,{
        expiresIn: '15d'
    } )

    res.cookie("jwt" , token, {
        maxAge: 15*24*60*60*1000, //ms
        httpOnly: true, //prevent xss attacks
        sameSite: "strict" ,//csrf attacks cross-site request forgery attacks
        secure:"production"
    })
}

export default generateTokenAndSetCookie;