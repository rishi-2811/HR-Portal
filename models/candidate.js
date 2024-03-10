const mongoose=require('mongoose')

const candidateschema= new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
      },
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
        required: true,
        unique: true,
      },
      mobile: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      hasInterview: {
        type: Boolean,
        required: false,
        default: false,
      }
    })

    const candidatemodel=mongoose.model('candidates',candidateschema)
    module.exports=candidatemodel