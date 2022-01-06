let btnPages = document.querySelectorAll('button[data-page]')
let overview = document.querySelector('.overview')
let projects = document.querySelector('.projects')
let calendar = document.querySelector('.calendar')

let blur = document.querySelector('.blur')
let modal = document.querySelector('.modal')
let addBtn = document.querySelector('.add')
let cancel = document.querySelector('.cancel')
addBtn.onclick = () => {
    modal.style.top = '50%'
    modal.style.left = '50%'
    blur.style.top = '0'
     
}

cancel.onclick = () => {
    // modal.style.display = 'none'
    modal.style.top = '-1000px'
    blur.style.top = '-1000px'
    

}

blur.onclick = () => {
    modal.style.top = '-1000px'
    blur.style.top = '-1000px'
}



btnPages.forEach(btn => {
    btn.onclick = () => {
        switch (btn.getAttribute('data-page')) {
            case 'overview':
                switchPage('overview')
                console.log('overview');
                break;
            case 'projects':
                switchPage('projects')
                console.log('projects');
                break;
            case 'calendar': 
                switchPage('calendar')
                console.log('calendar');
                break
        }
    }
});


function switchPage(page) {
    if(page === 'overview') {
        // overview
        overview.style.zIndex = '900'
        overview.style.top = '0px'

        // projects
        projects.style.zIndex = '700'
        projects.style.top = '-100%'

        // calendar
        calendar.style.zIndex = '500'
        calendar.style.top = '-100%'

    } else if(page === 'projects') {
        projects.style.zIndex = '900'
        projects.style.top = '0px'

        // overview
        overview.style.zIndex = '700'
        overview.style.top = '-100%'

        // calendar
        calendar.style.zIndex = '500'
        calendar.style.top = '-100%'
    } else if(page === 'calendar') {
        calendar.style.zIndex = '900'
        calendar.style.top = '0px'

        // projects
        projects.style.zIndex = '700'
        projects.style.top = '-100%'

        // calendar
        overview.style.zIndex = '500'
        overview.style.top = '-100%'
    } 
}