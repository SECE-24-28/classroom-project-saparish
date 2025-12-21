
const Student=require("../models/Student");
exports.createStudent=async(req,res)=>{
    try{
        const totalCount=await Student.countDocuments();
        req.body['rollno']=1+totalCount;
        const student=await Student.create(req.body);
        res.json(student);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.getAllStudents=async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.getStudentById=async(req,res)=>{
    try{
        const studentbyOne = await Student.findOne({ rollno: req.params.id });
        res.json(studentbyOne);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.deleteStudent=async(req,res)=>{
    try{
        const studentdel = await Student.findOneAndDelete({ rollno: req.params.id });
        if(!studentdel) return res.status(404).json({message:"Student not found"});
        res.json({message:"Student deleted succesfully"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.updateStudent=async(req,res)=>{
    try{
        const studentup = await Student.findOneAndUpdate({ rollno: req.params.id },req.body,{new:true});
        if(!studentup) return res.status(404).json({message:"Student not found"});
        res.json(studentup);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};