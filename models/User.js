const mongoose=require('mongoose')
const {isEmail}=require('validator')
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please Enter an email'],
    validate: [isEmail, 'Please Enter a valid email'],
    unique: true,
  },
  userId: { // Update the property name here
    type: String,
    required: [true, 'Please enter a User Id'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum length of a password is 6 characters'],
  },
});
userSchema.pre('save',async function(next)
{
   const salt=await bcrypt.genSalt()
   this.password=await bcrypt.hash(this.password,salt)
  next()
})

// static method to login user

userSchema.statics.login=async function(email,password)
{
  const user=await this.findOne({email});
  if(user)
  {
     const auth=await  bcrypt.compare(password,user.password)
     if(auth)
     { 
      
      return user
     }
     throw Error('Incorrect Password')
  }
  throw Error('Incorrect email')
}


// userSchema.post('save',function(doc,next)
// {
//   console.log('user is created',doc)
//   next()
// })




const User=mongoose.model('user',userSchema)
module.exports=User
