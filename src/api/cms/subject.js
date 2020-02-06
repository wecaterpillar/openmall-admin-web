import request from '@/utils/request'
export function fetchListAll() {
  return request({
    url:'/cms/subject/listAll',
    method:'get',
  })
}

export function fetchList(params) {
  return request({
    url:'/cms/subject/list',
    method:'get',
    params:params
  })
}

export function createSubject(data) {
  return request({
    url:'/cms/subject/create',
    method:'post',
    data:data
  })
}

export function deleteSubject(id) {
  return request({
    url:'/cms/subject/delete/'+id,
    method:'get',
  })
}

export function getSubject(id) {
  return request({
    url:'/cms/subject/'+id,
    method:'get',
  })
}

export function updateSubject(id,data) {
  return request({
    url:'/cms/subject/update/'+id,
    method:'post',
    data:data
  })
}

export function updateShowStatus(params) {
  return request({
    url:'/cms/subject/update/updateShowStatus',
    method:'post',
    params:params
  })
}
export function updateRecommendStatus(params) {
  return request({
    url:'/cms/subject/update/updateRecommendStatus',
    method:'post',
    params:params
  })
}
