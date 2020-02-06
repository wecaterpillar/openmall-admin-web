import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/ums/memberBlanceLog/list',
        method:'get',
        params:params
    })
}
export function createMemberBlanceLog(data) {
    return request({
        url:'/ums/memberBlanceLog/create',
        method:'post',
        data:data
    })
}

export function deleteMemberBlanceLog(id) {
    return request({
        url:'/ums/memberBlanceLog/delete/'+id,
        method:'get',
    })
}

export function getMemberBlanceLog(id) {
    return request({
        url:'/ums/memberBlanceLog/'+id,
        method:'get',
    })
}

export function updateMemberBlanceLog(id,data) {
    return request({
        url:'/ums/memberBlanceLog/update/'+id,
        method:'post',
        data:data
    })
}

