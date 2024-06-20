import axios from 'axios'

// 设置基础URL
// const BASE_URL = 'http://posehub.lefthand.top/api';
const BASE_URL = '/api';

// 创建axios实例
const request = axios.create({
    baseURL: BASE_URL, // 设置基础URL
    timeout: 5000, // 设置请求超时长，单位ms
    headers: { // 默认请求头信息
        'Content-Type': 'application/json',
        // 其他头信息
    },
});

// 请求拦截器
request.interceptors.request.use(config => {
    // 在发送请求前的操作
    // 例如，添加Token
    if (localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    return config
}, error => Promise.reject(error));

// 响应拦截器
request.interceptors.response.use(response => {
    // 成功处理响应
    return response.data; // 直接返回data部分
}, error => {
    // 错误处理
    if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
        console.error('No response received.');
    } else {
        console.error('Error setting up the request', error.message);
    }
    return Promise.reject(error);
});

export default request;