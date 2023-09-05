import { Router } from 'express';
const UserRouter = Router();
import "@babel/polyfill";

import { getAllUsers, getUserById , saveUser, updateUserById, deleteUserById , fileupload} from '../controllers/user.controller'
import { uploadPhoto } from '../utility/fileUpload';

UserRouter.get('/', getAllUsers);
UserRouter.get('/:id', getUserById);
UserRouter.post('/', saveUser);
UserRouter.put('/:id', updateUserById);
UserRouter.delete('/:id', deleteUserById);

UserRouter.post('/fileuploads', uploadPhoto.single("file"), fileupload);

export default UserRouter;

