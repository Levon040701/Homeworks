const imgTitles = [
    '0fd2db0fdd826bc21eb851b84599b4fc.jpg',
    '2fd8ec7765913c260b7012b6c83edb07.jpg',
    '4d1f25afae93595240d8597ab6d82de0.jpg',
    '6bb5c96b8228af48a96156568f1eea57.jpg',
    'd241c1668aa1b55c6ca6ccb052db9006.jpg'
];
const images = [];
for (let i = 0; i < imgTitles.length; i++) {
    let img = document.createElement('img');
    img.src = 'images/' + imgTitles[i];
    img.dataset.index = i;
    images.push(img);
}

images[images.length - 1].classList.add('prev');
document.getElementById('images').appendChild(images[images.length - 1]);
images[0].classList.add('shown');
document.getElementById('images').appendChild(images[0]);
images[1].classList.add('next');
document.getElementById('images').appendChild(images[1]);

let currentIndex = document.getElementsByClassName('shown')[0].dataset.index;
document.getElementById('progress').innerText = (+currentIndex + 1) + ' / ' + images.length;

function moveClasses(elementClass='', forward=true) {
    let current = {};
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.value.includes(elementClass)) {
            current = images[i];
        }
    }
    let newElement;
    for (let i = 0; i < images.length; i++) {
        if (images[i] === current) {
            if (forward) {
                newElement = images[i + 1] || images[0];
            } else {
                newElement = images[i - 1] || images[images.length - 1];
            }
        }
    }

    current.classList.remove(elementClass);
    newElement.classList.add(elementClass);
}

function nextSlide() {
    moveClasses('next');
    moveClasses('shown');
    moveClasses('prev');

    let visibleElIndex = +(document.getElementsByClassName('shown')[0].dataset.index);
    document.getElementById('images').firstChild.remove();
    document.getElementById('images').appendChild(images[visibleElIndex + 1] || images[0]);
    document.getElementById('progress').innerText = (+visibleElIndex + 1) + ' / ' + images.length;
}

function prevSlide() {
    moveClasses('prev', false);
    moveClasses('shown', false);
    moveClasses('next', false);

    let visibleElIndex = +(document.getElementsByClassName('shown')[0].dataset.index);
    document.getElementById('images').lastChild.remove();
    document.getElementById('images').insertBefore(images[visibleElIndex - 1] || images[images.length - 1], document.getElementsByClassName('shown')[0]);
    document.getElementById('progress').innerText = (+visibleElIndex + 1) + ' / ' + images.length;
}

function getFirstSlide() {
    document.getElementsByClassName('prev')[0].classList = '';
    document.getElementsByClassName('shown')[0].classList = '';
    document.getElementsByClassName('next')[0].classList = '';
    document.getElementById('images').innerHTML = '';

    images[images.length - 1].classList.add('prev');
    document.getElementById('images').appendChild(images[images.length - 1]);

    images[0].classList.add('shown');
    document.getElementById('images').appendChild(images[0]);

    images[1].classList.add('next');
    document.getElementById('images').appendChild(images[1]);
    
    document.getElementById('progress').innerText = 1 + ' / ' + images.length;
}

function getLastSlide() {
    document.getElementsByClassName('prev')[0].classList = '';
    document.getElementsByClassName('shown')[0].classList = '';
    document.getElementsByClassName('next')[0].classList = '';
    document.getElementById('images').innerHTML = '';

    images[images.length - 2].classList.add('prev');
    document.getElementById('images').appendChild(images[images.length - 2]);

    images[images.length - 1].classList.add('shown');
    document.getElementById('images').appendChild(images[images.length - 1]);

    images[0].classList.add('next');
    document.getElementById('images').appendChild(images[0]);
    
    document.getElementById('progress').innerText = images.length + ' / ' + images.length;
}

const speed = 4000;

let slideShow = null;

function wait() {
    window.clearInterval(slideShow);
    slideShow = setInterval(function () {
        nextSlide();
    }, speed);
}

function play() {
    slideShow = setInterval(function () {
        nextSlide();
    }, speed);
    document.getElementById('firstBtn').addEventListener('click', function () {
        wait();
    });
    document.getElementById('prevBtn').addEventListener('click', function () {
        wait();
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
        wait();
    });
    document.getElementById('lastBtn').addEventListener('click', function () {
        wait();
    });
    document.getElementById('playBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
}

function stop() {
    clearInterval(slideShow);
    document.getElementById('playBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
}

