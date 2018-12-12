import {create} from 'axios';

const api = create({
    baseURL: 'http://rocketseat-node.herokuapp.com/api/'
});

export default api;