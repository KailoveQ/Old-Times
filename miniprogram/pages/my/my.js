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
  onload(options){
    wx.getUserInfo()
  },
  getUserInfo(event){
    console.log(event)
  }
  // wx.navigateTo({
    //   url:`/pages/classic-detail/index?cid=${cid}
    //     &type=${type}`
    // })
})

    