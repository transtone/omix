import create from '../../utils/create'
import store from '../../store/store.js'
import dayjs from 'dayjs'

create(store, {
  onLoad: function() {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return dayjs(new Date(log)).format('YYYY/MM/DD HH:mm:ss')
    })

    // 触发事件
    this.store.emitter.emit('bar', { a: 'b' })

    this.store.data.motto = '修改motto'

    setTimeout(() => {
      this.store.data.logs[0] = 'Changed!'
    }, 1000)

    setTimeout(() => {
      this.store.data.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      this.store.data.logs.splice(this.store.data.logs.length - 1, 1)
    }, 3000)
  }
})
