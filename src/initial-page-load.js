const initialPageLoad = (function() {

const content = document.getElementById('content')
const container = document.getElementById('container')



    function createHeader(){
        
        const header = document.createElement('div')
        const h1Title = document.createElement('h1')
        const h2Title = document.createElement('h2')
        header.id = 'header'
    
        h1Title.textContent = 'Tiko\'s'
        h2Title.textContent = 'All About Food.'
        content.appendChild(header);
        header.appendChild(h1Title);
        header.appendChild(h2Title);
        }

    //Create navigation
        function createNavBar(){
            const navBar = document.createElement('nav')
            
            //Create Tab Links
            const navTabs = {
            home : document.createElement('div'),
            menu : document.createElement('div'),
            contact : document.createElement('div')
            }

            //Add IDs and content to each navigation tab
            const entries = Object.entries(navTabs)
            for (const [name, element] of entries) {
                element.classList.add('nav-link')
                element.textContent = name
                element.id = name + '-tab'
                navBar.appendChild(element)
            }
            
            //Add Navbar to the page.
        content.appendChild(navBar)
    }

    function createFooter() {
        const footer = document.createElement('footer')
        footer.innerHTML = `<span><p>Copyright 2021 </p> <a href="http://www.github.com/dalux21">  Davide Lucifora</a><span>`
        container.appendChild(footer)
    }

    return {createHeader, createNavBar, createFooter}
})()

export default initialPageLoad