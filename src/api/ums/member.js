import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/ums/member/list',
    method:'get',
    params:params
  })
}
export function createMember(data) {
  return request({
    url:'/ums/member/create',
    method:'post',
    data:data
  })
}
export function updateUseStatus(data) {
  return request({
    url:'/ums/member/updateStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/ums/member/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteMember(id) {
  return request({
    url:'/ums/member/delete/'+id,
    method:'get',
  })
}

export function getMember(id) {
  return request({
    url:'/ums/member/'+id,
    method:'get',
  })
}

export function updateMember(id,data) {
  return request({
    url:'/ums/member/update',
    method:'post',
    data:data
  })
}

export function detailMember(id) {
  return request({
    url:'/ums/member/getMemberDetail/'+id,
    method:'get',
  })
}


export function fetchBlanceList(id) {
  return request({
    url:'/ums/member/fetchBlanceList/'+id,
    method:'get',
  })
}
