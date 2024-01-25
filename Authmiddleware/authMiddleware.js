const jwt=require('jsonwebtoken')

const requireAuthen=(req,res,next)=>
{
  const token=req.cookies.jwt;
  if(token)
  {
   jwt.verify(token,'vamshidhar',(err,decodedToken)=>
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