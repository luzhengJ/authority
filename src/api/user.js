import request from "../utils/request";

// 获取登录接口
const login = (data) => {
  return request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
};
// 获取验证码
// const code = () => {
//   return request({
//     url: "/api/sysUser/image",
//     method:'POST',
//     responseType: 'blob'
//   });
// };

// 获取用户信息
const userInfo = () => {
  return request({
    url: "/api/sysUser/getInfo",
    method: "GET",
  });
};

// 获取验证码
const code =()=>{
    return request({
        url:"/api/sysUser/image",
        method:"POST",
        responseType: 'blob'
    })
}

// 导出
export default {
  login,
  userInfo,
  code
};
