const mongoose=require('mongoose')

const leaveRequestSchema = new mongoose.Schema({
    hasRequest: {
      type: Boolean,
      default: false,
    },
    timePeriod: {
      type: String,
    },
    reason: {
      type: String,
    },
  });
  
  const relocationRequestSchema = new mongoose.Schema({
    hasRequest: {
      type: Boolean,
      default: false,
    },
    originalLocation: {
      type: String,
    },
    newLocation: {
      type: String,
    },
  });
  
  const complaintSchema = new mongoose.Schema({
    hasComplaint: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
  });
  

const employeeschema= new mongoose.Schema({
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
      password: {
        type: String,
        required: false,
        select: false,
      },
      role: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      hr_id: {
        type: String,
        required: false,
      },
      leaveRequest: leaveRequestSchema,
      relocationRequest: relocationRequestSchema,
      complaint: complaintSchema,
    })

   
      const employeemodel=mongoose.model('employees',employeeschema)
      module.exports=employeemodel