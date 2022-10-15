const date=new Date()
const printdate=function(){
    let day=date.getDate()
    return day
}
const printmonth=function(){
    let month=date.getMonth()+1
    return month
}
const getbatchinfo=function(){
    return "lithium, W3d5, the topic for today is Nodejs module and npm"
    
}
module.exports.printdate=printdate
module.exports.printmonth=printmonth
module.exports.getbatchinfo=getbatchinfo