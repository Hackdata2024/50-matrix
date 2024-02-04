
// REQUIRED IMPORTS

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


//-------------------------------------------


// CREATING USER MODEL

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter your Name"],
        maxlength:[30,'Name should be less than 30 characters'],
        minlength:[3,'Name should have atleast 3 characters']
    },
    email :{
        type: String,
        required:[true,"Please enter your Email"],
        unique: true,
        
    },
    password:{
        type:String,
        required:[true,"Please enter a Password"],
        select:false //this will not show the password in our response
    },

});

// ENCRYPTING THE PASSWORD

UserSchema.pre("save" , async function(next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password , 10);
    next();
});

// JWT TOKEN 

UserSchema.methods.getJWTtoken = function (){
    return jwt.sign({id:this._id} , process.env.JWT_SECRET ,{
        expiresIn: process.env.JWT_EXPIRE,
    } );
};

// COMPARING PASSWORD 

UserSchema.methods.comparePass = async function(enteredPass){
    
    return await bcrypt.compare(enteredPass , this.password);
};

// GENERATING RESET PASSWORD TOKEN

UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + (15*60*1000);

    return resetToken;
};



module.exports = mongoose.model("User" , UserSchema);
        

        




