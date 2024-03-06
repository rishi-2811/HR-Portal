
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employee = require('../models/employee.js');
const candidate = require('../models/candidate.js');

// Middleware to parse JSON for specific routes
router.use(['/api/:id/addemployee', '/api/:id/updateemployee', '/api/addcandidate', '/api/candidatescheduleint'], express.json());

router.get('/api/employees',async (req,res)=>{
  try {
      const employees= await employee.find()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})


router.get('/api/employeecount',async (req,res)=>{
  try {
      const employees= await employee.find().countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/leavecount',async (req,res)=>{
  try {
      const employees= await employee.find({"leaveRequest.hasRequest":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/leaveaccept_delete',async (req,res)=>{
  try {
      const employees= await employee.findOneAndUpdate({"leaveRequest.hasRequest":true,id:req.body.id},
      {"leaveRequest.hasRequest":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/leaves',async (req,res)=>{
  try {
      const employees= await employee.find({"leaveRequest.hasRequest":true},
      {"_id":1,"id":1,"firstName":1,"lastName":1,"leaveRequest.timePeriod":1,"leaveRequest.reason":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/reloccount',async (req,res)=>{
  try {
      const employees= await employee.find({"relocationRequest.hasRequest":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/relocaccept_delete',async (req,res)=>{
  try {
      const employees= await employee.findOneAndUpdate({"relocationRequest.hasRequest":true,id:req.body.id},
      {"relocationRequest.hasRequest":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/relocs',async (req,res)=>{
  try {
      const employees= await employee.find({"relocationRequest.hasRequest":true},
      {"_id":1,"id":1,"firstName":1,"lastName":1,"email":1,"relocationRequest.originalLocation":1,"relocationRequest.newLocation":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})


router.get('/api/complaintcount',async (req,res)=>{
  try {
      const employees= await employee.find({"complaint.hasComplaint":true}).countDocuments()
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/complaintaccept_delete',async (req,res)=>{
  try {
      const employees= await employee.findOneAndUpdate({"complaint.hasComplaint":true,id:req.body.id},
      {"complaint.hasComplaint":false})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.get('/api/complaints',async (req,res)=>{
  try {
      const employees= await employee.find({"complaint.hasComplaint":true},
      {"_id":1,"id":1,"firstName":1,"lastName":1,"complaint.type":1,"complaint.description":1})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/addemployee',async(req,res)=>{
  try {
      const newemp=await employee.create({...req.body})
      res.send('Employee successfully added')
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/deleteemployee',async(req,res)=>{
  try {
      const employees= await employee.findOneAndDelete({id:req.body.id})
      res.json(employees)
  } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server error')
  }
})

router.post('/api/updateemployee',async(req,res)=>{
  try {
      const employees= await employee.findOneAndUpdate({id:req.body.id},req.body)
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

router.get('/api/candidateintscheduled',async (req,res)=>{
  try {
      const candidates= await candidate.find({hasInterview:true})
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