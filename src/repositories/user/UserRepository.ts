import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersioningRepository';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }
    public find(query, projection?: any, options?: any): any {
        return userModel.find(query, projection, options)
    }
    public create(data: any): Promise<IUserModel> {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            originalId: id,
            ...data,
        });
        return model.save();
    }
   
    public update(data: any): Promise<IUserModel> {
    console.log('UserRepository:: update', data);
    return super.update(data);
    }
    
    public deleteData(originalId: any) {
        return super.delete(originalId);
        }
    public count() {
        return userModel.countDocuments();
    }
    public list1( userRole,sort, skip, limit, searchBy){
        return super.list( userRole, sort, skip, limit, searchBy);
     }

}

