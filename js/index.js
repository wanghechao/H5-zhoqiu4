window.addEventListener("load" , function() {
    function jdt_text() {
        let jdt_text = document.querySelector(".jdt_text");
        let num = 0;
        let timer = setInterval(function() {
            num++;
            jdt_text.innerHTML = num + "%";
            if(num >= 100) {
                clearInterval(timer)
                location.replace("two.html")
            }
        } , 70)


        let allhondian = document.querySelector(".allhondian")
        for(let i = 0 ; i <= allhondian.children.length ; i++) {
            allhondian.children[i].style.animation = "hondian 2s linear alternate " + i + "s infinite"
        }
    }
    jdt_text()
})