//let x = 10;
//console.log(x)
document.getElementById('testParagraph').style.color = 'purple';
console.log(document.querySelectorAll('p.sampleClass')[0].innerText);

document.getElementById('clickThisButton').addEventListener('click', (details) => {
    // document.querySelectorAll('p.sampleClass')[0].innerHTML='<i>My text has changed</i>'
    //console.log(details.target)
    //details.target.style.backgroundColor = 'blue';
    if (details.target.style.backgroundColor == 'red') {
        details.target.style.backgroundColor = 'blue'
    } else {
        details.target.style.backgroundColor = 'red'
    }
})

document.getElementById('nameInput').addEventListener('keyup', (e) => {
    console.log(e.target.value);
    document.getElementsByTagName('p')[1].innerText = `Hey everyone, say hello to ${e.target.value}`;
    if (e.target.value == '') {
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed.'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value} right now!`
    }

})