import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/ums/integrationConsumeSetting/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/ums/integrationConsumeSetting/update/'+id,
    method:'post',
    data:data
  })
}
