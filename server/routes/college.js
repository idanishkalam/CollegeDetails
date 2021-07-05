import express from'express';
import { getColleges,createCollege,deleteCollege } from '../controllers/college.js';
import college from '../models/college.js';

const router=express.Router();

router.get('/',getColleges);
router.post('/',createCollege);
router.delete('/:id',deleteCollege);

export default router;