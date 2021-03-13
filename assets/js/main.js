 "use strict"
 window.addEventListener('load', () => { 

    // Preloader
    function Prealoder() { 
        document.querySelector('.preloader').style.opacity = '0'
        document.querySelector('.preloader').style.visibility = 'hidden'
    } 
    Prealoder()
    
    // Cursor
    function Cursor() {
        const mouseCursor = document.querySelector(".cursor");
        const navLinks = document.querySelectorAll("a");
        const navLink = document.querySelector(".thisClose");

        window.addEventListener("mousemove", cursorFunc);

        function cursorFunc(e) {
            mouseCursor.style.top = e.pageY + "px";
            mouseCursor.style.left = e.pageX + "px";
        } 
        
        navLinks.forEach(function (link) {
            link.addEventListener("mouseout", function () {
                mouseCursor.classList.remove("link-grow");
                link.classList.remove("hovered-link");
            });
        
            link.addEventListener("mouseover", function () {
                mouseCursor.classList.add("link-grow");
                link.classList.add("hovered-link");
            });
        });

        navLink.addEventListener('mouseout', () => {
            mouseCursor.classList.remove("link-grow");
        })
        navLink.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow");
        })


        
    } 


    // menu
    function Menus() { 
        let menuBar = document.querySelector('.menuIcon')
        let body = document.querySelector('.page-wrp')
        if (menuBar) { 
            menuBar.addEventListener('click', () => {
                body.classList.toggle('addedMenu')
            })
        }
    } 
    Menus()

    // action stop of "A teg"
    function Actions() { 
        let all_a = document.querySelectorAll('up.menu-list a'); 
        if (all_a) { 
            all_a.forEach(a => {
                a.addEventListener('click', e => {
                    e.preventDefault()
                })
            }) 
        }
    } 
    Actions()

    // Counter
    function Counters() { 
        let countingElements = document.querySelectorAll('.countit');
        if (countingElements) { 
            function Counter(elements) { 
                elements.forEach(sdt => {
                    this.getNumber = sdt.dataset.number
                    this.count(this.getNumber,sdt)
                });
            }
            Counter.prototype.count = (num,elem) => {
                 let i = 0;
                setInterval(() => {
                    i++
                    elem.innerHTML = i;
                    if (i >= num) {
                        elem.innerHTML = num;
                    }
                }, 100);
            };
            new Counter(countingElements); 
        }
        
    } 
    Counters()
   
    // Get a Quote
    function Qetaquote() {
        let flight      = document.querySelector('#pills-flights-tab')
        let hotel       = document.querySelector('#pills-hotels-tab')
        let experinces  = document.querySelector('#pills-experiences-tab')
        if (flight) {
            flight.addEventListener('click', () => {
                document.querySelector('body').classList.add('flights')
                if (document.querySelector('body').classList.contains('hotel')) {
                    document.querySelector('body').classList.remove('hotel')
                }
                if (document.querySelector('body').classList.contains('experinces')) {
                    document.querySelector('body').classList.remove('experinces')
                }
            })
            hotel.addEventListener('click', () => {
                document.querySelector('body').classList.add('hotel')

                if (document.querySelector('body').classList.contains('flights')) {
                    document.querySelector('body').classList.remove('flights')
                }
                if (document.querySelector('body').classList.contains('experinces')) {
                    document.querySelector('body').classList.remove('experinces')
                }

            })
            experinces.addEventListener('click', () => {
                document.querySelector('body').classList.add('experinces')
                if (document.querySelector('body').classList.contains('flights')) {
                    document.querySelector('body').classList.remove('flights')
                }
                if (document.querySelector('body').classList.contains('hotel')) {
                    document.querySelector('body').classList.remove('hotel')
                }
            })
        }
    }   
    Qetaquote()
    
    // Input animation
    window.addEventListener('click', (e) => {
        let clickOneInp = e.target.classList.contains('placeholder') || e.target.classList.contains('inp') || e.target.classList.contains('icon')
        if (clickOneInp) {
            e.target.parentElement.classList.add('typeNow')
        }
    }) 
 
    // close
    function closeIt() {
        let closeIcon = document.querySelectorAll('.thisClose')
        closeIcon.forEach(close => { 
            close.addEventListener('click', () => {
                let body  = document.querySelector('body')
                let panel = document.querySelector('.cd-folding-panel')
                body.classList.remove('fold-is-open')
                panel.classList.remove('is-open')
                setTimeout(() => {
                    document.querySelector('.cd-fold-content').innerHTML = " "
                }, 1000);
            })
        })
        setTimeout(() => {
            closeIt()
        }, 2000);
    }
    let tbcloso = document.querySelectorAll('.cd-item')
    tbcloso.forEach(a => {
        closeIt()
    })


 
 }) 

