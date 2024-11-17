class StringToCheck{
    constructor()
    {
        this.stringGiven=new String("Sanaoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        this.strLen=this.stringGiven.length;

        
    }
    
    getTheStringCheck(){let value='' ;
        const map=new Map();
        if(this.strLen>128)
        {this.result ='not unique at all'
            return this.result
        }
        
        else
        {
            for(let i=0;i<this.strLen;i++)
            {let valuemap=map.has(this.stringGiven.charCodeAt(i))
                if(valuemap==true)
                //if(this.stringGiven.charCodeAt(i)==value)
                  { this.result= 'not unique'
                    return this.result  }
                else
               { //value=this.stringGiven.charCodeAt(i)
                map.set(this.stringGiven.charCodeAt(i),i)
}
            }
        this.result= 'all are unique'
                return this.result  
        }
    }
printResult(){
    console.log('this.result',this.result)
}

}




let stringToCheck= new StringToCheck();
stringToCheck.getTheStringCheck();
 stringToCheck.printResult();