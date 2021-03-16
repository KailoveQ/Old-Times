// components/classic/music/index.js
import {classicBeh} from '../classic-beh'
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

  }
})
