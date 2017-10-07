
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var logo = document.querySelector('img');
        var headLine = document.querySelector('h1');
        var subTitle = document.querySelector('h2');
        var textInner = document.getElementById('text-block');
        var downButton = document.querySelector('a.button-down');

        setTimeout(function () {
            logo.classList.add('show');
        }, 500);

        setTimeout(function () {
            textInner.classList.add('show');
        }, 1000);

        setTimeout(function () {
            headLine.classList.add('show');
        });

        setTimeout(function () {
            subTitle.classList.add('show');
        }, 1500);

        setTimeout(function () {
            downButton.classList.add('show');
        }, 2000);
    }
};

function logoPosition(event) {
    var logo = document.querySelector('img');
    var logoPosition = document.querySelector('img').getBoundingClientRect();
    var mouseX = event.clientX;

    if(mouseX < logoPosition.left) {
        logo.classList.add('left');
    } else {
        logo.classList.remove('left');
    }
}

function mouseLeave () {
    var logo = document.querySelector('img');
    logo.classList.remove('left');
}

window.addEventListener('mousemove', logoPosition);
window.addEventListener('mouseout', mouseLeave);
