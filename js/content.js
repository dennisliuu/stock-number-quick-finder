console.log("Hello Extension");

function getUserSelection() {
    if (window.getSelection) {
        const selection = window.getSelection().toString();
        const numbers = /^[0-9]+$/
        if (selection.match(numbers) && selection.length == 4) {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.innerText = `Looking for ${selection}`
            div.style.background = "white"
            div.style.width = "25vw"
            div.style.height = "25vh"
            div.style.zIndex = "999"
            div.style.position = "fixed"
            div.style.bottom = "0"
            div.style.right = "0"
            div.id = "stk_no"
        }
    }
}

window.onload = function () {
    document.onclick = function (e) {
        var stk_no = document.querySelectorAll('stk_no');
        if (e.target.id != 'stk_no') {
            for (let i = 0; i < stk_no.length; i++) {
                stk_no[i].style.display = 'none'
                console.log(stk_no[i]);
                
            }
            console.log('hide');
        }
    };
};

document.addEventListener("mouseup", getUserSelection)
