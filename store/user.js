export default {
  data: {
    a: 1,
    xx: 'xxx',
    reverseXX() {
      return this.xx
        .split('')
        .reverse()
        .join('')
    }
  },
  aMethod: function(num) {
    this.data.a += num
  }
}
