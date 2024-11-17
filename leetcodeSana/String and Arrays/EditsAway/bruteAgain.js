class ifAnyEditAway
{ constructor(){
    //  this.str1="pale" replaced
    // this.str2="bale"  replaced
    // this.str1="pake" no edit
    // this.str2="bale" no edit
    //    this.str1="pal" inserted
    // this.str2="pale"   inserted
    //  this.str1="pal"   no edit
    // this.str2="bale"    no edit
    //    this.str1="pale"    delete
    // this.str2="pal"        delete
    this.str1="pale"    
    this.str2="bal"  

    this.string1=this.str1.split('')
    this.string2=this.str2.split('')

    this.len1 =this.string1.length
    this.len2 =this.string2.length}
  getTheStringCheck (){
  let answer=''
    if(this.len1==this.len2)
    {
   
        answer=this.ifStringisReplaced( ) 
    }
    else if(this.len1+1==this.len2){
        answer=this.ifStringisInserted()
    }
       
    else if(this.len1-1==this.len2)
      {   answer=this.ifStringisRemoved()}
  else answer= 'no edits'   
return    answer
}
  ifStringisReplaced(){
    let countdiff=0;let countsame=0
    for(let i=0;i<this.len1;i++)
    {  if(this.string1[i]==this.string2[i])
     {countsame=countsame+1}
    else{countdiff=countdiff+1}
    }
    if(countdiff==1)
return 'replaced'
    else if(countdiff==0)
    return 'same'
else(countdiff>1)
return'no edit'
}

  ifStringisInserted(){ 
      let countdiff=0;let countsame=0
    for(let i=0;i<this.len1;i++)
    {  if(this.string1[i]==this.string2[i])
     {countsame=countsame+1}
    else{countdiff=countdiff+1}
    }
    if(countsame==this.len1)
return 'inserted'
    else if(countdiff>0)
 
return'no edit'

} 
// return 'inserted'
// }
  ifStringisRemoved(){  
    let countdiff=0;let countsame=0
    for(let i=0;i<this.len2;i++)
    {  if(this.string1[i]==this.string2[i])
     {countsame=countsame+1}
    else{countdiff=countdiff+1}
    }
    if(countsame==this.len2)
return 'deleted'
    else if(countdiff>0)
 
return'no edit'

} }
//console.log(ifAnyEditAway("pale","bale"))
let ifAnyEditAway1= new ifAnyEditAway();
console.log(ifAnyEditAway1.getTheStringCheck());