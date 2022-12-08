/**
 * 路由导航封装
 * push // 前进
 * back // 后退
 * redirect // 重定向
 * relaunch // 打开新页面并关闭所有其它的页面
 * tab // tab跳转
 * 统一传参的方式，统一回调
 */

//  处理url和参数
const create_url = function (url, params) {
  let paramsStr = "";
  if (!url) return;
  if (params) {
    paramsStr = "?";
    for (let k in params) {
      paramsStr += `${k}=${params[k]}&`
    }
    paramsStr = paramsStr.slice(0, paramsStr.length - 1)
  }
  return `${url}${paramsStr}`;
}

// 处理回调
const fn = function (success, fail, complete) {
  const navObj = {
    success() {
      console.log('成功');
      success && typeof success === 'function' && success();
    },
    fail() {
      fail && typeof fail === 'function' && fail();
    },
    complete() {
      console.log('跳转完成');
      complete && typeof complete === 'function' && complete();
    }
  }
  return navObj;
}

// 封装navigateTo 方法
const Push = function (url, params, success, fail, complete) {
  const newUrl = create_url(url, params);
  const callbackFn = fn(success,fail,complete);
  wx.navigateTo({
    url: newUrl,
    ...callbackFn
  })
}

// 封装navigateBack 方法
const Back = function (num, success, fail, complete) {
  const callbackFn = fn(success,fail,complete);
  wx.navigateBack({
    delta: num?num:1,
    ...callbackFn
  })
}

// 封装redirect 方法
const Redirect = function (url, params, success, fail, complete) {
  const newUrl = create_url(url, params);
  const callbackFn = fn(success,fail,complete);
  wx.redirectTo({
    url: newUrl,
    ...callbackFn
  })
}


// 封装relaunch 方法
const Relaunch = function (url, params, success, fail, complete) {
  const newUrl = create_url(url, params);
  const callbackFn = fn(success,fail,complete);
  wx.reLaunch({
    url: newUrl,
    ...callbackFn
  })
}


// 封装relaunch 方法
const Tab = function (url, success, fail, complete) {
  const callbackFn = fn(success,fail,complete);
  wx.switchTab({
    url,
    ...callbackFn
  })
}


module.exports = {
  Push,
  Back,
  Redirect,
  Relaunch,
  Tab
}