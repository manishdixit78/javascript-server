
// all the constant values in above file.
// import{Ipermission} from './interfaces';
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

export { permissions };
