import request from '@/utils/request'

export function findPermissions(params) {
  return request({
    url:'/sys/permission/findPermissions',
    method:'get',
    params:params
  })
}
export function treeList(params) {
  return request({
    url:'/sys/permission/treeList',
    method:'get',
    params:params
  })
}
export function fetchList(params) {
  return request({
    url:'/sys/permission/list',
    method:'get',
    params:params
  })
}
export function createPermission(data) {
  return request({
    url:'/sys/permission/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/sys/permission/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/sys/permission/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deletePermission(id) {
  return request({
    url:'/sys/permission/delete/'+id,
    method:'get',
  })
}

export function getPermission(id) {
  return request({
    url:'/sys/permission/'+id,
    method:'get',
  })
}

export function updatePermission(id,data) {
  return request({
    url:'/sys/permission/update/'+id,
    method:'post',
    data:data
  })
}

