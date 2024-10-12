const mongoose=require('mongoose')

const interviewSchema = new mongoose.Schema({
  hasInterview: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
});


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
      interview: interviewSchema
    })

    

    const candidatemodel=mongoose.model('candidates',candidateschema)
    module.exports=candidatemodel