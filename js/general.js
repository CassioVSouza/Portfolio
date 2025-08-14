let pagesList = ['.AboutPage', '.QualificationsPage', '.StacksPage', '.ExperiencePage'];
let menusList = ['.AboutMenu', '.QualificationsMenu', '.StacksMenu', '.ExperienceMenu'];
let tabs = ['.About'];
let activeTab = '';

let activeColor = '#222222';
let deactiveColor = '#1C1C1C';

function CreateTab(nameClass) 
{
    const documentHasTab = document.getElementsByClassName(nameClass);

    if(documentHasTab.length < 1){
        document.getElementById("NavBar").innerHTML += `<div class="Page__Content__NavBar__Option ${nameClass}"><div class="Page__Content__NavBar__Option__IconAndText" onclick="ShowInfos('${nameClass}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/></svg><span>${nameClass}</span></div><div class="Page__Content__NavBar__Option__XExit"><span class="exit" onclick="DeleteTab('${nameClass}')">x</span></div></div>`;
        tabs.push('.' + nameClass);
        activeTab = '.' + nameClass;
        ActiveMenu(nameClass);
        ShowInfos(nameClass);
        return;
    }else{
        ChangeActiveBackground(nameClass);
        ShowInfos(nameClass);
        return;
    }
}

function DeleteTab(nameClass){

    const div = document.querySelector(`.${nameClass}`);
    const nameClassToCompare = '.' + nameClass;
    if(nameClassToCompare === activeTab){
        VerifyWhosActive(nameClass);
    }
    div.remove();
    HideInfos(nameClass);
    return;
}

function ActiveMenu(nameClass){
    let classMenu = '.' + nameClass + 'Menu';
    DeactivateAllMenus();
    document.querySelector(classMenu).classList.add('ActiveMenu');
    return;
}

function HideAllPages() 
{
    pagesList.forEach(element => {
        document.querySelector(element).style.display = 'none';
    });
    return;
}

function DeactivateAllMenus(){
    menusList.forEach(element => {
        document.querySelector(element).classList.remove('ActiveMenu');
    });
    return;
}

function VerifyWhosActive(nameClass){
    let foundTab = false;

    let index = tabs.indexOf('.' + nameClass) - 1;

    for(i = index; i >= 0; i--){
        if(document.querySelector(tabs[i])){
            if(document.querySelector(tabs[i]).style.display != 'none'){
                HideAllPages();
                document.querySelector(tabs[i] + 'Page').style.display = 'block';
                ChangeActiveBackground(tabs[i].replace('.', ''));
                ActiveMenu(tabs[i].replace('.', ''));
                activeTab = tabs[i];
                foundTab = true;
                break;
            }
        }
    }

    if(foundTab == false){
        for(i = index + 2; i <= tabs.length; i++){
            if(document.querySelector(tabs[i])){
                if(document.querySelector(tabs[i]).style.display != 'none'){
                    HideAllPages();
                    document.querySelector(tabs[i] + 'Page').style.display = 'block';
                    ChangeActiveBackground(tabs[i].replace('.', ''));
                    activeTab = tabs[i];
                    foundTab = true;
                    break;
                }
            }
        }
    }

    if(foundTab == false){
        DeactivateAllMenus();

    }


    return;
}

function HideInfos(nameClass) 
{
    let className = '.' + nameClass;
    const index = tabs.indexOf(className);
    tabs.splice(index, 1);
    document.querySelector('.' + nameClass + 'Page').style.display = 'none';
    return;
}

function ShowInfos(nameClass){
    
    pagesList.forEach(element => {
        document.querySelector(element).style.display = 'none';
    });

    document.querySelector('.' + nameClass + 'Page').style.display = 'block';
    ChangeActiveBackground(nameClass);
    return;
}

function ChangeActiveBackground(nameClass){

    tabs.forEach(element => {
        if(document.querySelector(element)){
            document.querySelector(element).classList.remove('ActiveTab');
            document.querySelector(element).classList.add('DeactivateTab');
        }
    });

    document.querySelector('.' + nameClass).classList.add('ActiveTab');
    document.querySelector('.' + nameClass).classList.remove('DeactivateTab');

    activeTab = '.' + nameClass;
    ActiveMenu(nameClass);
    return;
}