const menuItems = document.querySelector('.menu-items');
const menuIcon = document.querySelector('.bi-list');

menuIcon.addEventListener('click', () =>{
    if(menuItems.style.display === 'flex'){
        menuItems.style.display = 'none';
    }
    else{
        menuItems.style.display = 'flex';
    }
})