import axios from '@/libs/api.request'

export const getYoungonList = (params) => {
  return axios.request({
    url: 'youngon_list',
    params,
    method: 'get'
  })
}
export const getYoungonAllList = (params) => {
  return axios.request({
    url: 'youngon_list_all',
    params,
    method: 'get'
  })
}
export const userRecordList = (params) => {
  return axios.request({
    url: 'user-record-list',
    params,
    method: 'get'
  })
}
export const isYoungon = (params) => {
  return axios.request({
    url: 'is_youngon',
    params,
    method: 'get'
  })
}

export const addYoungon = (data) => {
  return axios.request({
    url: 'add_youngon',
    data,
    method: 'post'
  })
}

export const delectYoungon = (_id) => {
  return axios.request({
    url: 'delect_youngon',
    params: {_id},
    method: 'get'
  })
}

export const updateYoungon = (data) => {
  return axios.request({
    url: 'update_youngon',
    data,
    method: 'post'
  })
}

export const delectUser = (_id) => {
  return axios.request({
    url: 'delect_user',
    params: {_id},
    method: 'get'
  })
}

export const getUserList = (params) => {
  return axios.request({
    url: 'userlist',
    params,
    method: 'get'
  })
}

export const getJokeList = (params) => {
  return axios.request({
    url: 'joke-list',
    params,
    method: 'get'
  })
}

export const delJoke = (params) => {
  return axios.request({
    url: 'delect-joke',
    params,
    method: 'get'
  })
}
