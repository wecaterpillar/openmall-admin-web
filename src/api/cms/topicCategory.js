import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/topicCategory/list',
        method:'get',
        params:params
    })
}
export function createTopicCategory(data) {
    return request({
        url:'/cms/topicCategory/create',
        method:'post',
        data:data
    })
}

export function deleteTopicCategory(id) {
    return request({
        url:'/cms/topicCategory/delete/'+id,
        method:'get',
    })
}

export function getTopicCategory(id) {
    return request({
        url:'/cms/topicCategory/'+id,
        method:'get',
    })
}

export function updateTopicCategory(id,data) {
    return request({
        url:'/cms/topicCategory/update/'+id,
        method:'post',
        data:data
    })
}

