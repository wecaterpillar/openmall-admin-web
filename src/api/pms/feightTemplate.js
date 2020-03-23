import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url: '/pms/feightTemplate/list',
        method: 'get',
        params: params
    })
}
export function createFeightTemplate(data) {
    return request({
        url: '/pms/feightTemplate/create',
        method: 'post',
        data: data
    })
}

export function deleteFeightTemplate(id) {
    return request({
        url: '/pms/feightTemplate/delete/' + id,
        method: 'get',
    })
}

export function getFeightTemplate(id) {
    return request({
        url: '/pms/feightTemplate/' + id,
        method: 'get',
    })
}

export function updateFeightTemplate(id, data) {
    return request({
        url: '/pms/feightTemplate/update/' + id,
        method: 'post',
        data: data
    })
}

