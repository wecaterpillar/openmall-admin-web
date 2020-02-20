import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/cms/prefrenceArea/list',
    method:'get',
  })
}
export function createPrefrenceArea(data) {
  return request({
    url:'/cms/prefrenceArea/create',
    method:'post',
    data:data
  })
}

export function deletePrefrenceArea(id) {
  return request({
    url:'/cms/prefrenceArea/delete/'+id,
    method:'get',
  })
}

export function getPrefrenceArea(id) {
  return request({
    url:'/cms/prefrenceArea/'+id,
    method:'get',
  })
}

export function updatePrefrenceArea(id,data) {
  return request({
    url:'/cms/prefrenceArea/update/'+id,
    method:'post',
    data:data
  })
}
