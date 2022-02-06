       
       const addinput = document.getElementById('name');
       
       //deleting the elements
       function deleteitem(eve){
        const val = eve.target.parentNode.parentNode;
        
        //console.log(val);
        val.remove();
      }
       
      
      
      //adding input
       function putdata(){
       
       const val = document.getElementById('name').value;
       const get_id = document.getElementById('demo');
       const div = document.createElement('div');
       div.classList.add('divclass');
       const span = document.createElement('span');
       span.innerHTML = val;
       div.appendChild(span);
       const del_button = document.createElement('button');
       del_button.innerHTML = '<i class="fas fa-trash-alt"></i>';
       div.appendChild(del_button);
       get_id.appendChild(div);
       
       
       
       //const parent = del_button.parentNode;



       //console.log(parent);
       //parent.remove();
       del_button.addEventListener('click',(e)=> deleteitem(e));

       
       //const val = document.input.value;
       
       
    }
    
    
    addinput.addEventListener('keyup',(event)=>{
        if(event.which == 13)
        putdata();
       
    });
