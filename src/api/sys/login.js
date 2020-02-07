import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/sys/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/sys/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/sys/admin/logout',
    method: 'post'
  })
}
