
// 定义token
const TOKEN_KEY = "token"
// 定义用户信息
const USER_INFO_KEY ="userInfo"

// 将token存在本地
const setToken =(token)=>{
    localStorage.setItem(TOKEN_KEY,token)
}

// 获取token
const getToken =(token)=>{
    return localStorage.setItem(TOKEN_KEY)
}

// 设置用户信息
const setUserInfo =(userInfo)=>{
    localStorage.setItem(USER_INFO_KEY,JSON.stringify(userInfo))
}

// 获取用户信息
const getUserInfo =()=>{
    return JSON.parse(localStorage.getItem(USER_INFO_KEY) || "{}")
}

// 删除token以及用户信息
const removeTokenAndUserInfo =()=>{
    // 删除token
    localStorage.removeItem(TOKEN_KEY)
    // 删除用户信息
    localStorage.removeItem(USER_INFO_KEY)
}