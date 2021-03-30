(function(){
    
"use strict";
 window.addEventListener('load', function(){ 

    // Preloader
    function Prealoder() { 
        if (document.querySelector('.preloader')) { 
            document.querySelector('.preloader').style.opacity = '0';
            document.querySelector('.preloader').style.visibility = 'hidden';
        }
    }
    Prealoder();
    

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

        navLink.addEventListener('mouseout', function () {
            mouseCursor.classList.remove("link-grow");
        });
        navLink.addEventListener('mouseover', function () {
            mouseCursor.classList.add("link-grow");
        });


        
    }


    // menu
    function Menus() { 
        let menuBar = document.querySelector('.menuIcon');
        let body = document.querySelector('.page-wrp');
        if (menuBar) { 
            menuBar.addEventListener('click', function () {
                body.classList.toggle('addedMenu');
            });
        }
    } 
    Menus();


    // action stop of "A teg"
    function Actions() { 
        let all_a = document.querySelectorAll('up.menu-list a'); 
        if (all_a) { 
            all_a.forEach(a => {
                a.addEventListener('click', e => {
                    e.preventDefault();
                })
            }) 
        }
    } 
    Actions();


    // Counter
    function Counters() { 
        let countingElements = document.querySelectorAll('.countit');
        if (countingElements) { 
            function Counter(elements) { 
                elements.forEach(sdt => {
                    this.getNumber = sdt.dataset.number;
                    this.count(this.getNumber,sdt);
                });
            }
            Counter.prototype.count = (num,elem) => {
                 let i = 0;
                setInterval(function () {
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
    Counters();
   

    // Get a Quote
    function Qetaquote() {
        let flight      = document.querySelector('#pills-flights-tab');
        let hotel       = document.querySelector('#pills-hotels-tab');
        let experinces  = document.querySelector('#pills-experiences-tab');
        if (flight) {
            flight.addEventListener('click', function () {
                document.querySelector('body').classList.add('flights');
                if (document.querySelector('body').classList.contains('hotel')) {
                    document.querySelector('body').classList.remove('hotel');
                }
                if (document.querySelector('body').classList.contains('experinces')) {
                    document.querySelector('body').classList.remove('experinces');
                }
            })
            hotel.addEventListener('click', function () {
                document.querySelector('body').classList.add('hotel');

                if (document.querySelector('body').classList.contains('flights')) {
                    document.querySelector('body').classList.remove('flights');
                }
                if (document.querySelector('body').classList.contains('experinces')) {
                    document.querySelector('body').classList.remove('experinces');
                }

            })
            experinces.addEventListener('click', function () {
                document.querySelector('body').classList.add('experinces');
                if (document.querySelector('body').classList.contains('flights')) {
                    document.querySelector('body').classList.remove('flights');
                }
                if (document.querySelector('body').classList.contains('hotel')) {
                    document.querySelector('body').classList.remove('hotel');
                }
            })
        }
    }   
    Qetaquote();
    

    // Input animation
    function InpAmi() { 
        window.addEventListener('click', (e) => {
            let clickOneInp = e.target.classList.contains('placeholder') || e.target.classList.contains('inp') || e.target.classList.contains('icon') || e.target.classList.contains('textareas');
            if (clickOneInp) {
                e.target.parentElement.classList.add('typeNow');
            }
        }) 
    }
    InpAmi();
 
    // close
    function Closings() { 
        function closeIt() {
            let closeIcon = document.querySelectorAll('.mainPageClose');
            closeIcon.forEach(close => { 
                close.addEventListener('click', function () {
                    let body  = document.querySelector('body');
                    let panel = document.querySelector('.willLoadContent');
                    body.classList.remove('fold-is-open');
                    panel.classList.remove('is-open');
                    setTimeout(function () {
                        document.querySelector('.load_this').innerHTML = " ";
                    }, 700);
                })
            })
            setTimeout(function () {
                closeIt();
            }, 2000);
        }
        let tbcloso = document.querySelectorAll('.cd-item');
        tbcloso.forEach(a => {
            closeIt();
        }) 
    }
    Closings();


    // Get the the sub pages (e.g flight classes)
    function Fnc() {
        let services      = document.querySelectorAll('.ser-details li');
        let servicesPages = document.querySelectorAll('.service-sub-pages .ssp');
        services.forEach(btn => {
            btn.addEventListener('click', function () {
                servicesPages.forEach(pages => {
                    pages.classList.remove('showMe');
                })

                servicesPages.forEach(pages => {
                    if (pages.classList.contains(btn.dataset.page)) {
                        pages.classList.add('showMe');
                    } 
                })
            })

        }) 

        let classMenu    = document.querySelectorAll('.all-flights ul li');
        let flightClasse = document.querySelectorAll('.flight-pages .fclasse');
        classMenu.forEach(btn => {
            btn.addEventListener('click', function () {
                flightClasse.forEach(pages => {
                    pages.classList.remove('showMeAsClasses');
                }) 
                flightClasse.forEach(pages => {
                    if (pages.classList.contains(btn.dataset.page)) {
                        pages.classList.add('showMeAsClasses');
                    } 
                })
            })

        }) 

        // Input animation
        let closeBlk = document.querySelectorAll('.thisClose');
        let closeBlksp = document.querySelectorAll('.thisClose span');
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
                    cBlksp.parentElement.parentElement.parentElement.parentElement.classList.remove('showMeAsClasses');
                }
                if (cBlksp.parentElement.parentElement.parentElement.parentElement.classList.contains('showMe')) {
                    cBlksp.parentElement.parentElement.parentElement.parentElement.classList.remove('showMe');
                }
            })
        })
        
        setTimeout(function () {
            Fnc();
        }, 2000);

        
        $('select').niceSelect();
    } 
    Fnc();


    // Give Password to get access of the pages
    function done() {
        let frm = document.querySelector('.PASS');
        if (frm) { 
            let input = document.querySelector('input[type="password"]');
            let submit = document.querySelector('input[type="submit"]');
            submit.addEventListener('click', function () { 
                if (input.value == 'abcd123') {
                    frm.style.display = 'none';
                }
            })
        }
    } 
    done();


    // Get_in_touch / Signup / contact / subscribe
    function GetForm() {

        // Signup/contact/subscribe
        function SignupIn() { 
            let btn         = document.querySelector('.getForm');
            let formBlock   = document.querySelector('.inner_datail_pages');
            let closeBtn    = document.querySelector('.inner_datail_pages .thisClose');

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('getForm')) {
                    e.preventDefault();
                    formBlock.classList.add('takeForm');
                } 
            })
            btn.addEventListener('click', function () {
                formBlock.classList.add('takeForm');
            })
            // Form sention closing
            closeBtn.addEventListener('click', function () {
                formBlock.classList.remove('takeForm');
            })
        }
        SignupIn();

        // Get in touch
        function GetnTouch() {

            // Flights
            function Flight() { 
                let btn         = document.querySelector('.getintouchnow');
                let formBlock   = document.querySelector('.getinTouches');
                let closeBtn    = document.querySelector('.getinTouches .thisClose');

                // Form section comming
                window.addEventListener('click', (e) => {
                    if (e.target.classList.contains('getintouchnow')) {
                        e.preventDefault();
                        formBlock.classList.add('touchNow');
                    } 
                })
                // Form sention closing
                closeBtn.addEventListener('click', function () {
                    formBlock.classList.remove('touchNow');
                }) 
            }
            Flight();
            // hotels
            function hotels() { 
                let btn         = document.querySelector('.getintohotel');
                let formBlock   = document.querySelector('.getinTouchetohotels');
                let closeBtn    = document.querySelector('.getinTouchetohotels .thisClose');

                // Form section comming
                window.addEventListener('click', (e) => {
                    if (e.target.classList.contains('getintohotel')) {
                        e.preventDefault();
                        formBlock.classList.add('touchNow');
                    } 
                })
                // Form sention closing
                closeBtn.addEventListener('click', function () {
                    formBlock.classList.remove('touchNow');
                }) 
            }
            hotels();
            // experinces
            function experinces() {  
                let formBlock   = document.querySelector('.getinToucheforexp');
                let closeBtn    = document.querySelector('.getinToucheforexp .thisClose');

                // Form section comming
                window.addEventListener('click', (e) => {
                    if (e.target.classList.contains('getintoexperinces')) {
                        e.preventDefault();
                        formBlock.classList.add('touchNow');
                    } 
                })
                // Form sention closing
                closeBtn.addEventListener('click', function () {
                    formBlock.classList.remove('touchNow');
                }) 
            }
            experinces();

        }
        GetnTouch();
 
        // privacy
        function privacy() {
            let btn         = document.querySelector('.privacybtn');
            let formBlock   = document.querySelector('.privacy');
            let closeBtn    = document.querySelector('.privacy .thisClose');

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('privacybtn')) {
                    e.preventDefault();
                    formBlock.classList.add('touchNow');
                } 
            });
            // Form sention closing
            closeBtn.addEventListener('click', function () {
                formBlock.classList.remove('touchNow');
            });

        }
        privacy();
 
        // cookie
        function cookie() {
            let btn         = document.querySelector('.cookiebtn');
            let formBlock   = document.querySelector('.cookie');
            let closeBtn    = document.querySelector('.cookie .thisClose');

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('cookiebtn')) {
                    e.preventDefault()
                    formBlock.classList.add('touchNow');
                } 
            })
            // Form sention closing
            closeBtn.addEventListener('click', function () {
                formBlock.classList.remove('touchNow');
            })

        }
        cookie();
 
        // blog
        function blog() { 
            let formBlock   = document.querySelector('.blog');

            // Form section comming
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('blogbtn')) {
                    e.preventDefault();
                    formBlock.classList.add('touchNow');
                } 
                if (e.target.classList.contains('mainPageClose')) {
                    e.preventDefault();
                    formBlock.classList.remove('touchNow');
                } 
            }) 

        }
        blog();

    }
    GetForm();
 
    // Date-Picker
    function DatePicker() {
        let list = document.querySelector('.qoutes');
        list.addEventListener('click', function () {
            setInterval(function () { 
                $( "#datepicker" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#datepicker2" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activitystart" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend2" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
                $( "#activityend3" ).datepicker({dateFormat: "dd-mm-yy",duration: "fast"});
            }, 100);
        })
    }
    DatePicker();


    // Auto complete now
    function AutoComplate() {
 
        
        let cityContry  = [] // stored data [ all the city and country ]
        fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
        .then(data => data.json())
        .then(showthis => {
            showthis.forEach(alldata => {  
                let dataPass = alldata.iata_code+","+alldata.city+","+alldata.country;
                cityContry.push(dataPass);
            });
        })

        // Whil user will type on the input fileds them the autocomplete list will be show
        window.addEventListener('keyup', (e) => {
            let findExect       = e.target.parentElement;
            if (findExect.classList.contains('autocompleted')) {
                let ul          = findExect.querySelector('ul');
                let searchInp   = e.target;
                ul.innerHTML = " "; // at frst clear the ul list

                // Seach key filtaring
                let filtaring       = cityContry.filter(filterElement => {
                    let serachKey   = searchInp.value;
                    let regEx       = new RegExp(serachKey,'gi');
                    let getIt       = filterElement.match(regEx);
                    if (getIt) {
                        return filterElement;
                    }
                })
                // filtard data showing
                filtaring.forEach(data => {
                    let li          = document.createElement('LI');
                    li.innerHTML    = data;
                    ul.appendChild(li);
                })

                // if that input filed is empty then the ul will be clear 
                if (0 >= searchInp.value.length) {
                    ul.innerHTML = " ";
                }

                // click to add this content into the input value
                let li = ul.querySelectorAll('li');
                li.forEach(list => {
                    list.addEventListener('click', function () {
                        searchInp.value = list.innerHTML;
                        ul.innerHTML = " ";
                    })
                })
            } 

        }) 

    }
    AutoComplate();




 }) 
 
})();