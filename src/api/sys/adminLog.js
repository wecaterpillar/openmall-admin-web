import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/sys/adminLog/list',
        method:'get',
        params:params
    })
}
export function createAdminLog(data) {
    return request({
        url:'/sys/adminLog/create',
        method:'post',
        data:data
    })
}

export function deleteAdminLog(id) {
    return request({
        url:'/sys/adminLog/delete/'+id,
        method:'get',
    })
}

export function getAdminLog(id) {
    return request({
        url:'/sys/adminLog/'+id,
        method:'get',
    })
}

export function updateAdminLog(id,data) {
    return request({
        url:'/sys/adminLog/update/'+id,
        method:'post',
        data:data
    })
}

