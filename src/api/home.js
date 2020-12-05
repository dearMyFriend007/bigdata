import request from 'axios'

export function Home() {
  return request({
    url: '/CMS/api/queryXGZTJ.do',
    method: 'GET'
  })
}