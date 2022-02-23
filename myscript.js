var policyText = trustedTypes.createPolicy('TextOnly', {                 // Creates the policyText policy with TextOnly name 
    createHTML: (input) => input.replace(/^[a-z0-9 _!,\.\-\?]/ig, '')  // Some sanitizer here
    }); 
console.log("Executing MyScript.js")
var memberName = document.getElementsByClassName("XEazBc adnwBd")

for (i = 0; i < memberName.length; i++) {
    console.log(memberName[i].innerHTML)
    if (memberName[i].innerHTML.includes('(Presentation)')) {console.log("Someone's presentation")}
    else if (memberName[i].innerHTML === "You" || memberName[i].innerHTML === "Hira 10" || memberName[i].innerHTML === "water") {
        memberName[i].innerHTML = policyText.createHTML(" water");
    }
    else if (memberName[i].innerHTML === "NAVANEETH K" || memberName[i].innerHTML === "SNM Logic"|| memberName[i].innerHTML === "sanam") {
        memberName[i].innerHTML = policyText.createHTML(" sanam");
    }
    else if (memberName[i].innerHTML === "Aryan Aryan" || memberName[i].innerHTML === "Naruto The Friend" || memberName[i].innerHTML === "Yoshikage Kira") {
        memberName[i].innerHTML = policyText.createHTML(" Yoshikage Kira");
    }
    else {memberName[i].innerHTML = policyText.createHTML(" Classmate");
    };
}