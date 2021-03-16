 "use strict"
 window.addEventListener('load', () => { 

    // Preloader
    function Prealoder() { 
        if (document.querySelector('.preloader')) { 
            document.querySelector('.preloader').style.opacity = '0'
            document.querySelector('.preloader').style.visibility = 'hidden'
        }
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
    function InpAmi() { 
        window.addEventListener('click', (e) => {
            let clickOneInp = e.target.classList.contains('placeholder') || e.target.classList.contains('inp') || e.target.classList.contains('icon')
            if (clickOneInp) {
                e.target.parentElement.classList.add('typeNow')
            }
        }) 
    }
    InpAmi()


    // close
    function Closings() { 
        function closeIt() {
            let closeIcon = document.querySelectorAll('.mainPageClose')
            closeIcon.forEach(close => { 
                close.addEventListener('click', () => {
                    let body  = document.querySelector('body')
                    let panel = document.querySelector('.willLoadContent')
                    body.classList.remove('fold-is-open')
                    panel.classList.remove('is-open')
                    setTimeout(() => {
                        document.querySelector('.load_this').innerHTML = " "
                    }, 700);
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
    }
    Closings()
    // Get the the sub pages (e.g flight classes)
    function Fnc() {
        let services      = document.querySelectorAll('.ser-details li')
        let servicesPages = document.querySelectorAll('.service-sub-pages .ssp')
        services.forEach(btn => {
            btn.addEventListener('click', () => {
                servicesPages.forEach(pages => {
                    pages.classList.remove('showMe')
                })

                servicesPages.forEach(pages => {
                    if (pages.classList.contains(btn.dataset.page)) {
                        pages.classList.add('showMe')
                    } 
                })
            })

        }) 

        let classMenu    = document.querySelectorAll('.all-flights ul li')
        let flightClasse = document.querySelectorAll('.flight-pages .fclasse')
        classMenu.forEach(btn => {
            btn.addEventListener('click', () => {
                flightClasse.forEach(pages => {
                    pages.classList.remove('showMeAsClasses')
                }) 
                flightClasse.forEach(pages => {
                    if (pages.classList.contains(btn.dataset.page)) {
                        pages.classList.add('showMeAsClasses')
                    } 
                })
            })

        }) 

        // Input animation
        let closeBlk = document.querySelectorAll('.thisClose')
        let closeBlksp = document.querySelectorAll('.thisClose span')
        closeBlk.forEach(cBlk => { 
            cBlk.addEventListener('click', (e) => {
                if (e.target.parentElement.parentElement.classList.contains('showMe') || e.target.parentElement.parentElement.parentElement.classList.contains('showMe') || e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('showMe')) {
                    e.target.parentElement.parentElement.parentElement.classList.remove('showMe') || e.target.parentElement.parentElement.classList.remove('showMe') || e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('showMe')
                } 
                if (e.target.parentElement.parentElement.classList.contains('showMeAsClasses') || e.target.parentElement.parentElement.parentElement.classList.contains('showMeAsClasses') || e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('showMeAsClasses')) {
                    e.target.parentElement.parentElement.parentElement.classList.remove('showMeAsClasses') || e.target.parentElement.parentElement.classList.remove('showMeAsClasses') || e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('showMeAsClasses')
                } 
            })
        })

        closeBlksp.forEach(cBlksp => { 
            cBlksp.addEventListener('click', (e) => { 
                if (cBlksp.parentElement.parentElement.parentElement.parentElement.classList.contains('showMeAsClasses')) {
                    cBlksp.parentElement.parentElement.parentElement.parentElement.classList.remove('showMeAsClasses')
                }
                if (cBlksp.parentElement.parentElement.parentElement.parentElement.classList.contains('showMe')) {
                    cBlksp.parentElement.parentElement.parentElement.parentElement.classList.remove('showMe')
                }
            })
        })
        
        setTimeout(() => {
            Fnc()
        }, 2000);

        
        $('select').niceSelect();
    } 
    Fnc()


    // Give Password to get access of the pages
    function done() {
        let frm = document.querySelector('.PASS')
        if (frm) { 
            let input = document.querySelector('input[type="password"]')
            let submit = document.querySelector('input[type="submit"]')
            submit.addEventListener('click', () => { 
                if (input.value == 'abcd123') {
                    frm.style.display = 'none'
                }
            })
        }
    } 
    done()


    // Signup/contact/subscribe
    function GetForm() {

        // Signup/contact/subscribe
        function SignupIn() { 
            let btn         = document.querySelector('.getForm')
            let formBlock   = document.querySelector('.inner_datail_pages')
            let closeBtn    = document.querySelector('.inner_datail_pages .thisClose')

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('getForm')) {
                    e.preventDefault()
                    formBlock.classList.add('takeForm')
                } 
            })
            btn.addEventListener('click', () => {
                formBlock.classList.add('takeForm')
            })
            // Form sention closing
            closeBtn.addEventListener('click', () => {
                formBlock.classList.remove('takeForm')
            })
        }
        SignupIn()

        // Get in touch
        function GetnTouch() {
            let btn         = document.querySelector('.getintouchnow')
            let formBlock   = document.querySelector('.getinTouches')
            let closeBtn    = document.querySelector('.getinTouches .thisClose')

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('getintouchnow')) {
                    e.preventDefault()
                    formBlock.classList.add('touchNow')
                } 
            })
            // Form sention closing
            closeBtn.addEventListener('click', () => {
                formBlock.classList.remove('touchNow')
            })

        }
        GetnTouch()
 
        // privacy
        function privacy() {
            let btn         = document.querySelector('.privacybtn')
            let formBlock   = document.querySelector('.privacy')
            let closeBtn    = document.querySelector('.privacy .thisClose')

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('privacybtn')) {
                    e.preventDefault()
                    formBlock.classList.add('touchNow')
                } 
            })
            // Form sention closing
            closeBtn.addEventListener('click', () => {
                formBlock.classList.remove('touchNow')
            })

        }
        privacy()
 
        // cookie
        function cookie() {
            let btn         = document.querySelector('.cookiebtn')
            let formBlock   = document.querySelector('.cookie')
            let closeBtn    = document.querySelector('.cookie .thisClose')

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('cookiebtn')) {
                    e.preventDefault()
                    formBlock.classList.add('touchNow')
                } 
            })
            // Form sention closing
            closeBtn.addEventListener('click', () => {
                formBlock.classList.remove('touchNow')
            })

        }
        cookie()
 
        // blog
        function blog() {
            let btn         = document.querySelector('.blogbtn')
            let formBlock   = document.querySelector('.blog')
            let closeBtn    = document.querySelector('.blog .thisClose')

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('blogbtn')) {
                    e.preventDefault()
                    formBlock.classList.add('touchNow')
                } 
            })
            // Form sention closing
            closeBtn.addEventListener('click', () => {
                formBlock.classList.remove('touchNow')
            })

        }
        blog()

    }
    GetForm()




    // Date-Picker
    function DatePicker() {
        let list = document.querySelector('.qoutes')
        list.addEventListener('click', () => {
            setInterval(() => { 
                $( "#datepicker" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#datepicker2" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activitystart" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend2" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend3" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
            }, 100);
        })
    }
    DatePicker()


    // Auto complete now
    function AutoComplate() {
 
        // To
        function To() {
            window.addEventListener('keyup', (e) => {
                let search = document.querySelector('.typeHere') 
                if (e.target.classList.contains('typeHere')) {
                    let search = document.querySelector('.typeHere') 
                    CitySearch(search.value)
                    CitySearchHtl(search.value)
                    CitySearchExp(search.value)
                    e.target.parentElement.classList.add('showAuto')
                }
                if (search.value >= 0) {
                    e.target.parentElement.classList.remove('showAuto')
                }  
            }) 
            function CitySearch(searchby) {
                let ul = document.querySelector('.locationsto')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            }  
            function CitySearchHtl(searchby) {
                let ul = document.querySelector('.locationst2')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            } 
            function CitySearchExp(searchby) {
                let ul = document.querySelector('.locationst3')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            } 
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('autolist')) {
                    let inpbx = e.target.parentElement.parentElement.parentElement.querySelector('input')
                    inpbx.value = e.target.innerHTML
                    e.target.parentElement.parentElement.parentElement.classList.remove('showAuto')
                }
            }) 
        }
        To()

        // from
        function From() { 
            window.addEventListener('keyup', (e) => {
                let search = document.querySelector('.typeIn') 
                if (e.target.classList.contains('typeIn')) {
                    let search = document.querySelector('.typeIn') 
                    CitySearch(search.value)
                    CitySearchHtls(search.value)
                    CitySearchExps(search.value)
                    e.target.parentElement.classList.add('showAuto')
                }
                if (search.value >= 0) {
                    e.target.parentElement.classList.remove('showAuto')
                }  
            }) 
            function CitySearch(searchby) {
                let ul = document.querySelector('.locations')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            }  
            function CitySearchHtls(searchby) {
                let ul = document.querySelector('.locations2')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            } 
            function CitySearchExps(searchby) {
                let ul = document.querySelector('.locations3')
                ul.innerHTML = " "
                fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
                .then(data => data.json())
                .then(data => {
                    let filtaring = data.filter(data => {  
                        let rgx = new RegExp(searchby, 'gi')  
                        let findit   =  data.city.match(rgx) || data.country.match(rgx) || data.iata_code.match(rgx) || data.name.match(rgx)
                        if (findit) {
                            return data
                        }
                    })
                    filtaring.forEach(showData => { 
                        let li = document.createElement('LI')
                        li.classList.add('autolist')
                        li.innerHTML = showData.city + " , " + showData.iata_code
                        ul.append(li)
                    });
                
                })
                .catch(err => console.log(err.message))
    
            } 
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('autolist')) {
                    let inpbx = e.target.parentElement.parentElement.parentElement.querySelector('input')
                    inpbx.value = e.target.innerHTML
                    e.target.parentElement.parentElement.parentElement.classList.remove('showAuto')
                }
            }) 
        }
        From()

   


    }
    AutoComplate()




 }) 

