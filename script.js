window.onload = function(){
    var btn = document.querySelector('#btn');
    var result = document.querySelector('#result');
    var text = document.querySelector('#textarea');
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load",() =>{
        let output = xhr.responseText;
        result.innerHTML = output;
    });

    btn.addEventListener('click', () => {
        var url='superheroes.php?query='+text.value;
        xhr.open('GET',url);
        xhr.send();
    });
}