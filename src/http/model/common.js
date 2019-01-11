import {
  Http
} from '../http.js'

import store from '@/store'

class CommonModel extends Http {
  // 注意這裡的方法都要用箭頭函數，否則里面的this將指向调用该方法的对象
  getConfig = (url, callback) => {
    this.request({
      url: 'jsapiconfig',
      method: 'POST',
      content: `data={url:'${url}'}`,
      success: res => {
        callback(res)
      }
      // fail: err => {}
    })
  }
  getData = (tell, callback1, callback2, callback3) => {
    const cache = store.state.data.PHONE
    cache === tell || this.request({
      url: 'customer/reports/driverReport/2018',
      method: 'POST',
      content: `data={phone:'${tell}'}`,
      success: res => {
        if (res.data) {
          store.commit('changeData', res.data[0])
          callback1 && callback1(res)
        } else {
          callback2 && callback2(res)
        }
      },
      fail: err => {
        callback3 && callback3(err)
      }
    })
  }
}

export {
  CommonModel
}
