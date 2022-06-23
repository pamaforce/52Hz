import { service } from '../utils/request';

/* 新接口 */
export function loginToken_new(token) {
    return service({
        url: `token/login?token=${token}`,
        method: "POST",
    })
}

export function getMyInfo_new() {
    return service({
        url: 'whoAmI',
        method: "GET",
    })
}

export function getMyConfession_new() {
    return service({
        url: 'myConfession',
        method: "GET",
    })
}

export function getMyConfessionStatue_new() {
    return service({
        url: 'checkState',
        method: "GET",
    })
}

export function addConfession_new(data) {
    return service({
        url: 'addConfession',
        method: "POST",
        data
    })
}

export function getMyNickname_new() {
    return service({
        url: 'getMyNickname',
        method: "GET",
    })
}

export function setMyNickname_new(data) {
    return service({
        url: 'setMyNickname',
        method: "POST",
        data
    })
}

export function addFriendshipConfession_new(data) {
    return service({
        url: 'addFriendshipConfession',
        method: "POST",
        data
    })
}

export function getNewFMsg_new() {
    return service({
        url: 'getNewFMsg',
        method: "GET",
    })
}

export function getMyMsg_new() {
    return service({
        url: 'get/my/msg',
        method: "GET",
    })
}

export function getMyBlackList_new() {
    return service({
        url: 'getMyBlackList',
        method: "GET",
    })
}

export function getNickName_new(data) {
    return service({
        url: 'getNickName',
        method: "POST",
        data
    })
}

export function deleteBlackList_new(data) {
    return service({
        url: 'deleteBlackList',
        method: "POST",
        data
    })
}

export function addBlackList_new(data) {
    return service({
        url: 'addBlackList',
        method: "POST",
        data
    })
}

export function updateConfession_new(data) {
    return service({
        url: 'updateConfession',
        method: "POST",
        data
    })
}

export function sendMsg_new(data) {
    return service({
        url: 'send/msg',
        method: "POST",
        data
    })
}

export function deleteConfession_new(data) {
    return service({
        url: 'deleteConfession',
        method: "POST",
        data
    })
}

export function setReadFConfession_new(data) {
    return service({
        url: 'setReadFConfession',
        method: "POST",
        data
    })
}

export function getMySentFConfession_new() {
    return service({
        url: 'getMySentFConfession',
        method: "GET"
    })
}

export function getMyRecvFConfession_new() {
    return service({
        url: 'getMyRecvFConfession',
        method: "GET"
    })
}

export function loginTwt(data) {
    return service({
        url: 'login',
        method: "POST",
        data
    })
}