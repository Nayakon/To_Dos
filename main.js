


function item(){
  
    var userInput = document.getElementById('userInput').value;
    var text = document.createTextNode(userInput);
    var list = document.createElement('li')

    

   
    

    var closeBtn = document.createElement('button')
    // closeBtn stylle
    closeBtn.className = "btn-close btn btn-warning";
    
    
    if(userInput === ''){
        alert('Please enter your country of origin!')
    }
    else{
        list.append(closeBtn)
        list.append(text)
        document.getElementById('list').append(list)
    }
    document.getElementById('userInput').value = '';

    closeBtn.addEventListener('click',()=>{
        
        list.remove()
    })
   
}
   
