import request from '@/utils/request'
export function fetchList(pid,params) {
  return request({
    url:'/pms/sku/'+pid,
    method:'get',
    params:params
  })
}

export function update(pid,data) {
  return request({
    url:'/pms/sku/update/'+pid,
    method:'post',
    data:data
  })
}
