import create from '../utils/create'
import user from 'user.js'

const emitter = create.emitter

// 注册事件
emitter.on('bar', e => console.log('test bar', e))

export default {
  data: {
    userData: user.data,
    logs: [],
    motto: 'Hello World'
  },
  xxx: function() {
    //you can call the methods of a or b and can pass args to them
    console.log(user.aMethod(motto))
  },
  emitter: emitter
}
