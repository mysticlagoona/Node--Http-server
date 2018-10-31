const URL = "http://localhost:8080 "; // http://localhost:8000 

window.addEventListener('load', () => {
    let btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', () => callAndShow(URL + '/add'));
    
    let btnSubtract = document.getElementById('btnSubtract');
    btnSubtract.addEventListener('click', () => callAndShow(URL + '/substract'));
})

async function getJSON(url){
    var result

    await new Promise(resolve => {
        let XHR = new XMLHttpRequest();
        XHR.open('GET',url,true);
        XHR.send();
        XHR.onreadystatechange = ()=>{
            if(XHR.readyState==4) {
                result = XHR.responseText;
                resolve();
            }
        }
    })

    return result;
}

async function showResults(result){
   let res = await result;

    var div = document.getElementById("result");

    div.innerText = res

   document.body.appendChild(div)
}

function showResult() {
    let results = getJSON(URL + '/state');
    showResults(results);
}

showResult();

async function callAndShow(url){
    await getJSON(url);

    showResult();
}