import multer from 'multer';
import "@babel/polyfill";

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "./uploads/");
    },
    filename:function(req, file, cb){
        let datetime = Date.now();
        cb(null, "node-"+datetime+"."+file.originalname.split(".")[file.originalname.split('.').length-1]);
    }
})

export const uploadPhoto = multer({storage:storage});