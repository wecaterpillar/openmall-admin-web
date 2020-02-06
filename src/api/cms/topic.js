import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/topic/list',
        method:'get',
        params:params
    })
}
export function createTopic(data) {
    return request({
        url:'/cms/topic/create',
        method:'post',
        data:data
    })
}

export function deleteTopic(id) {
    return request({
        url:'/cms/topic/delete/'+id,
        method:'get',
    })
}

export function getTopic(id) {
    return request({
        url:'/cms/topic/'+id,
        method:'get',
    })
}

export function updateTopic(id,data) {
    return request({
        url:'/cms/topic/update/'+id,
        method:'post',
        data:data
    })
}
export function updateVerifyStatus(params) {
  return request({
    url:'/cms/topic/update/verifyStatus',
    method:'post',
    params:params
  })
}
export function fetchCmsTopicMember(id) {
  return request({
    url:'/cms/topic/fetchCmsTopicMember/'+id,
    method:'get',
  })
}
