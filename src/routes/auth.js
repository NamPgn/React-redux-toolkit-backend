import express from "express";
import { edit, getAlluser, remove, signup, singin, getAuth, editImage } from "../controller/auth";
import { upload } from "../services/upload";

const router = express.Router();

router.get('/user', getAlluser)
router.get('/user/:id', getAuth)
router.post('/signup', upload, signup);
router.post('/signin', singin);
router.delete('/removeUser/:id', remove);
router.put('/user/:id', upload, edit);
router.get('/user/:id', getAuth)
router.put('/user/image/:id', upload, editImage)
export default router;