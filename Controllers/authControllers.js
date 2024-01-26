const User = require('../models/User');
const jwt=require('jsonwebtoken')
 

// Handle Error
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { lastName:'',firstName:'',email: '',id:'', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }
  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}


const maxAge=3*24*60*60
const createToken=(id)=>
{
  return jwt.sign({id},'vamshidhar',{
    expiresIn:maxAge
  })
}

module.exports.signup_get = (req, res) => {
  res.send('signup request');
};
module.exports.logout = (req, res) => {
  res.cookie('jwt','',{maxAge:1})
  res.status(403).json({err:'Logout'})
};

module.exports.login_get = (req, res) => {
  res.send('Login get');
};

module.exports.signup_post = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token=createToken(user._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    console.log('User Created successfully');

    // Optionally, you can send a response back to the client indicating success.
    res.status(201).json({ message: 'User created successfully', user:user._id });
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({ errors }); // Returning the response here
  }
};

module.exports.login_post = async (req, res) => {
  const {email,password}=req.body;
  try
  { 
      const user=await User.login(email,password);
      const token=createToken(user._id)
      res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
      res.status(200).json({user: user._id})


  }
  catch(err)
  {  const errors=handleErrors(err)
    res.status(400).json({});
  }


};
