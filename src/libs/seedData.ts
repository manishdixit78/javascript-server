import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    
    userRepository.count()
    
        .then(res => {
            console.log('The Count is: ', res );
            if (res === 0) {
                console.log('data seeding in progress');
               
                userRepository.create({
                    name: 'Head Trainer',
                    role: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    password: 1234
                });
                userRepository.create({
                    name: 'Trainee',
                    role: 'trainee',
                    email: 'trainee@successive.tech',
                    password: 123
                });
            }
             else{
            console.log('data is already seeded');    
                }
        })
        .catch(err => console.log(err));
}
// 