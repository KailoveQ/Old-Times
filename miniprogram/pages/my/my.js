import {
  ClassicModel
} from '../../models/classic.js'
import {
  BookModel
} from '../../models/book.js'

import {
  promisic
} from '../../util/common.js'

const classicModel = new ClassicModel()
const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics: null,
    loading:Boolean
  },
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success:data=>{
    //     // success
    //     console.log(data)
    //   }
    // })
    this.userAuthorized()
  },

  userAuthorized(){
    //判断用户是否授权了
    wx.getSetting({
      success :data =>{
        console.log(data)
        if(data.authSetting['scope.userInfo']){
          console.log('监测到用户授权过了了')
          // 然后要让控制用户头像的变量authorized变true
          wx.getUserInfo({
            success:data=>{
              this.setData({
                authorized: true,
                userInfo:data.userInfo
              })
            }
          })
        }else{
          console.log('用户没有登陆')
        //  喜欢的书 应该是 0，而且 authorized 得为false
        }
      }
    })

  },

  onGetUserInfo(event){
    // 用户点击登陆之后执行的函数
    const userInfo = event.detail.userInfo
    console.log(userInfo)
    if(userInfo){
      this.setData({
        userInfo,
        authorized: true
      })
    }
    
  },

  // wx.navigateTo({
    //   url:`/pages/classic-detail/index?cid=${cid}
    //     &type=${type}`
    // })
})

    