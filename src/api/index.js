import { service } from '../utils/request';

export function loginTwt(data) {
    return service({
        url: 'login',
        method: "POST",
        data
    })
}

export function getConfession(data) {
    return service({
        url: 'getConfession',
        method: "GET",
        data
    })
}

export function getUserByName(data) {
    return service({
        url: 'getUserByName',
        method: "GET",
        data
    })
}

export function getUserByUserNumber(data) {
    return service({
        url: 'getUserByUserNumber',
        method: "GET",
        data
    })
}

export function addConfession(data) {
    return service({
        url: 'addConfession',
        method: "POST",
        data
    })
}

export function getConfessionByPursuit(data) {
    return service({
        url: 'getConfessionByPursuit',
        method: "GET",
        data
    })
}

export function getUserByToken(data) {
    return service({
        url: 'getUserByToken',
        method: "GET",
        data
    })
}