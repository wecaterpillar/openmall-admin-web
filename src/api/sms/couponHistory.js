import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/couponHistory/list',
    method:'get',
    params:params
  })
}
