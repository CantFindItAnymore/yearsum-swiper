const baseUrl = 'https://localhost:8443/'
class Http {
  request (params) {
    // params包含url(必填)，method，content，success，fail
    params.method || (params.method = 'GET')
    fetch(
      baseUrl + params.url,
      {
        headers:
        {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        method: params.method,
        body: params.content
      }
    )
      .then(res => res.json())
      // 请求成功，调用成功的回调函数
      .then(res => {
        params.success && params.success(res)
      })
      // 请求失败，调用失败的回调函数
      .catch(err => {
        params.fail && params.fail(err)
      })
  }
}

export {
  Http
}
