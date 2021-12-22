import { service } from '../utils/request';

export function getUser(data) { //用户登录接口
    return service({
        url: 'login',
        method: "POST",
        data
    })
}

export function getUserByName(data) { //通过姓名获取用户信息接口
    return service({
        url: 'getUserByName',
        method: "GET",
        data
    })
}