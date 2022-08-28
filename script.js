let add_form = document.getElementById('add-form');
let add_button = document.getElementById('add');

add_button.addEventListener('click', function () {
  add_form.classList.add('add-form2');
});

var verb = document.getElementById('verb');
let btn_add = document.getElementById('btn-add');

verb.addEventListener('keyup', function () {
  console.log(verb.value);
});

btn_add.addEventListener('click', function () {
  key = 'iwantto' + verb.value;
  localStorage.setItem(key, verb.value);
  mylist = localStorage.getItem(key);
  document.getElementById('mylist').innerHTML = mylist;
});
