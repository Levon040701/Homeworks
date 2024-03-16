function logValue() {
    let input = document.forms['myForm'];
    let newEntry = input['addEntry'].value;
    console.log(newEntry);

    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.addEventListener('click', function () {
        entry.classList.add('done');
    });
    const text = document.createElement('div');
    text.classList.add('text');
    text.appendChild(document.createElement('p'));
    const btn = document.createElement('div');
    btn.classList.add('delBtn');
    btn.appendChild(document.createElement('button'));

    entry.appendChild(text);
    entry.appendChild(btn);
    text.getElementsByTagName('p')[0].innerHTML = newEntry;
    btn.getElementsByTagName('button')[0].innerHTML = '&times;';
    document.getElementById('entries').appendChild(entry);

    btn.addEventListener('click', function () {
        document.getElementById('entries').removeChild(entry);
    })

    input.reset();
    return false;
}

