

document.getElementById('result').onclick = getResult;
 getResult();
function getResult() {
    let cMenus = document.getElementsByClassName('menu');

    let prices = 0;
    let numbers = 0;

    for(let cMenu of cMenus){
        if(cMenu.checked){
            prices += +(cMenu.getAttribute('data-price'));
            numbers += +(cMenu.getAttribute('data-number'));
        }
    }
    document.getElementById('number').innerHTML = numbers +'; ';
    document.getElementById('price').innerHTML = prices +'; ';
}
