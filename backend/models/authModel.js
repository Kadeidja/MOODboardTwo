//1
const mongooseModule = require('mongoose')

const authUserSchema = new mongooseModule.Schema({
    uname:{
        type: String,
        required: true,
    },
    uemail:{
        type: String,
        required: true,
    },
    upswd:{
        type: String,
        required: true,
    },
    salt: String,
});

/*

//Creating a "virtua" field that will take in password and encrypt it
userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv4();
        this.encrypted_password = this.securedPassword(password);
    })
    .get(function(){
        return this._password
    })
//Defining some methods associated with user schema
userSchema.method({
  
  //To check if the password is correct 
    authenticate: function(plainpassword){
        return this.securedPassword(plainpassword) === this.encrypted_password
    },
  
  //To encrpty the password 
    securedPassword: function(plainpassword){
        if(!plainpassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
                    .update(plainpassword)
                    .digest('hex')
        }
        catch(err){
            return "Error in hashing the password";
        }
    },
})

*/


module.exports = mongoose.model("User", authUserSchema);