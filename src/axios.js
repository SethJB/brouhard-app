import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://sspcodingexercise.s3-website-us-west-2.amazonaws.com/',    
});

instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
//instance.defaults.headers.commom['Access-Control-Allow-Headers'] = 'Content-Type';
export default instance;