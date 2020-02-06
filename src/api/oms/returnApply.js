import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/oms/returnApply/list',
    method:'get',
    params:params
  })
}

export function deleteApply(params) {
  return request({
    url:'/oms/returnApply/delete',
    method:'post',
    params:params
  })
}
export function updateApplyStatus(id,data) {
  return request({
    url:'/oms/returnApply/update/status/'+id,
    method:'post',
    data:data
  })
}

export function getApplyDetail(id) {
  return request({
    url:'/oms/returnApply/'+id,
    method:'get'
  })
}
