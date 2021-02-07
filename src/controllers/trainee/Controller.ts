import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;;
    }
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    userRepository: UserRepository = new UserRepository();
    get = async(req, res, next) => {
        try {
            console.log('Inside GET method of Trianee controller ');
            let sort: any;
            let trainee: any;
           
            if (req.query.sort === 'email') {
                sort = {email: req.query.sortedby };
            }
            else if (req.query.sort === 'name') {
                sort = {name: req.query.sortedby };
            } 
            else
            sort = { createdAt: -1 };
            let search: any;
            if (req.query.searchBy !== undefined) {
                search = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, { name: {$regex: req.query.searchBy}});
                const list = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, { email: { $regex: req.query.searchBy.toLowerCase()}});
                trainee = { ...search, ...list};   
                
            }
            else {
             trainee = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, {});
            }
            const traineeData=Object.values(trainee)
            const countTrainee = await this.userRepository.count()
            console.log('count is ' , countTrainee)
            this.userRepository.getAll()
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ 
                    status: 'OK',
                    message: 'successfully fetched Trainee', 
                    TotalCount: countTrainee, 
                    TraineeCount: traineeData.length,
                    record: traineeData
                })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = (req, res, next) => {
        try {
            console.log('Inside POST method of Trianee controller ');
            const pass1=bcrypt.hashSync(req.body.password, 10)
            this.userRepository.create({ role: req.body.role || "trainee", name: req.body.name, email: req.body.email, password: pass1})
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({
                        status: 'OK', 
                        message: 'Trainee created successfully',
                        data: res1 })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    
    update = async (req, res, next) => {
        try {
        console.log("::::::::::::INSIDE UPDATE METHOD::::::::::::");
        const { originalId, name, role, email } = req.body;
        const trainee = await this.userRepository.update({ originalId: originalId, name: name, role: role || "trainee", email: email });
        if (trainee) {
        console.log('Response of Repo is', trainee);
        res.send({
        status: "Ok",
        message: "Trainee Updated Successfully",
        data: req.body,
        });
        }
        } catch (err) {
        res.send({
        status: 404,
        message: 'Trainee Not Found for update',
        });
        }
        }
        
        delete = async (req, res, next) => {
        try {
        console.log("::::::::::::INSIDE DELETE METHOD::::::::::::");
        const { originalId } = req.query;
        console.log('req.body : ', originalId);
        const result = await this.userRepository.delete(String(originalId));
        if (result) {
        res.send({
        status: "Ok",
        code: 200,
        message: "Trainee Deleted Successfully",
        data: result,
        });
        }
        } catch (err) {
        console.log("User not found to be deleted");
        res.send({
        status: "error",
        message: 'User not found to be deleted',
        code: 404
        });
        }
    }
}
export default TraineeController.getInstance();
