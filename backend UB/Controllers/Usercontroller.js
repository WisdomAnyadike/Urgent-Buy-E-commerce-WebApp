const userModel = require('../Models/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SignUp = async (req, res) => {
    const { FullName, Email, Password } = req.body
    if (!FullName || !Email || !Password) {
        res.status(400).send({ message: 'All fields are mandatory' })
    }
    try {
        const validateEmail = await userModel.findOne({ Email })
        if (validateEmail) {
            res.status(400).send({ message: 'Email is already in use' })
        } else {
            const hashedPassword = await bcrypt.hash(Password, 10)
            const createUser = await userModel.create({
                FullName,
                Email,
                Password: hashedPassword
            })
            if (createUser) {
                res.status(200).send({ message: `Account successfully created for ${FullName}` , status: "success"  } )

            } else {
                res.status(400).send({ message: `Couldnt create account for ${FullName}` , status: 'false' }    )
            }
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' })
        console.log('Network error while posting to database' + error);

    }
}


const logIn = async(req, res)=> {
    const {Email , Password} = req.body
    if (!Email || !Password) {
        res.status(400).send({message:'All fields are mandatory'})    
    }
    try {
        const findUser = await userModel.findOne({Email})
        if (!findUser) {
          res.status(400).send({message:"Account doesnt exist , try creating an account" , status:"notcreated"}) 
        }else{
            const comparePassword = await bcrypt.compare(Password , findUser.Password)
            const secretKey = process.env.Jwt_SECRET
            const genToken = jwt.sign({
                user:{
                    FullName:findUser.FullName,
                    Email:findUser.Email,
                }
            } , secretKey , {expiresIn:'1d'})

            if (comparePassword) {
                res.status(200).send({message:`Login Successful \n Welcome ${findUser.FullName}` , status:"success" , genToken })
                
            }else{
                res.status(400).send({message:`Incorrect password` , status:"false"}) 
            }
        }
        
    } catch (error) {
        res.status(500).send({message:`Internal server error` , status:"false"}) 
        console.log('Network error while logging in' , error);
    }
}


module.exports = {SignUp , logIn}