export default class ErrorRepository {
 constructor() {
  this.map = new Map()
  this.map.set(101, "Error 101")
   .set(102, "Error 102")
   .set(103, "Error 103")
   .set(104, "Error 104")

 }
 translate(code) {
  if (this.map.get(code) == undefined) {
   return 'Unknown error'
  } else {
   return this.map.get(code)
  }
 }
}