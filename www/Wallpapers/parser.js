const axios = require('axios'); // Подключение модуля axios для скачивания страницы
const fs = require('fs'); // Подключение встроенного в Node.js модуля fs для работы с файловой системой
const jsdom = require("jsdom"); // Подключение модуля jsdom для работы с DOM-деревом (1)
const { JSDOM } = jsdom; // Подключение модуля jsdom для работы с DOM-деревом (2)

const link = 'https://www.goodfon.ru/catalog/animals/'; // Типовая ссылка на страницу со статьями (без номера в конце)

function paginator() {
    // console.log('Запрос статей по ссылке: ' + link); // Уведомление о получившейся ссылке
    // Запрос к странице сайта
    axios.get(link)
    .then(response => {
        var currentPage = response.data; // Запись полученного результата
        const dom = new JSDOM(currentPage); // Инициализация библиотеки jsdom для разбора полученных HTML-данных, как в браузере
        var linksLength = dom.window.document.getElementsByClassName('wallpapers__item__wall').length
        console.log(linksLength)
        for (i = 0; i < linksLength; i++) {
                var relLink = dom.window.document.getElementsByClassName('wallpapers__item__wall')[i].getElementsByTagName('img')[0].outerHTML;
                var ImgLink = relLink.replace('<img src="', `<img id="${i+1}" src= "`).replace('" class="wallpapers__item__img" itemprop="thumbnail">', '">')
                console.log(ImgLink + "\n")
                fs.appendFileSync('C:/Users/user_10/GitHub/cloudblesk.site/www/Wallpapers/images.html', ImgLink + "\n", (err) => {
                    if (err) throw err;
                });
        }
        console.log('Парсинг завершён.'); // Уведомление об окончании работы парсера
    });
};
paginator(); // Запуск перехода по страницам и сбора статей