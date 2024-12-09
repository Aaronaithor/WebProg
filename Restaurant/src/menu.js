const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('div');
    heading.classList.add('menuHeader');
    heading.innerHTML = 'Our Menu';

    const topMenus = document.createElement('div');
    topMenus.classList.add('upperMenus');
    const lowMenus = document.createElement('div');
    lowMenus.classList.add('lowerMenus');

    const menuList1 = document.createElement('div');
    menuList1.classList.add('menu');
    const menuTitle1 = document.createElement('h2');
    menuTitle1.innerHTML = 'Placeholder Title';
    const menuItem1 = document.createElement('li');
    menuItem1.innerHTML = 'Placeholder 1st Course';
    const menuItem2 = document.createElement('li');
    menuItem2.innerHTML = 'Placeholder 2nd Course';
    const menuItem3 = document.createElement('li');
    menuItem3.innerHTML = 'Placeholder Dessert';
    
    const menuList2 = document.createElement('div');
    menuList2.classList.add('menu');
    const menuTitle2 = document.createElement('h2');
    menuTitle2.innerHTML = 'Placeholder Title';
    const menuItem4 = document.createElement('li');
    menuItem4.innerHTML = 'Placeholder 1st Course';
    const menuItem5 = document.createElement('li');
    menuItem5.innerHTML = 'Placeholder 2nd Course';
    const menuItem6 = document.createElement('li');
    menuItem6.innerHTML = 'Placeholder Dessert';
    
    const menuList3 = document.createElement('div');
    menuList3.classList.add('menu');
    const menuTitle3 = document.createElement('h2');
    menuTitle3.innerHTML = 'Placeholder Title';
    const menuItem7 = document.createElement('li');
    menuItem7.innerHTML = 'Placeholder 1st Course';
    const menuItem8 = document.createElement('li');
    menuItem8.innerHTML = 'Placeholder 2nd Course';
    const menuItem9 = document.createElement('li');
    menuItem9.innerHTML = 'Placeholder Dessert';
    
    const menuList4 = document.createElement('div');
    menuList4.classList.add('menu');
    const menuTitle4 = document.createElement('h2');
    menuTitle4.innerHTML = 'Placeholder Title';
    const menuItem10 = document.createElement('li');
    menuItem10.innerHTML = 'Placeholder 1st Course';
    const menuItem11 = document.createElement('li');
    menuItem11.innerHTML = 'Placeholder 2nd Course';
    const menuItem12 = document.createElement('li');
    menuItem12.innerHTML = 'Placeholder Dessert';
    
    const menuList5 = document.createElement('div');
    menuList5.classList.add('menu');
    const menuTitle5 = document.createElement('h2');
    menuTitle5.innerHTML = 'Placeholder Title';
    const menuItem13 = document.createElement('li');
    menuItem13.innerHTML = 'Placeholder 1st Course';
    const menuItem14 = document.createElement('li');
    menuItem14.innerHTML = 'Placeholder 2nd Course';
    const menuItem15 = document.createElement('li');
    menuItem15.innerHTML = 'Placeholder Dessert';

    menuList1.appendChild(menuTitle1);
    menuList1.appendChild(menuItem1);
    menuList1.appendChild(menuItem2);
    menuList1.appendChild(menuItem3);

    menuList2.appendChild(menuTitle2);
    menuList2.appendChild(menuItem4);
    menuList2.appendChild(menuItem5);
    menuList2.appendChild(menuItem6);

    menuList3.appendChild(menuTitle3);
    menuList3.appendChild(menuItem7);
    menuList3.appendChild(menuItem8);
    menuList3.appendChild(menuItem9);

    menuList4.appendChild(menuTitle4);
    menuList4.appendChild(menuItem10);
    menuList4.appendChild(menuItem11);
    menuList4.appendChild(menuItem12);
    
    menuList5.appendChild(menuTitle5);
    menuList5.appendChild(menuItem13);
    menuList5.appendChild(menuItem14);
    menuList5.appendChild(menuItem15);

    topMenus.appendChild(menuList1);
    topMenus.appendChild(menuList2);
    topMenus.appendChild(menuList3);

    lowMenus.appendChild(menuList4);
    lowMenus.appendChild(menuList5);

    pageContent.appendChild(heading);
    pageContent.appendChild(topMenus);
    pageContent.appendChild(lowMenus);
    content.appendChild(pageContent);   
}

export default createMenuPage;