
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employee = require('../models/employee.js');
const candidate = require('../models/candidate.js');

// Middleware to parse JSON for specific routes
router.use(['/api/:id/addemployee', '/api/:id/updateemployee', '/api/addcandidate', '/api/candidatescheduleint'], express.json());

router.get('/api/:id/employees',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})


router.get('/api/:id/employeecount',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/leavecount',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"leaveRequest.hasRequest":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/leaveaccept_delete',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.findOneAndUpdate({hr_id:id,"leaveRequest.hasRequest":true,id:req.body.id},
      {"leaveRequest.hasRequest":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/leaves',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"leaveRequest.hasRequest":true},
      {"_id":0,"id":1,"firstName":1,"lastName":1,"leaveRequest.timePeriod":1,"leaveRequest.reason":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/reloccount',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"relocationRequest.hasRequest":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/relocaccept_delete',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.findOneAndUpdate({hr_id:id,"relocationRequest.hasRequest":true,id:req.body.id},
      {"relocationRequest.hasRequest":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/relocs',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"relocationRequest.hasRequest":true},
      {"_id":0,"id":1,"firstName":1,"lastName":1,"relocationRequest.originalLocation":1,"relocationRequest.newLocation":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})


router.get('/api/:id/complaintcount',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"complaint.hasComplaint":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/complaintaccept_delete',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.findOneAndUpdate({hr_id:id,"complaint.hasComplaint":true,id:req.body.id},
      {"complaint.hasComplaint":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/:id/complaints',async (req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.find({hr_id:id,"complaint.hasComplaint":true},
      {"_id":0,"id":1,"firstName":1,"lastName":1,"complaint.type":1,"complaint.description":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/:id/addemployee',async(req,res)=>{
  const id=req.params.id
  try {
      const newemp=await employee.create({...req.body,"hr_id":id})
      res.send('Employee successfully added')
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/:id/deleteemployee',async(req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.findOneAndDelete({hr_id:id,id:req.body.id})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/:id/updateemployee',async(req,res)=>{
  const id=req.params.id
  try {
      const employees= await employee.findOneAndUpdate({hr_id:id,id:req.body.id},req.body)
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/candidates',async (req,res)=>{
  try {
      const candidates= await candidate.find()
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/candidatecount',async (req,res)=>{
  try {
      const candidates= await candidate.countDocuments()
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/candidateintschedule',async (req,res)=>{
  try {
      const candidates= await candidate.find({hasInterview:true}).countDocuments()
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/addcandidate',async (req,res)=>{
  try {
      const candidates= await candidate.create(req.body)
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/candidatescheduleint',async (req,res)=>{
  try {
      const candidates= await candidate.findOneAndUpdate({id:req.body.id},{"hasInterview":true})
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/deletecandidate',async (req,res)=>{
  try {
      const candidates= await candidate.findOneAndDelete({id:req.body.id})
      res.json(candidates)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

// Other routes...

module.exports = router;