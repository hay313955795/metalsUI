

const devApiUrl = 'http://localhost:9061';


const proApiUrl = 'http://127.0.0.1:9061';
//const proApiUrl = 'http://192.168.49.196:10003';

const nodeDevEnv = process.env.NODE_ENV == 'development' ? true : false;

export default {
    nodeDevEnv: nodeDevEnv,
    apiUrl: nodeDevEnv ? devApiUrl : proApiUrl,
    siteName: 'metal',
    minSiteMame: 'TNA',
    apiPrefix: "",
    timeout: 5000,
    cookiesExpires: 7,
    requestRetry: 4,
    requestRetryDelay: 800,
    tokenKey: 'Authorization',
    userInfoKey: 'USER_INFO',
    gitHub: 'https://github.com/hay313955795',
}

//https://github.com/xusenlin/ElementUIAdmin2
