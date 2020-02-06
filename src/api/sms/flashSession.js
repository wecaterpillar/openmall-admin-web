import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url:'/sms/flashSession/list',
    method: 'get',
    params: params
  })
}

export function fetchSelectList(params) {
  return request({
    url:'/sms/flashSession/selectList',
    method: 'get',
    params: params
  })
}

export function updateStatus(id, params) {
  return request({
    url:'/sms/flashSession/update/status/' + id,
    method: 'post',
    params: params
  })
}

export function deleteSession(id) {
  return request({
    url:'/sms/flashSession/delete/' + id,
    method: 'post'
  })
}

export function createSession(data) {
  return request({
    url:'/sms/flashSession/create',
    method: 'post',
    data: data
  })
}

export function updateSession(id, data) {
  return request({
    url:'/sms/flashSession/update/' + id,
    method: 'post',
    data: data
  })
}
