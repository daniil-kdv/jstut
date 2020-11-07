let box = document.getElementById("box"),
    button = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart");
    oneHeart = document.querySelector(".heart");
    wrapper = document.querySelector('.wrapper');

    console.log(button);
    console.log(circle[2]);
    console.log(heart);
    console.log(oneHeart);

box.style.backgroundColor = 'yellow';
button[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for(let i = 0; i < heart.length;i++)
    heart[i].style.backgroundColor = 'blue';

heart.forEach( function(item) {
    item.style.backgroundColor = ' green';
});

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//div.innerHTML = 'Hello World!';
div.textContent = 'Hey Yo!';

//document.body.appendChild(div);
wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
//document.body.removeChild(circle[1]);
document.body.replaceChild(button[0], circle[1]);


console.log(div);
console.log(text);