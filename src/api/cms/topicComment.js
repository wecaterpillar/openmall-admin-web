import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/topicComment/list',
        method:'get',
        params:params
    })
}
export function createTopicComment(data) {
    return request({
        url:'/cms/topicComment/create',
        method:'post',
        data:data
    })
}

export function deleteTopicComment(id) {
    return request({
        url:'/cms/topicComment/delete/'+id,
        method:'get',
    })
}

export function getTopicComment(id) {
    return request({
        url:'/cms/topicComment/'+id,
        method:'get',
    })
}

export function updateTopicComment(id,data) {
    return request({
        url:'/cms/topicComment/update/'+id,
        method:'post',
        data:data
    })
}

