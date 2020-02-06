import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/sys/webLog/list',
        method:'get',
        params:params
    })
}
export function createWebLog(data) {
    return request({
        url:'/sys/webLog/create',
        method:'post',
        data:data
    })
}

export function deleteWebLog(id) {
    return request({
        url:'/sys/webLog/delete/'+id,
        method:'get',
    })
}

export function getWebLog(id) {
    return request({
        url:'/sys/webLog/'+id,
        method:'get',
    })
}

export function updateWebLog(id,data) {
    return request({
        url:'/sys/webLog/update/'+id,
        method:'post',
        data:data
    })
}

