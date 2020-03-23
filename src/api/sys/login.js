import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/sys/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/sys/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/sys/user/logout',
    method: 'post'
  })
}

export function fetchList(params) {
  return request({
    url: '/sys/user/list',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/sys/user/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/sys/user/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/sys/user/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/sys/user/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/sys/user/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/sys/user/role/update',
    method: 'post',
    data: data
  })
}
