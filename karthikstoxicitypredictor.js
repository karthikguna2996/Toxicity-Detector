let animatedText = document.querySelectorAll(".loaderr");

function animate(element) {
    let textArray = element.innerText.split("");
    element.firstChild.remove();

    let elArray = textArray.map((letter, index) => {
        if (letter === " ") letter = "&nbsp;";
        let el = document.createElement("span");
        el.className = "letter";
        el.innerHTML = letter;
        el.style.animationDelay = index / textArray.length + "s";
        element.appendChild(el);
        return el;
    });
    element.innerHtml = elArray;
}

Array.from(animatedText).map(animate);