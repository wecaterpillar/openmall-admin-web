import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sys/role/list',
    method:'get',
    params:params
  })
}
export function rolePermission(id) {
  return request({
    url:'/sys/role/permission/'+id,
    method:'get'
  })
}
export function createRole(data) {
  return request({
    url:'/sys/role/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/sys/role/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/sys/role/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteRole(id) {
  return request({
    url:'/sys/role/delete/'+id,
    method:'get',
  })
}

export function getRole(id) {
  return request({
    url:'/sys/role/'+id,
    method:'get',
  })
}

export function updateRole(id,data) {
  return request({
    url:'/sys/role/update/'+id,
    method:'post',
    data:data
  })
}

