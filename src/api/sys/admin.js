import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sys/user/list',
    method:'get',
    params:params
  })
}
export function userRoles(params,adminId) {
  return request({
    url:'/sys/user/role/'+adminId,
    method:'get',
    params:params
  })
}
export function userRoleCheck(params) {
  return request({
    url:'/sys/user/userRoleCheck',
    method:'get',
    params:params
  })
}
export function createAdmin(data) {
  return request({
    url:'/sys/user/register',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/sys/user/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/sys/user/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteAdmin(id) {
  return request({
    url:'/sys/user/delete/'+id,
    method:'get',
  })
}

export function getAdmin(id) {
  return request({
    url:'/sys/user/'+id,
    method:'get',
  })
}

export function updateAdmin(id,data) {
  return request({
    url:'/sys/user/update/'+id,
    method:'post',
    data:data
  })
}

