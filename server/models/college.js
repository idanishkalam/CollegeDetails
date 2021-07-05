import mongoose from 'mongoose';

const CollegeSchema=mongoose.Schema({
    collegeName:String,
    type:String,
    yearEst:Number,
    location:[String],
    university:String,
    regNo:Number
});

const college=mongoose.model('college',CollegeSchema);

export default college;