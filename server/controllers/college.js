import CollegeData from "../models/college.js"

export const getColleges=async (req,res)=>{
    try{
        const CollegeList=await  CollegeData.find();
        res.status(200).json(CollegeList);
    }
    catch(error){
       res.status(404).json({message:error.message})
    }
}

export const createCollege=async (req,res)=>{
    const Collegebody=req.body;

    const newCollege=new CollegeData(Collegebody);
    try{
        await newCollege.save();
        res.status(201).json(newCollege);
    }catch(error){
        res.status(404).json({message:error.message})
     }
}

export const deleteCollege=async (req,res)=>{
   const id=req.params.id;
    try{
       await CollegeData.findByIdAndRemove(id).exec();
       res.send('Removed Data!');
    }catch(error){
        console.log(error);
     }
}