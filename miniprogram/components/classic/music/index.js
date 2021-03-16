// components/classic/music/index.js
import {classicBeh} from '../classic-beh'

const mMgr =wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh ],

  properties: {
    src: String,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function (event) {
      // 图片要切换
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    }
  }
})
