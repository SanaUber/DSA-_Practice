var countVal=function(data,user){
    
    let dataret=[]
 data.forEach(item => {
    if(item.user==user)
    dataret.push(item.user,item.count)
 });
if(dataret.length==0)
    return 'No data Found'
else
 return dataret
}
const data=[
    {
        user:'sana',add:'s1',count:100},
      {  user:'sana2',add:'s2',count:200},
        {user:'sana3',add:'s3',count:300 
    }
]
 
 const user='sana0'
 
const value=countVal(data,user)
console.log(value)