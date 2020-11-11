import * as mangoose from 'mongoose'
import VersionableSchema from '../versionable/VersionableSchema'

export default interface IUserModel extends mangoose.Document {

    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    deletedAt: Date;
    originalId: string;
}
