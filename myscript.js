var policyText = trustedTypes.createPolicy('TextOnly', {                 // Creates the policyText policy with TextOnly name 
    createHTML: (input) => input.replace(/^[a-z0-9 _!,\.\-\?]/ig, '')  // Some sanitizer here
    }); 
console.log("Executing MyScript.js")

async function ranboo(myPFP) {
    for (myNum = 0; myNum > -1; myNum ++) {
        myPFP.style.webkitFilter = `hue-rotate(${myNum+20}deg)`
        await sleep(75);
    }
}
function sleep(ms) {return new Promise((resolve) => {setTimeout(resolve, ms);});}
var memberPFP = [...document.getElementsByClassName("qg7mD r6DyN xm86Be JBY0Kc eXUaib"), ...document.getElementsByClassName("qg7mD r6DyN  JBY0Kc cN5JCe JeKDtf")]
var memberName = document.getElementsByClassName("XEazBc adnwBd")
var teachers = {"Teacher's name": "Teachers's subject"}

for (i = 0; i < memberName.length; i++) {
    console.log(memberName[i].innerHTML, memberPFP[i])
    if (memberName[i].innerHTML.includes('(Presentation)')) {console.log("Someone's presentation")}
    else if (memberName[i].innerHTML === "You" || memberName[i].innerHTML === "1Hira0" || memberName[i].innerHTML === "water") {
        memberName[i].innerHTML = policyText.createHTML(" water")
        if (memberPFP[i]) {
        memberPFP[i].src = "icon.png"
        ranboo(memberPFP=memberPFP[i]);
    }}
    else if (memberName[i].innerHTML === "SNM Logic"|| memberName[i].innerHTML === "sanam") {
        memberName[i].innerHTML = policyText.createHTML(" sanam")
        if (memberPFP[i]){
        memberPFP[i].src = "https://lh3.googleusercontent.com/VNh5fWrntpphFq0o-i2v-qYZO1J5B-gIE-Vwa3DIH8O7GmcisHE5dLMbB3xE9qQBzy91rw"
        ranboo(memberPFP=memberPFP[i]);
    }}
    else if (memberName[i].innerHTML === "Naruto The Friend" || memberName[i].innerHTML === "Yoshikage Kira") {
        memberName[i].innerHTML = policyText.createHTML(" Yoshikage Kira")
        if (memberPFP[i]) {
        memberPFP[i].src = "https://lh3.googleusercontent.com/VzIicjctn7w7wa2thHMeMcvS1CadwL7u1Ly78ne8pyleAGDYT0N1y2p4_LPQQk7Doiixres"
        ranboo(memberPFP=memberPFP[i]);
    }}
    else if (teachers.hasOwnProperty(memberName[i].innerHTML)) {
        console.log(memberName[i].innerHTML)
        teachername = " Teacher (" + teachers[memberName[i].innerHTML] + ")"
        memberName[i].innerHTML = policyText.createHTML(teachername)
        if (memberPFP[i]) {
        memberPFP[i].src = "https://cdn.discordapp.com/role-icons/661257254422708246/37905c7737723098aab8660ec4e0494f.png?size=4096&quality=lossless";
    }}
    else {
        memberName[i].innerHTML = policyText.createHTML(" Classmate")
        myNum = Math.floor(Math.random()*360)
        console.log(myNum)
        if (memberPFP[i]){
            memberPFP[i].src = "icon.png"
                        memberPFP[i].style.webkitfilter = `hue-rotate(${myNum}deg)`;
        };
    };
}
