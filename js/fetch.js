/************************************ */
/* javascript code by Kaloyan KRASTEV */
/*       kaloyansen@gmail.com         */
/*   https://github.com/kaloyansen    */
/************************************ */

"usr strict";
var VALOGIN     = "";//login
var VALEUR      = "";//password
var DBGCTR      = "";//debug massages container
var BREAK       = false;//interrupt interval
var URLAPI      = "https://www.ericfreelance.fr/api/check_user.php";
var SECTR       = [];

/* constants d'abord */
const PASSWORD  = "123456";//pour son tail seulement /
const PASSIZE   = PASSWORD.length;// <--------------/
const FREQUENCE = 0.054321;//talk fréquence, Hz
const CHIFFRE   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                   " ", " ", " ", " ", " ", " "];

const VALIDER   = window.document.getElementById("valider");
const EFFACER   = window.document.getElementById("effacer");
const SECTION   = window.document.getElementById("section");
const METHOD    = window.document.getElementsByName("method");
const INPARR    = window.document.querySelectorAll("input");
const INPUT     = window.document.getElementById("input");
const INPID     = window.document.getElementById("inpid");
const LABEL     = window.document.getElementById("label");
const LABID     = window.document.getElementById("labid");
const BODY      = window.document.querySelector("body");
const INFO      = window.document.getElementById("info");
const TALK      = ["https://www.kalodev.site to learn more",
                   "javascript code by Kaloyan KRASTEV",
                   "un poisson peut être très méchants",
                   "même si le crocodile est naturel",
                   "there is no limit for the imagination",
                   "use the mouse and the virtual keyboard to enter your password",
                   "ne jamais dis jamais je ne boirai",
                   "if you share it your code is no more secret",
                   `take a look at my <a href = "https://www.kalodev.site">django</a> project if up`,
                   `une liste <a href = "https://freeshell.de/morla/ap">opérationnelle</a> d'apformation projets`];

class kalo {/* une classe général des instruments essenciels
               il a seulement static méthods */
    constructor() {
        kalo.setContent(BODY,
                        `<div class = "info">
                           <p class = "warning">nothing to construct</p>
                           <p>all kalo methods are static</p>
                         </div>`);
    }

    static get rien() { return 0; }
    static get hasbool() { return (Math.random() > 0.5) ? true : false; }
    static hasint(min, max) { return Math.round(kalo.hasard(min, max)); }
    static*rndGenerator(array) {
        while (true) {
            yield array[parseInt(array.length * Math.random())];
        }
    }

    static hasard(min, max) {
        let moi = Math.random();
        let delta = max - min;
        let hasa = min + moi * delta;
        return hasa;        
    }

    static setContent(lm, ...texte) {
        switch (lm) {/* key controls the content */
        case 0:
            window.console.log(texte);
            break;
        case INFO:
            INFO.style.backgroundColor = "#efface";
            INFO.innerHTML = texte;
            break;
        case SECTION:
            if (texte) {//keep old messages
                SECTR.push(`${texte}<br>`);
                let rev = SECTR.slice();
                SECTION.innerHTML = rev.reverse();
                rev = [];
            } else SECTR = [];
            break;
        default:
            lm.innerHTML = texte;
        }            

    }

    static dumProp(lm) {
        let prop;
        let log = "{";
        for (prop in lm) {
            let val = lm[prop];
            if (val) log += `${prop}: ${val}, `;
        }
        return log + "}";
    }

    static invertColor(lm, invisible = false) {
        lm.style.color = "#654321";
        if (invisible) lm.style.color = "#ccc";
        lm.style.backgroundColor = "#ccc";
    }

    static revertColor(lm, invisible = false) {
        lm.style.color = "#fedcba";
        if (invisible) lm.style.color = "#123456";
        lm.style.backgroundColor = "#123456";
    }    

    static ouverture() {
        window.console.clear;
        window.console.log("javascript code by Kaloyan KRASTEV");
        (typeof window === 'undefined') ? window.console.log("welcome to node.js") : window.console.log('screen size: ' + window.screen.width + 'x' + window.screen.height);
    }

    /* **************************************************************** */
    /* ********************   end of class kalo    ******************** */
    /* **************************************************************** */
}

kalo.ouverture();

const itr = kalo.rndGenerator(TALK);
const winterval = window.setInterval(() => {
    let item = itr.next();
    if (item.done || BREAK) clearInterval(winterval);
    kalo.setContent(INFO, "inforouleau", item.value);
    INFO.style.backgroundColor = "#eee";

}, Math.round(1000 / FREQUENCE));



PAYLOAD = {};
PAYLOAD.login = "eric@free.fr";
PAYLOAD.password = 123456;
/*
PAYLOAD.title = "this is a ticket";
PAYLOAD.body = "created by me";
PAYLOAD.actualPosition = "here";
PAYLOAD.status = "incimming";
PAYLOAD.color = "blue";
*/


INPUT.innerHTML = JSON.stringify(PAYLOAD);

INPUT.style.width = "100%";
INPID.style.width = "100%";
VALIDER.addEventListener("click", function() {
    connexion(INPID.value, getInputChoix(METHOD), PAYLOAD, SECTION);
}, false);


EFFACER.addEventListener("click", function() {
    const method = getInputChoix(METHOD);
    const adresse = INPID.value;
    const payload = JSON.stringify(PAYLOAD);
    const check = `*** check ${method} => ${adresse} => ${payload} ***`; 
    kalo.setContent(SECTION, check);
}, false);


/*
var roule = INPARR.length;

while (0 < roule --) {
    const but = INPARR[roule];
    kalo.invertColor(but);
    window.console.log(but.value);
}
*/




/* **************************************************************** */
/* **************************   function    *********************** */
/* **************************************************************** */


function getInputChoix(lm) {
    var method = NaN;
    lm.forEach((met) => {
        if (met.checked) method = met.value;
    });
    return method;
}

function connexion(adresse, method, payload, lm) {
    window.console.log(`go ${method} with ${JSON.stringify(payload)} to ${adresse}`);
    const headers = {"Content-type": "application/json", "Accept": "application/json"}
    var format = {method: method, headers: headers};
    if (payload && method != "get") format = {method: method,
                                              body: JSON.stringify(payload),
                                              headers: headers};
    window.fetch(adresse, format)
        .then(response => {
            if (response.vdfvdqc) throw Error("oh non !");
            return response.json();//js object
        })
        .then(json => {
            window.console.log(json);
            //kalo.setContent(lm, JSON.stringify(json));//json.status_message);
            if ("ok" in json) kalo.setContent(lm, `ok=${json.ok}`);
            if ("check" in json) kalo.setContent(lm, `check=${json.check}`);
            if ("message" in json) kalo.setContent(lm, `message=${json.message}`);
            if ("status" in json) kalo.setContent(lm, `status=${json.status}`);
            if ("status_message" in json) kalo.setContent(lm, `statusmessage=${json.status_message}`);
            kalo.setContent(lm, `******** ${method} => ${adresse} ********`); 
        })
        .catch(e => {
            kalo.setContent(lm, e.message)
        })
}


function readTxtFile(inpuTypeFile, resultat) {
    inpuTypeFile.addEventListener('change', function() {
        var fileReader = new FileReader();
	fileReader.onload = function() {
	    resultat.textContent = fileReader.result;
        }			
        fileReader.readAsText(inpuTypeFile.files[0]);
    });
}


