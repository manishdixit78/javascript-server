const config = {
    create: {
        email: {
            required: true,
            string: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: 'Email is required',
        },

        name: {
            required: true,
            regex: /^[a-zA-Z0-9\-]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        originalId: {
            required: true,
            errorMessage: 'Id is required',
            in: ['query']
        }
    },

    get: {
        // skip: {
        //     required: false,
        //     default: 0,
        //     number: true,
        //     in: ['query'],
        //     errorMessage: 'Skip is invalid',
        // },

        // limit: {
        //     required: false,
        //     default: 10,
        //     number: true,
        //     in: ['query'],
        //     errorMessage: 'Limit is invalid',
        // }
    },
    update: {
        originalId: {
            required: true, string: true,
            in: ['body']
        },
    }
}


export default config;