let nav = document.querySelector(".nav__list"),
    navItems = document.querySelectorAll(".nav__link"),
    menuOppen = document.querySelector(".menu-oppen"),
    menuClouse = document.querySelector(".menu-clouse")


        menuOppen.addEventListener("click", () => {
            nav.style.left = "0"
            menuClouse.style.display = "block"
            menuOppen.style.display = "none"

        })  

        menuClouse.addEventListener("click", () => {
            nav.style.left = "-100%"
            menuClouse.style.display = "none"
            menuOppen.style.display = "block"

        })

        navItems.forEach(navItem => {
            navItem.addEventListener("click", () => {
                nav.style.left = "-100%"
                menuClouse.style.display = "none"
                menuOppen.style.display = "block"
        
            })
        })

    















let infoContentHeading = document.querySelectorAll(".info-content__heading"),
    infoTitles = document.querySelectorAll(".question__info-title"),
    infoTitleNumber = document.querySelectorAll(".question__title-number"),
    infoTitletext = document.querySelectorAll(".question__title-text"),
    infoContents = document.querySelectorAll(".info-content");
    console.log(infoTitles)  

    infoTitles.forEach((infoTitle , j) => {
        infoTitle.addEventListener("click", () => {

            console.log("salom")
            if(window.innerWidth > 1100) {
                infoContentHeading[j].classList.toggle("active");
                const infoBody = infoContentHeading[j].nextElementSibling;
                
                if (infoContentHeading[j].classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";                      
                    infoContents[j].style.marginBottom = 88 + "px"
                    infoTitleNumber[j].style.color = "#0E8784"
                    infoTitletext[j].style.color = "#333D4B"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[j].style.marginBottom = 32 + "px"
                    infoTitleNumber[j].style.color = "#333d4b80"
                    infoTitletext[j].style.color = "#333d4b80"

                }
            }
            
            else if(window.innerWidth > 576 && window.innerWidth < 1100 ) {
                contentHeading.classList.toggle("active");                   
                const infoBody = contentHeading.nextElementSibling;
    
                if (contentHeading.classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";
                    infoContents[i].style.marginBottom = 100 + "px"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[i].style.marginBottom = 60 + "px"
                }
            }
            
            else if(window.innerWidth < 576){
                contentHeading.classList.toggle("active");                   
                const infoBody = contentHeading.nextElementSibling;
    
                if (contentHeading.classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";                       
                    infoContents[i].style.marginBottom = 96 + "px"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[i].style.marginBottom = 78 + "px"
                }
            }
                
            
        })
    })

    infoContentHeading.forEach((contentHeading, i) => {
        contentHeading.addEventListener("click", () => {
            if(window.innerWidth > 1100) {
                contentHeading.classList.toggle("active");
                const infoBody = contentHeading.nextElementSibling;
                
                if (contentHeading.classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";                      
                    infoContents[i].style.marginBottom = 88 + "px"
                    infoTitleNumber[i].style.color = "#0E8784"
                    infoTitletext[i].style.color = "#333D4B"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[i].style.marginBottom = 32 + "px"
                    infoTitleNumber[i].style.color = "#333d4b80"
                    infoTitletext[i].style.color = "#333d4b80"

                }
            }
            
            else if(window.innerWidth > 576 && window.innerWidth < 1100 ) {
                contentHeading.classList.toggle("active");                   
                const infoBody = contentHeading.nextElementSibling;
    
                if (contentHeading.classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";
                    infoContents[i].style.marginBottom = 100 + "px"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[i].style.marginBottom = 60 + "px"
                }
            }
            
            else if(window.innerWidth < 576){
                contentHeading.classList.toggle("active");                   
                const infoBody = contentHeading.nextElementSibling;
    
                if (contentHeading.classList.contains("active")) {
                    infoBody.style.maxHeight = infoBody.scrollHeight + "px";                       
                    infoContents[i].style.marginBottom = 96 + "px"
                }else {
                    infoBody.style.maxHeight = 0;
                    infoContents[i].style.marginBottom = 78 + "px"
                }
            }
        })
    })

    



