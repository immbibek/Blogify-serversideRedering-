const {createHmac,randomBytes}=require('crypto');

const {Schema,model}=require('mongoose')

const userSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salt:{  //  to hash the pasword
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    profileImageURL:{
        type:String,
        default:'/images/avatar.jpeg'
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:"USER",
    }
},{timestamps:true});

userSchema.pre("save",function (next) {
    const user=this; // it pointingg to the current user

    if(!user.isModified('password')) return next();

    const salt=randomBytes(16).toString('hex'); // convert to hex
    const hashedPassword=createHmac('sha256',salt).update(user.password).digest('hex');

    user.salt=salt;
    user.password=hashedPassword; // it hashed the password provided by the user

    next(); // moved to the next middleware or save opration
})
userSchema.static('matchPassword',async function(email,password){
    const user=await this.findOne({email});
    if(!user)  throw new Error('User not found1');
    
    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedHash=createHmac('sha256',salt).update(password).digest('hex');

    if(hashedPassword !==userProvidedHash)throw new Error('Incorrect password!')

    return user;
})

const User=model('user',userSchema);

module.exports=User;