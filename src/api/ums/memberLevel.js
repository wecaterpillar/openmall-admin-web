import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/memberLevel/list',
    method:'get',
    params:params
  })
}
export function createMemberLevel(data) {
  return request({
    url:'/ums/memberLevel/create',
    method:'post',
    data:data
  })
}

export function deleteMemberLevel(id) {
  return request({
    url:'/ums/memberLevel/delete/'+id,
    method:'get',
  })
}

export function getMemberLevel(id) {
  return request({
    url:'/ums/memberLevel/'+id,
    method:'get',
  })
}

export function updateMemberLevel(id,data) {
  return request({
    url:'/ums/memberLevel/update/'+id,
    method:'post',
    data:data
  })
}
