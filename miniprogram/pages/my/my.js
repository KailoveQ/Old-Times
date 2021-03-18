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
    this.userAuthorized()
    if(this.data.loading){
      this.setData({
        authorized:true,
      })
      this.getMyFavor()
      this.getMyBookCount()
    }else{

    }
    // this.getMyBookCount()
    // this.getMyFavor()
  },
  getMyFavor() {
    classicModel.getMyFavor(res => {
      this.setData({
        classics: res
      })
    })
  },

  getMyBookCount() {
    classicModel.getMyFavor(res => {
      this.setData({
        bookCount:res.length
      })
    })
  },
  userAuthorized(){
    //判断用户是否授权了
    wx.getSetting({
      success :data =>{
        if(data.authSetting['scope.userInfo']){
          // 然后要让控制用户头像的变量authorized变true
          this.setData({
            loading:true
          })
          console.log(`用户已登录loading：${this.data.loading}`)
          // wx.getUserInfo({
          //   success:data=>{
          //     this.setData({
          //       authorized: true,
          //       userInfo:data.userInfo
          //     })
          //   }
          // })
        }else{
          this.setData({
            loading:false
          })
          console.log(`用户未登录loading：${this.data.loading}`)
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
        loading:true
      })
    }
  },

  // wx.navigateTo({
    //   url:`/pages/classic-detail/index?cid=${cid}
    //     &type=${type}`
    // })
})

    