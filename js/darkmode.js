window.currentTypeLight = 'Day';

let menuSideBarColorNight = '#1C1C1C';
let navBarTabsColorNight = menuSideBarColorNight;
let backgroundSiteColorNight = ['rgb(32, 32, 32)', 'rgb(43, 43, 43)'];

let menuSideBarColorDay = '#EBEBEB';
let navBarTabsColorDay = menuSideBarColorDay;
let backgroundSiteColorDay = ['#EAEAEA', '#CECECE'];

let menuSideBar = document.getElementById('Container');
let navBar = document.getElementById('NavBar');
let backgroundPage = document.getElementById('PageContent');
let switchLight = document.getElementById('SwitchLight');

let imgLight = document.getElementById('Day');
let imgNight = document.getElementById('Night');


function ChangeLight(light)
{
    GetAllCurrentOpenTabsAndChangeBackground();
    RemoveCurrentLightActiveMenu();
    window.currentTypeLight = light;
    AddCurrentLightActiveMenu();
    ChangeLightImage();
}

function ChangeLightImage(){

    if(window.currentTypeLight == 'Day'){
        imgLight.style.display = 'none';
        imgNight.style.display = 'block';
        ChangeColorToDay();
    }else{
        imgLight.style.display = 'block';
        imgNight.style.display = 'none';
        ChangeColorToNight();
    }
}

function GetAllCurrentOpenTabsAndChangeBackground(){
    let tabs = [];
    if(window.currentTypeLight == 'Day'){
        tabs = document.querySelectorAll('.Page__Content__NavBar__OptionDay');
        tabs.forEach(tab =>{
            tab.classList.add('Page__Content__NavBar__OptionNight');
            tab.classList.remove('Page__Content__NavBar__OptionDay');
        });
    }else{
        tabs = document.querySelectorAll('.Page__Content__NavBar__OptionNight')
        tabs.forEach(tab =>{
            tab.classList.remove('Page__Content__NavBar__OptionNight');
            tab.classList.add('Page__Content__NavBar__OptionDay');
        });
    }
}

function RemoveCurrentLightActiveMenu(){
    let activeMenu = document.querySelector(`.ActiveMenu${window.currentTypeLight}`);
    activeMenu.classList.remove(`ActiveMenu${window.currentTypeLight}`);
    activeMenu.classList.add('ActiveMenu');
}

function AddCurrentLightActiveMenu(){
    let activeMenu = document.querySelector(`.ActiveMenu`);
    activeMenu.classList.remove('ActiveMenu');
    activeMenu.classList.add(`ActiveMenu${window.currentTypeLight}`);
}

function ChangeColorToDay(){
    menuSideBar.style.backgroundColor = menuSideBarColorDay;
    menuSideBar.style.color = '#1C1C1C';
    navBar.style.backgroundColor = navBarTabsColorDay;
    backgroundPage.style.backgroundImage = `linear-gradient(to right, ${backgroundSiteColorDay[0]}, ${backgroundSiteColorDay[1]})`
    switchLight.style.backgroundColor = navBarTabsColorDay;
}

function ChangeColorToNight(){
    menuSideBar.style.backgroundColor = menuSideBarColorNight;
    menuSideBar.style.color = '#f3f1f1ff';
    navBar.style.backgroundColor = navBarTabsColorNight;
    backgroundPage.style.backgroundImage = `linear-gradient(to right, ${backgroundSiteColorNight[0]}, ${backgroundSiteColorNight[1]})`
    switchLight.style.backgroundColor = navBarTabsColorNight;
}