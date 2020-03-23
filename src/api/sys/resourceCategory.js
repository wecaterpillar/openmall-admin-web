import request from '@/utils/request'

export function listAllCate() {
  return request({
    url: '/sys/resourceCategory/listAll',
    method: 'get'
  })
}

export function createResourceCategory(data) {
  return request({
    url: '/sys/resourceCategory/create',
    method: 'post',
    data: data
  })
}

export function updateResourceCategory(id, data) {
  return request({
    url: '/sys/resourceCategory/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResourceCategory(id) {
  return request({
    url: '/sys/resourceCategory/delete/' + id,
    method: 'post'
  })
}
