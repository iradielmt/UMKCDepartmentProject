import axios from 'axios';

const url = 'http://localhost:3000/api/';

export default {
    getCourseNum(credentials) {
        return axios.get(url + 'courseNum/', credentials).then(response => response.data);
    },
    applications(credentials) {
        return axios.get(url + 'applications/', credentials).then(response => response.data);
    }
};