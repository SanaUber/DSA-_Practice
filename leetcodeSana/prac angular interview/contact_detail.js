var change =  function (data) {
let count=0
   data= data.replace("_", " ");
   data=data.replace(data.charAt(0),(data.charAt(0)).toUpperCase( ))
   count=data.indexOf(' ')
   count=count+1
   data=data.replace(data.charAt(count),(data.charAt(count)).toUpperCase( ))
  
    console.log('hre',data)
 }
 
const data='contact_detailss '
const Data = change(data)
 console.log(Data);
 
