import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/subjectCategory/list',
        method:'get',
        params:params
    })
}
export function createSubjectCategory(data) {
    return request({
        url:'/cms/subjectCategory/create',
        method:'post',
        data:data
    })
}

export function deleteSubjectCategory(id) {
    return request({
        url:'/cms/subjectCategory/delete/'+id,
        method:'get',
    })
}

export function getSubjectCategory(id) {
    return request({
        url:'/cms/subjectCategory/'+id,
        method:'get',
    })
}

export function updateSubjectCategory(id,data) {
    return request({
        url:'/cms/subjectCategory/update/'+id,
        method:'post',
        data:data
    })
}

