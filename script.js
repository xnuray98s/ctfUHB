const posts = document.querySelector("#posts");
const key = 'CTF';
const flag = [22, 28, 4, 56, 13, 118, 54, 11, 0, 115, 33, 40
    , 39, 11, 119, 55, 117, 25, 14, 13, 25, 13, 96, 11, 112
    , 11, 119, 48, 11, 52, 115, 100, 50, 62];
let myJournal = [];


function Post(title, content) {
    this.title = title;
    this.content = content;
}

function addPostToJournal(post) {
    myJournal.push(post);
}

function objToParagraph(obj, attr) {
    switch (attr) {
        case 0:
            return obj.title;
        case 1:
            return obj.content;
    }
}

function display() {
    for (let i = 0; i < myJournal.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h2 = document.createElement('h2');
        h2.innerHTML = objToParagraph(myJournal[i], 0);
        p.innerHTML = objToParagraph(myJournal[i], 1);
        h2.style.cssText = `padding-top: 10%; font-size: 35px;
                                             border:1px black solid; border-radius: 5px; height:100px;
                                             margin-top: -10.1%; background-color: #63B0CD; 
                                             font-family: 'Quicksand', sans-serif; margin-left: -1px;`;
        p.style.cssText = "font-family: 'Raleway', sans-serif;;";
        div.appendChild(h2);
        div.appendChild(p);
        div.className = "post_card";
        div.style.cssText = `border: 3px solid black; width: 500px; 
                             height: 300px; font-size: 30px; padding-top: 10%;
                             border-radius: 10px; box-shadow: 20px 20px #68686823;`;
        posts.appendChild(div);
    }
}

const Shhh = (str = "") => {
    let output = [];
    let code;
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i) ^ key[i % key.length].charCodeAt(0);
        output.push(String.fromCharCode(code));
    }
    return output.join("");
}

function hush(f = []) {
    let output = [];
    let code;
    for (let i = 0; i < f.length; i++) {
        code = f[i] ^ key[i % key.length].charCodeAt(0);
        output.push(String.fromCharCode(code));
    }
    return output.join("");
}

let hi = new Post("Well hello", `Looks like you thought it would be easy? try to look harder`);

addPostToJournal(hi);
display();
