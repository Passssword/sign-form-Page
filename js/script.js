

const inputConts = document.querySelectorAll('.input_contener');

window.onload = function () {
    inputConts.forEach(element => {
        // Добавляем класс
        element.childNodes[1].classList.add('label_default');

        // Событие focus - обрабатывает момент выделение поля (фокусировки)
        element.childNodes[3].addEventListener('focus', focusEvent);

        // Событие blur - обрабатывает момент потери выделения поля.
        element.childNodes[3].addEventListener('blur', blurEvent);
    });
};

function focusEvent (event) {
    parentContener = event.target.parentElement;

    /* Проверяем есть ли класс label_default у елемента.
        Метод contains('label_default') вернет true или false */
    if (parentContener.childNodes[1].classList.contains('label_default')) {
        parentContener.childNodes[1].classList.remove('label_default');
        parentContener.childNodes[1].classList.add('label_focus');
    }
};

function blurEvent(event) {
    parentContener = event.target.parentElement;

    // Проверка заполненности поля
    if (parentContener.childNodes[3].value == "" && parentContener.childNodes[1].classList.contains('label_focus')) {
        parentContener.childNodes[1].classList.remove('label_focus');
        parentContener.childNodes[1].classList.add('label_default');
    }
};