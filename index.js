const Ham=document.querySelector('.custom-nav-responsive')
const Sub_BTN=document.querySelector('.sub-btn')
const Alert_Container=document.querySelector('.alert-container')



Ham.addEventListener('click',(e)=>{
    const Link=e.target.closest('.custom-nav-responsive')
    const Nav=document.querySelector('.nav-custom-items-res')
    console.log(Nav)

    if(!Link.firstElementChild.classList.contains('hidden')&& Nav.classList.contains('hidden')){
        Link.firstElementChild.classList.add('hidden')
        Link.firstElementChild.nextElementSibling.classList.remove('hidden')
        Nav.classList.remove('hidden')
        Nav.classList.add('active')
        document.querySelector('.res').classList.add('res-active')
        


    }else{


        Link.firstElementChild.classList.remove('hidden')
        Link.firstElementChild.nextElementSibling.classList.add('hidden')

        Nav.classList.add('hidden')
        Nav.classList.remove('active')
        document.querySelector('.res').classList.remove('res-active')
        

    }
  
})

Sub_BTN.addEventListener('click',(e)=>{
    const Input=document.querySelector('.input-email input')
    if(!Input.value){
        Alert_Container.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning!</strong> Please Fill All the fileds
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.body.scrollIntoView({behavior: "smooth"});
      

        
    }
    else if(Input.value.indexOf('@') < 0){
        Alert_Container.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning!</strong> Please Enter Correct mail Address
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.body.scrollIntoView({behavior: "smooth"});

    }else{
        Alert_Container.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Successfully submitted
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.body.scrollIntoView({behavior: "smooth"});

    }
    console.log(Input.value)
    Input.value=''
})