
// 引入axios
import axios from "axios"

const Service =axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})

// 请求拦截
Service.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


//   响应拦截
Service.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });


//   不同的传参方式都使用data
const request = (options) =>{
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get'){
        options.params=options.data || options.params
        delete options.data
    }
    return Service(options)
}

// 导出
export default Service
