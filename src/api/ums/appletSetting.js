import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/ums/appletSet/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/ums/appletSet/update/'+id,
    method:'post',
    data:data
  })
}
