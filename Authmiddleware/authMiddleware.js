const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
const secret=process.env.secret;
const requireAuthen=(req,res,next)=>
{
  const token=req.cookies.jwt;
  if(token)
  {
   jwt.verify(token,secret,(err,decodedToken)=>
   {
    if(err)
    {
        console.log(err.message)
        res.status(401).json({error:'Unauthorized'});
    }
    else{
        next();
    }
   })
  }
  
  else{
    res.status(400).json({error:'Login Required'})
  }

}
module.exports={requireAuthen}
