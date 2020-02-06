import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/memberReport/list',
        method:'get',
        params:params
    })
}
export function createMemberReport(data) {
    return request({
        url:'/cms/memberReport/create',
        method:'post',
        data:data
    })
}

export function deleteMemberReport(id) {
    return request({
        url:'/cms/memberReport/delete/'+id,
        method:'get',
    })
}

export function getMemberReport(id) {
    return request({
        url:'/cms/memberReport/'+id,
        method:'get',
    })
}

export function updateMemberReport(id,data) {
    return request({
        url:'/cms/memberReport/update/'+id,
        method:'post',
        data:data
    })
}

