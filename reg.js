'use strict';

window.addEventListener('load', () => {

    let form = document.getElementById('form1');
    form.addEventListener('submit', () => {
        let access = confirm('Вы уверены в надежности данных, введенных в форму?');
        if (access === true) {
            form.submit();
        } else {
            alert('Данные не надежны! Отправка заблокирована!');
        }
    });

});