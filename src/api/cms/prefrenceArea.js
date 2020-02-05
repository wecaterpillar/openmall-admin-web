import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/prefrenceArea/listAll',
    method:'get',
  })
}
export function createPrefrenceArea(data) {
  return request({
    url:'/api-cms/cms/CmsPrefrenceArea/create',
    method:'post',
    data:data
  })
}

export function deletePrefrenceArea(id) {
  return request({
    url:'/api-cms/cms/CmsPrefrenceArea/delete/'+id,
    method:'get',
  })
}

export function getPrefrenceArea(id) {
  return request({
    url:'/api-cms/cms/CmsPrefrenceArea/'+id,
    method:'get',
  })
}

export function updatePrefrenceArea(id,data) {
  return request({
    url:'/api-cms/cms/CmsPrefrenceArea/update/'+id,
    method:'post',
    data:data
  })
}
