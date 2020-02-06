import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/subjectComment/list',
        method:'get',
        params:params
    })
}
export function createSubjectComment(data) {
    return request({
        url:'/cms/subjectComment/create',
        method:'post',
        data:data
    })
}

export function deleteSubjectComment(id) {
    return request({
        url:'/cms/subjectComment/delete/'+id,
        method:'get',
    })
}

export function getSubjectComment(id) {
    return request({
        url:'/cms/subjectComment/'+id,
        method:'get',
    })
}

export function updateSubjectComment(id,data) {
    return request({
        url:'/cms/subjectComment/update/'+id,
        method:'post',
        data:data
    })
}

