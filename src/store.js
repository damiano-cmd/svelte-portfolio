import {writable} from "svelte/store"



export const SR = writable(true);



export const aboutmeen = [
    "Hello, I am 17 years old and I am a:",
    [
        "I am a self tought programmer and full stack web developer and I am based in Bosnia. I started learning web-dev at age 15 and didn't stop since. What realy got me in to programming is wanting to create cool stuff and apps, that is when I discoverd that I have a knack for programming and coding.",
        0,
        "The first programming language I learned is Python and then right after that I learned JavaScript. The primary thing I do is full stack web-dev but I also do Python application programming and development. I am an amature by all means, I don't do not have a fulltime job in my profession. It's been I fun journey learing programming and web development and design.",
        0,
        "My plan is to expand in to mobile development with Fluter, web/desktop development with Electronjs, QT6 and learn Redis and mySQL for back-end databases.",
        0,
        "I love doing personal projects and creating my own web apps and programms. I made this site to show of my web design and web development skills. You can go and see my first portfolio site in my project section.",
        0,
        "I would love to help you out with your projects if I can. So shoot me an email and we'll talk."
    ]
]
export const omeni = [
    "Zdravo, ime mi je David, imam 17 godina, ja sam:",
    [
        "Idem u srednju školu u kojoj učim programiranje ali sam i samostalno naučio puno toga. Nalazim se u Bosni. Počeo sam učiti web-development sa 15 godina i od tad učim sve više. Ono što me je uvelo u programiranje je želja da pravim interesantne stvari i aplikacije. Tad sam saznao da imam talenat za programiranje.",
        0,
        "Prvi programski jezik koji sam naučio je Python, a zatim JavaScript. Glavna stvar koju radim je full stack web-development ali isto radim Python programiranje i aplikativni development. Amater sam i još nisam imao posao u svojoj profesiji. Bilo je zabavno učiti programiranje i web-development i dizajn.",
        0,
        "Plan mi je da naučim mobile development sa Fluter-om, web/desktop development sa Electronjs, QT6 i naučiti Redis i mySQL za back-end baze podataka.",
        0,
        "Volim raditi lične projekte i praviti svoje web aplikacije i programe. Napravio sam ovaj sajt da pokažem svoje web-dizajn i web-development vještine. Moj prvi porfolio sajt se može naći u projekt sekciji.",
        0,
        "Volio bih da pomognem svojim klijentima oko njihovih projekata. Dajem i instrukcije. Pošaljite mi email i pričaćemo."
    ]
]
export const aboutme = writable(omeni);



export const skillsen = {
    "Languages": [
        {
            "img": "html.png",
            "title": "HTML",
            "text": "Proficient at using HTML.",
            subtext: "Nothing much to say, it is what it is."
        },
        {
            "img": "css.png",
            "title": "CSS",
            "text": "Very good with CSS, plus Sass.",
            subtext: "I don't like to use vanilla CSS."
        },
        {
            "img": "sass.png",
            "title": "SCSS",
            "text": "I also know SCSS/SASS.",
            subtext: "I use Sass because its better then CSS."
        },
        {
            "img": "js.jpg",
            "title": "JavaScript",
            "text": "Intermediate-Advanced at JavaScript.",
            subtext: "I know a good amount of vanilla js but i don't use it much."
        },
        {
            "img": "python.png",
            "title": "Python programming",
            "text": "Intermediate skill level at python programming.",
            subtext: "I know the basics and some modules for creating apps and programmes."
        },
        {
            "img": "cpp.png",
            "title": "C++ programming",
            "text": "Fairly good at C++.",
            subtext: "Didn't use it that much. More for personal projects."
        }
    ],
    "Frontend": [
        {
            "img": "react.png",
            "title": "React",
            "text": "Good at React + Next.js.",
            subtext: "This is the first framework that i learned."
        },
        {
            "img": "nextjs.png",
            "title": "Next.js",
            "text": "I'm ok with it but I don't like to work in it.",
            subtext: "This is the second framework I learnd. I made a proof of concept webapp, it's not a well desiged but it does what I want from it."
        },
        {
            "img": "svelte.png",
            "title": "Sveltejs",
            "text": "Intermediate skill level at the Svelte.js framework.",
            subtext: "This is my preferred framework of choise."
        }
    ],
    "Backend": [
        {
            "img": "nodejs.png",
            "title": "Node",
            "text": "This is the backend solution I use when making a website or app.",
            subtext: "This is the only backend runtime I use for my apps."
        },
        {
            "img": "expressjs.png",
            "title": "Express.js",
            "text": "Express is a backend server framework that I use in combination with Node.",
            subtext: "Also the only backend framework I know and it is good."
        },
        {
            "img": "rest.png",
            "title": "Rest API",
            "text": "I know how to make RESTful API's.",
            subtext: "I have a plan to learn graphQL."
        },
        {
            "img": "mongo.png",
            "title": "Mongo",
            "text": "Mongo is my backend database of chosise.",
            subtext: "I plan to add redist and mySQL to my repertoar."
        }
    ]
}
export const vjestine = {
    "Programski Jezici": [
        {
            "img": "html.png",
            "title": "HTML",
            "text": "Dobar u HTML-u.",
            subtext: "Obični HTML ništa posebno."
        },
        {
            "img": "css.png",
            "title": "CSS",
            "text": "Veoma dobar u CSS-u i Sass-u.",
            subtext: "Ne volim koristiti obicni CSS."
        },
        {
            "img": "sass.png",
            "title": "SCSS",
            "text": "Znam SCSS/SASS.",
            subtext: "Koristim sass jer je bolji od CSS-a."
        },
        {
            "img": "js.jpg",
            "title": "JavaScript",
            "text": "Srednje-Napredan nivo vještine u JavaScript.",
            subtext: "Veoma dobro znam vanilla JavaScript ali ga toliko ne koristim."
        },
        {
            "img": "python.png",
            "title": "Python programiranje",
            "text": "Napredan nivo vještine u Python programiranju.",
            subtext: ""
        },
        {
            "img": "cpp.png",
            "title": "C++ programiranje",
            "text": "Vješt u C++.",
            subtext: ""
        }
    ],
    "Front-end": [
        {
            "img": "react.png",
            "title": "React",
            "text": "Dobar u React + Next.js.",
            subtext: "Ovo je prvi framework koji sam naučio."
        },
        {
            "img": "nextjs.png",
            "title": "Next.js",
            "text": "Ovaj framework je uredan.",
            subtext: "Sa njim sam napravio jednu web aplikaciju."
        },
        {
            "img": "svelte.png",
            "title": "Sveltejs",
            "text": "Srednji novi vještine u Svelte.js framework-u.",
            subtext: ""
        }
    ],
    "Back-end": [
        {
            "img": "nodejs.png",
            "title": "Node",
            "text": "Ovo je back-end rešenje koje koristim za web aplikacije ili sajtove.",
            subtext: ""
        },
        {
            "img": "expressjs.png",
            "title": "Express.js",
            "text": "Express je back-end framework koji služi za jednostavnije pravljenje servera.",
            subtext: ""
        },
        {
            "img": "rest.png",
            "title": "Rest API",
            "text": "Znam kako praviti RESTful API-ove.",
            subtext: "Imam plan da naučim graphQL."
        },
        {
            "img": "mongo.png",
            "title": "Mongo",
            "text": "MongoDB je baza podataka u kojoj radim.",
            subtext: "Imam plan da dodam Redis i mySQL na svoj repertoar."
        }
    ]
}
export const skills = writable(vjestine)



export const servicesen = [
    {
        "img": "web-dev.png",
        "title": "Front End Web Development",
        "text": "I can develope and programme a full front-end web app or website using Svelte or Reach, by the clients liking to make it how they want it. I can also make it a PWA (Prograssive web add)."
    },
    {
        "img": "responsive.png",
        "title": "Responsive Design",
        "text": "I will add responsive design to a webapp that I am developing or to an already existing website for all devices from desktop to moblie."
    },
    {
        "img": "backend.png",
        "title": "Backend development",
        "text": "With Nodejs, Expressjs and MongoDB I will make a full back-end web server with a database connected. I can also add REST API on the server and configure the server to do what the client needs."
    },
    {
        "img": "js.jpg",
        "title": "JavaScript Programming",
        "text": "Vanilla JavaScript and Node.js programming and support is a service that I can give to my clients. Tutoring JS is available."
    },
    {
        "img": "MERN.png",
        "title": "MERN full stack development",
        "text": "I can make, update and manage a fullstack MERN web application. I will costomize the webapp to the clients liking and add functionality."
    },
    {
        "img": "nextjs-white.png",
        "title": "SSR framework development",
        "text": "The only SSR framework I know is Next.js and I have used it before to make a web-application. I can make a web-app with Next.js to the clients liking or manage an existing app."
    },
    {
        "img": "python.png",
        "title": "Python Scripting",
        "text": "Python scripting, making python apps and programmes this is what I provide to my clients. Tutoring python is available."
    },
    {
        "img": "cpp.png",
        "title": "C++ Programming",
        "text": "I can help you with C++ programming."
    }
]
export const usluge = [
    {
        "img": "web-dev.png",
        "title": "Front-End Web Development",
        "text": "Programiram i dizajniram cijelu front-end aplikaciju koristeći Svelte or Reach, sve po mjeri i želji klijenta. Mogu isto dodati PWA (Prograssive Web App)."
    },
    {
        "img": "responsive.png",
        "title": "Responzivan Dizajn",
        "text": "Dodajem responzivan dizajn na vebsajt koji izrađujem ili na već gotov vebsajt za sve uređaje od desktop-a do mobilnih telefona."
    },
    {
        "img": "backend.png",
        "title": "Backend development",
        "text": "Sa Nodejs, Expressjs i MongoDB pravim back-end server sa povezanom bazom podataka, ugrađenim REST API po klijentovim potrebama."
    },
    {
        "img": "js.jpg",
        "title": "JavaScript Programiranje",
        "text": "Programiranje i pomoć u običnom JavaScript-u i Node.js-u je usluga koju dajem svojem klijentima. Podučavanje JS-a je opcija."
    },
    {
        "img": "MERN.png",
        "title": "MERN full stack development",
        "text": "Izrada, obnova i odražavanje fullstek MERN web aplikacije. Sve je prilagođeno po mjeri."
    },
    {
        "img": "nextjs-white.png",
        "title": "SSR framework development",
        "text": "SSR framework koji koristim za izradu novih i obnovu starih aplikacija je Next.js."
    },
    {
        "img": "python.png",
        "title": "Python Scriptovanje",
        "text": "Svojim klijentima pružam Python scriptovanje i pravljenje Python aplikacija i programa. Podučavanje Python-a je opcija."
    },
    {
        "img": "cpp.png",
        "title": "C++ Programiranje",
        "text": "Podučavam C++ programiranje."
    }
]
export const services = writable(usluge)


export const projectsen = [
    {
        img: "/img/npm_logo.png",
        title: "Svelte Sharp UI",
        text: "This is my custom npm Svelte UI Component package!",
        link: "https://www.npmjs.com/package/svelte-sharp-ui"
    },
    {
        img: "/img/npm_logo.png",
        title: "Svelte ScrollFX (Deprecated)",
        text: "My npm package that add some scroll effects to svelte apps.",
        link: "https://www.npmjs.com/package/ssfx"
    },
    {
        img: "/img/npm_logo.png",
        title: "Svelte FX",
        text: "This is a derivative of Svelte ScrollFX but it addes more effects.",
        link: "https://www.npmjs.com/package/svfx"
    },
    {
        img: "https://traceer.herokuapp.com/static/favicon.png",
        title: "Traceer",
        text: "My first project that is posted online. It is a MERN + Next.js full stack app.",
        link: "https://traceer.herokuapp.com/"
    },
    {
        img: "/img/console.png",
        title: "Custom console app",
        text: "Made this console in python, it does some basic stuff.",
        link: "https://github.com/damiano-cmd/simple-console"
    },
    {
        img: "/img/QtBS4.png",
        title: "BeautifulSoupGUI",
        text: "This is a GUI for BeautifulSoup4 build with PyQt5, it scrapes the web and return the results.",
        link: "https://github.com/damiano-cmd/BSGUI/"
    },
    {
        img: "/img/SBBE.png",
        title: "Shadow Browser",
        text: "Browser extention that decrypts any know encrypeted text on a page and looks for encryption keys. Currently deprecated.",
        link: "https://github.com/damiano-cmd/ShadowBrowser"
    },
    {
        img: "/img/svelteBlank.png",
        title: "Todo app",
        text: "Just a simple, well designed todo app.",
        link: "https://damiano-cmd.github.io/my-todo-app/"
    },
    {
        img: "https://damiano-cmd.github.io/my-old-portfilio/favicon.ico",
        title: "My old portfolio site",
        text: "My first portfolio.",
        link: "https://damiano-cmd.github.io/my-old-portfilio/"
    },
]
export const projekti = [
    {
        img: "/img/npm_logo.png",
        title: "Svelte Sharp UI",
        text: "NPM modul sa Svelte UI Componentima.",
        link: "https://www.npmjs.com/package/svelte-sharp-ui"
    },
    {
        img: "/img/npm_logo.png",
        title: "Svelte ScrollFX (Napušteno)",
        text: "NPM modul koji dodaje animacije i scrolling efekte.",
        link: "https://www.npmjs.com/package/ssfx"
    },
    {
        img: "/img/npm_logo.png",
        title: "Svelte FX",
        text: "Dirivitiv Svelte ScrollFX-a sa više efekata.",
        link: "https://www.npmjs.com/package/svfx"
    },
    {
        img: "https://traceer.herokuapp.com/static/favicon.png",
        title: "Traceer",
        text: "Prvi projekat koji sam stavio online. To je MERN + Next.js fullstek aplikacija.",
        link: "https://traceer.herokuapp.com/"
    },
    {
        img: "/img/console.png",
        title: "Console aplikacija",
        text: "Ovo sam napravio u Python-u, radi neke osnovne stvari.",
        link: "https://github.com/damiano-cmd/simple-console"
    },
    {
        img: "/img/QtBS4.png",
        title: "BeautifulSoupGUI",
        text: "GUI aplikacija za BeautifulSoup4 napravljena u PyQt5, ovo kopa po vebsajtovima i izbacuje rezultate.",
        link: "https://github.com/damiano-cmd/BSGUI/"
    },
    {
        img: "/img/SBBE.png",
        title: "Shadow Browser",
        text: "Brauser ekstensija koja dekriptuje sav encriptovan text , koji je enkriptovan ovim istim alatom, na veb stranici. Trenutno napušten.",
        link: "https://github.com/damiano-cmd/ShadowBrowser"
    },
    {
        img: "/img/svelteBlank.png",
        title: "'Todo' aplikacija",
        text: "Jednostavna i ljepo dizajnirana 'todo' aplikacija.",
        link: "https://damiano-cmd.github.io/my-todo-app/"
    },
    {
        img: "https://damiano-cmd.github.io/my-old-portfilio/favicon.ico",
        title: "Moj stari portfolio sajt",
        text: "Moj prvi portfolio.",
        link: "https://damiano-cmd.github.io/my-old-portfilio/"
    },
]
export const projects = writable(projekti)