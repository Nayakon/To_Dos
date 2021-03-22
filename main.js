


function item(){
  
    let userInput = document.getElementById('userInput').value;
    let text = document.createTextNode(userInput);
    let list = document.createElement('li')

    


    

    let closeBtn = document.createElement('button')
    // closeBtn stylle
    closeBtn.className = "btn-close btn btn-warning";
    
    
    if(userInput === ''){
        alert('please enter ')
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
