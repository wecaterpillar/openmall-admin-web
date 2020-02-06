import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/oms/orderSetting/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/oms/orderSetting/update/'+id,
    method:'post',
    data:data
  })
}
