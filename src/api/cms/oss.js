import request from '@/utils/request'
export function policy() {
  return request({
    url:'/cms/aliyun/oss/policy',
    method:'get',
  })
}
