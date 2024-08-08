const tabmenus = document.querySelectorAll('.tabmenuBar .tabmenu');

tabmenus.forEach(function(els,index){
  els.addEventListener('click',function(){
    tabChange((index+1));
  });
});

function tabChange(num){
  document.querySelector('.tabmenu.active').classList.remove('active');
  document.querySelector('.tabmenu'+num).classList.add('active');
  document.querySelector('.tabCont.active').classList.remove('active');
  document.querySelector('.tabCont'+num).classList.add('active');
}