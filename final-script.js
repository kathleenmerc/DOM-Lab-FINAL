// DOM LAB REDO 

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



////////// PART 1 TASKS //////////

// 1.0 - 1.3
let mainEl = document.querySelector("main")         
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")
//console.log(mainEl)

// 2.0 - 2.3
let topMenuEl = document.querySelector("#top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")
//console.log(topMenuEl)

// 3.0 - 3.1
let aEl = 0
for (let i = 0; i < menuLinks.length; i++) {
    aEl = document.createElement("a")
    aEl.setAttribute("href", menuLinks[i].href)
    aEl.textContent = menuLinks[i].text
    topMenuEl.append(aEl)
}
//console.log(aEl)




////////// PART 2 TASKS //////////

// 4.0 - 4.5
let subMenuEl = document.querySelector("#sub-menu")
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add("flex-around")
subMenuEl.style.position = "absolute"
subMenuEl.style.top = "0"
//console.log(subMenuEl)

// 5.0 - 5.1
let topMenuLinks = topMenuEl.querySelectorAll("a")
let showingSubMenu = false

// 5.2
topMenuEl.addEventListener("click", function handleClick (evt) {
    evt.preventDefault()

    if (evt.target.tagName !== "A") {
        return
    } else {
        console.log(evt.target)
    }

    // 5.3
    if (evt.target.classList.contains("active")) {
        evt.target.classList.remove("active")
        showingSubMenu = false
        subMenuEl.style.top = "0"
        return
    }

    // 5.4 - this step is removing the active class from the aTag that was clicked, whenever a new aTag is clicked, so only one aTag is active each time
    for (let i = 0; i < topMenuLinks.length; i++) {
       topMenuLinks[i].classList.remove("active") 
    }
                                                          // this is another way for task 5.4 using forEach method:
                                                          // topMenuLinks.forEach(function (aLink) {
                                                          //     aLink.classList.remove('active')
                                                          //     console.log(aLink)
                                                          //   })

    //5.5 - this step is making the clicked aTag active
    evt.target.classList.add("active")

    // 5.6 - this step is setting showSubMenu to true, to only the objects that have a subLinks key
    let text = evt.target.textContent   // we set this 'text' variable to use in the for loop

    let currentLink = {}   // we are declaring this variable so we can access each object in the menuLinks array

    for (let i = 0; i < menuLinks.length; i++) {
      if (text === menuLinks[i].text) {
        showingSubMenu = menuLinks[i].hasOwnProperty("subLinks") // hasOwnProperty returns a boolean
        currentLink = menuLinks[i]
      }
    } 

    //console.log(showingSubMenu)
    //console.log(currentLink)

    // 5.7 - we are adding buildSubMenu function and changing CSS style 
    if (showingSubMenu === true) {
      buildSubMenu()
      subMenuEl.style.top = "100%"
    } else {
      subMenuEl.style.top = "0"
    }

    // 5.8
    function buildSubMenu () {
      subMenuEl.textContent = "";
      currentLink.subLinks.forEach((link) => {
        newLink = document.createElement("a")
        newLink.setAttribute("href", link.href)
        newLink.textContent = link.text
        subMenuEl.append(newLink)
        }
      )
    }

    // 6.4
    if (evt.target.text === "about") {
      mainEl.innerHTML = "<h1>about</h1>"
    }
  } // end of topMenu function handleClick
) // end of topMenu addEventListener

// 6.0
subMenuEl.addEventListener("click", (evt) => {
    evt.preventDefault()

    if (evt.target.tagName !== "A") {
      return
    } else {
        console.log(evt.target)
    }

    // 6.1
    showingSubMenu = false
    subMenuEl.style.top = "0"

    // 6.2
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove("active")
    }

    // 6.3
    mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
  } // end of subMenu handleClick function
) // end of subMenu addEventListener
