const User = require('../models/User');
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');
const secret=process.env.secret;
 

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
const maxAge=1*60*60
const createToken=(id)=>
{
  return jwt.sign({id},secret,{
    expiresIn:maxAge
  })
}

module.exports.signup_get = (req, res) => {
  res.send('signup request');
};
module.exports.logout = (req, res) => {
    try{
      res.cookie('jwt', '', { expires: new Date(0), httpOnly: true }).status(200).json({ message: 'Logout successful' });
    }
    catch(err)
    {
      res.status(403)
    }
  
};

module.exports.login_get = (req, res) => {
  res.send('Login get');
};

module.exports.signup_post = async (req, res) => {
  try {
    // Change 'id' to 'userId' in the req.body
    const { firstName, lastName, email, userId, password } = req.body;
    const user = await User.create({ firstName, lastName, email, userId, password });
  
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    console.log('User Created successfully');

    res.status(201).json({ message: 'User created successfully', user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};


module.exports.login_post = async (req, res) => {
  const {email,password}=req.body;

  try
  { 
      const user=await User.login(email,password);
      const token=createToken(user._id);
      res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
      res.status(200).json({user: user._id})
  }

  catch(err)
  {  const errors=handleErrors(err)
    res.status(400).json({});
  }
};
