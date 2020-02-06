import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/helpCategory/list',
        method:'get',
        params:params
    })
}
export function createHelpCategory(data) {
    return request({
        url:'/cms/helpCategory/create',
        method:'post',
        data:data
    })
}

export function deleteHelpCategory(id) {
    return request({
        url:'/cms/helpCategory/delete/'+id,
        method:'get',
    })
}

export function getHelpCategory(id) {
    return request({
        url:'/cms/helpCategory/'+id,
        method:'get',
    })
}

export function updateHelpCategory(id,data) {
    return request({
        url:'/cms/helpCategory/update/'+id,
        method:'post',
        data:data
    })
}

