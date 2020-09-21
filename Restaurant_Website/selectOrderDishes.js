var ul=document.getElementById('List');
var li;

var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var confirmOkButton=document.getElementById('ok');
confirmOkButton.addEventListener('click',confirmOrder);

var confirmCancelButton=document.getElementById('cancel');
confirmCancelButton.addEventListener('click',cancelOrder);

// var removeAllButton=document.getElementById('removeAll');
// removeAllButton.addEventListener('click',removeAll);

var modal2=document.querySelector('.modal2');

var modal=document.querySelector('.modal');
var backdrop=document.querySelector('.backdrop');
var orderButton=document.getElementById('order');


var closeModalButton=document.getElementById('closeModalButton');
closeModalButton.addEventListener('click',cancelOrder)

orderButton.addEventListener('click',function(){
     modal.style.display='block';
     backdrop.style.display='block';
});


function addItem()
 {
    var input=document.getElementById('input')
    var item=input.value;
    var textnode=document.createTextNode(item);
    if(textnode==='')
    {
        // return false;
        var para=document.createElement('p');
        para.textContent='enter your todo';
        var Body=document.querySelector('body');
        Body.appendChild(para);
    }
    else
    {
        li=document.createElement('li');

        //create a checkbox
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
       
        //create a label
        var label=document.createElement('label');
     
        //add these elements on webpage
        ul.appendChild(label);
        label.appendChild(textnode);
        li.appendChild(checkbox)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        // li.className='visual';
        setTimeout(()=>{
            li.className='visual';
        },3);
       
        input.value='';
    }
}

function removeItem(){
   li=ul.children;
   for(let index=0; index<li.length; index++){
       while(li[index] && li[index].children[0].checked){
           ul.removeChild(li[index]);
       }
   }
}

// function removeAll(){
//     li=ul.children;
//     for(let index=0; index<li.length; index++){
//         while(li[index] && li[index].children[0]){
//             ul.removeChild(li[index]);
//         }
//     }
//  }

function confirmOrder()
{
    modal.style.display='none';
    backdrop.style.display='block';
    modal2.style.display='block';
    setTimeout(()=>{
        modal2.style.display='none';
        backdrop.style.display='none';
    },3000);
}

function cancelOrder()
{
    modal.style.display='none';
    backdrop.style.display='none';
}


//for mobile nav
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

backdrop.addEventListener('click',function(){
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
})