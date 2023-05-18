const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const header = document.getElementById('header');
const body = document.getElementById('body');
const cont = document.getElementById('cont');
const btn = document.getElementById('button-container');
const btn2 = document.getElementById('button6');
const btn3 = document.getElementById('button7');
const btn4 = document.getElementById('button8');
const btn5 = document.getElementById('btn');
const btn6 = document.getElementById('btn2');
const btn7 = document.getElementById('btn3');
const btn8 = document.getElementById('btn4');
const big = document.getElementById('big_cont');

const api = 'http://127.0.0.1:5500/my_site.json'




function ButtonOnclick() {
    try {
        console.log("error");
    } 
    finally {
        alert('В нас ще немає форуму!');
    }
}
function ButtonOnclick2() {
    try {
        console.log("error");
    } 
    finally {
        alert('В нас поки немає вікі!');
    }
}
function removeContainer5() {
    big.innerHTML = `
    <div id="cont" class="container3">
    <p class="p3">Звичайні рівні складають основу закулісся і сильно розрізняються за розміром, небезпекою та заселеністю. Типові рівні - незалежно від того, яке значення «типового» можна очікувати від Закулісся, - мають тенденцію бути нескінченними за розміром (хоча «обмежені» рівні не є чимось незвичайним) і часто викликають у тих, хто на них знаходиться, відчуття дежавю . На закони фізики та природи, якими ми їх знаємо, не можна покладатися у глибинах Закулісся; Тим не менш, деякі з більш гостинних та стабільних рівнів є домом для процвітаючих спільнот, а деяким мандрівникам вдалося вижити навіть на найнебезпечніших рівнях.</p>
</div>
<div class="org">
<br>
<hr>
<p class="p1"> Умовні позначення: </p>
<span style="color: white"> ➤ </span>
 - рівень готовий до читання
<br>
<span style="color: orange"> ➤ </span>
- рівень активно робиться
<br>
<span style="color: red"> ➤ </span>
- рівень не готовий
<br>
<br>
<hr>
<ul>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 0 - Учбовий рівень</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 1 - Обитаєма зона</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 2 - Водопровод мрії</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 3 - Електрична станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: orange;">➤ Рівень 4 - Заброшені офіси</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 5 - Жахливий готель</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 6 - Темна сторона</a></p></li>
<li><p><a href='#' class='level-link' style="color: white;" onclick="Level7()">➤ Рівень 7 - Таласофобія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 8 - Система печер</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 9 - Передмістя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 10 - Пшеничні поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 11 - Нескінченне місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 12 - Матриця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 13 - Нескінченні апартаменти</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 14 - Рай</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 15 - Зали майбутнього</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 16 - Змінена топографія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 17 - Грузове судно</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 18 - Спогади</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 19 - Горище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 20 - Підсобка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 21 - Пронумеровані двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 22 - Руїни, що залишили позаду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 23 - Окаменілий сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 24 - Місяць</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 25 - Четвертковий центр</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 26 - Потойбічне</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 27 - Бункер-Спрінгс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 28 - Сховище каменю грози</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 29 - Гіперіан</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 30 - Зрушений за межі реальності</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 31 - Ролердром</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 32 - Ліс Королеви Скелетів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 33 - Нескінченний мол</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 34 - Система стоків</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 35 - Порожнє паркування автомобілів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 36 - Аеропорт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 37 - Ласкаво просимо в джунглі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 38 - Комбінація Конгломератів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 39 - Зачарований ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 40 - Roller Rockin' Pizza!</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 41 - Злив темряви</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 42 - Горизонт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 43 - Водний світ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 44 - Іржавіюча торгова точка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 45 - Корпорація безодня</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 46 - Арабська пустеля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 47 - Гадаючий ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 48 - Пляж Західного Сонця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 49 - Грязьові траншеї</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 50 - Шосе померлих</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 51 - Забуте місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 52 - Засніжені Рівнини</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 53 - Самотній</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 54 - Сходинка спіралей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 55 - Країна льоду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 56 - Обмороження</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 57 - Галерея мистецтв</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 58 - Грязьова горка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 59 - Зворотній шлях</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 60 - Тропа у заливу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 61 - Поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 62 - Джунглі на задньому дворі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 63 - Спокій</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 64 - Прихована Темрява</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 65 - Окрававлений сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 66 - Експонат</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 67 - Пекарня бажань</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 68 - Пожирач</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 69 - Поїздка на нещастя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 70 - Сховище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 71 - Пустий підвал</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 72 - [НЕМАЄ ДАНИХ]</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 73 - Червоні Землі</a></p></li>
<li><p><a href='#' class='level-link' style="color: white;" onclick="Level74()">➤ Рівень 74 - Веселощі на сцені</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 75 - Галлієві печери</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 76 - Безкрайня каналізація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 77 - Підземний поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 78 - Космічна станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 79 - Оглядова Вишка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 80 - Шосе Khögshin</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 81 - Зоологічний офіс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 82 - Самостійна торгівля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 83 - Потонула Субмаріна</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 84 - Лабіринт живої огорожі, що зсувається</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 85 - Корабель у морі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 86 - Башня Рівергейт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 87 - Коридори Часу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 88 - Корі-Двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 89 - Смак дому</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 90 - Ангельскі поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 91 - Чорний</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 92 - Багрове сяйво</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 93 - Вершина</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 94 - Кукольна анімація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 95 - Самий низ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 96 - Повітропровід</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 97 - Маяк</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 98 - Закусочна у центрі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 99 - Місто Гулей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 100 - Тихі звуки</a></p></li>
</ul>
</div>`
}
function removeContainer1() {
    big.innerHTML = `
    <div id="cont" class="container2">
            <img src="https://preview.redd.it/bro-just-leave-the-exit-is-right-there-v0-009q60qp390a1.png?width=640&crop=smart&auto=webp&s=aca43b86ec429413806df9168b5ce0f22b36e829" alt="post image" class="img2">
            <p class="p1">Якщо не виявити достатньої обережності і випасти з реальності, то можна опинитися в Закуліссі, де не буде нічого, крім затхлого запаху старого килима, божевілля жовтих шпалер, нескінченного нестерпного шуму люмінесцентних ламп, а також 600 мільйонів квадратних миль випадково поєднаних. Упаси вас Господь почути, як щось блукає поруч, адже це вже щось напевно про вас знає…</p>
            <div id="button-container" class="buttons_container">
                <a id="button6" class="buttons2" href="https://backrooms.fandom.com/uk/wiki/Закулісся" style="text-decoration: none;">Оригінальна стаття</a>
                <a id="button7" class="buttons2" onclick="ButtonOnclick()">Форум</a>
                <a id="button8" class="buttons2" onclick="removeContainer5()">Цікаві рівні</a>
            </div>
        </div>
        <div class="button-row">
            <button id="btn" class="buttons5" onclick="removeContainer5()">
                <span>Рівні</span>
            </button>
            <button id="btn2" class="buttons5" onclick="removeContainer4()">
                <span>Сутності</span>
            </button>
            <button id="btn3" class="buttons5" onclick="removeContainer6()">
                <span>Об'єкти</span>
            </button>
            <button id="btn4" class="buttons5" onclick="removeContainer7()">
                <span>Групи</span>
            </button>
        </div>
    <div class="four_cont">
        <div class="first-cont">
            <p class="p4" onclick="Level74()">Цікаві Рівні: "Рівень 74 - Веселощі на сцені"</p>
            <div class="first_line">
                <p>74 рівень є театральною сценою з двома стільцями на кожному кінці. У залі стоїть двадцять рядів сидінь, а двері у фойє стоять через кожні п'ять рядів. Таким чином, сумарно дверей вісім. На сцену легко потрапити. Підлоги на ній з підігрівом та різними люками, які ведуть до Ізоляції. Фойє рівня 74 нагадує звичайну зону очікування з цегляними стінами та плитковою підлогою. Приміщення відносно просторі, у них стоять автомати з попкорном, а на стінах висять постери...</p>
            </div>
        </div>
        <div class="second-cont">
            <p class="p4" onclick="Object1()">Цікаві Об'єкти: "Об'єкт 1 - Мигдалева Вода"</p>
            <div class="second_line">
                <p>Об'єкт 1 або Мигдалева Вода - це один з найкорисніших об'єктів, який можна отримати на більшості рівнів Закулісся. Це набір металевих термосів, наповнених прозорою рідиною. Зазвичай їх можна знайти окремо на багатьох рівнях, але часто їх можна зустріти скупченнями на рівнях, де її досить багато. Незрозуміло, як Мигдальна Вода стала такою поширеною, але в різних рукописах...</p>
            </div>
        </div>
        <div class="third-cont">
            <p class="p4" onclick="Animal3()">Цікаві Сутності: "Сутність 3 - Усміхнені"</p>
            <div class="third_line">
                <p>Усміхнені зустрічаються досить часто, було задокументовано багато випадків їх появи. Вони вкрай ворожі, пізнати їх можна по характерних очах і зубах, що світяться, мерехтять у темряві. Найкращий спосіб уникнути нападу усміхненого - зберігати...</p>
            </div>
        </div>
        <div class="four-cont">
            <p class="p4" onclick="Group10()">Цікаві Групи: "Група 10 - В.Д.Г."</p>
            <div class="four_line">
                <p>В.Д.Г. (так само відома як "Велика Дослідницька Група") - фракція, створена жителями Закулісся і яка розпочала свою роботу зі створення Дослідницького Аванпосту в 2012 році, а в 2014 офіційно перетворилася на свого роду Військовий Уряд Закулісся. Група намагається захистити мандрівників від Сутностей...</p>
            </div>
        </div>
    </div>
    </div>
    </footer>`
}
function removeContainer3() {
    big.innerHTML = 
    `<div class="container3">
        <p class="p3">
            Мої контакти:
            <br>
            <br>
            G-mail: kasijzaharij@gmail.com
            <br>
            <br>
            Телефон: 0976896370
            <br>
            <br>
            Telegram: @guest_kaban
            <br>
            <br>
            Discord: Guest_Kaban#0061
        </p>
    </div>
    <br>
    <br>`
}
function removeContainer4() {
    big.innerHTML = `
    <div class="container3">
    <p class="p3">Термін «Сутність» охоплює широкий спектр істот, від дружніх мешканців з людським інтелектом до безмозких звірів та істот, чиї мотиви та здібності знаходяться за межами нашого розуміння. Кожна істота має унікальну поведінку, довкілля та фізіологічні потреби, описані свідченнями очевидців у нашій базі даних, але якщо ви сумніваєтеся, гарне емпіричне правило для взаємодії з істотами — дати їм спокій, заради себе та їх. У базі даних можуть існувати облікові записи, що конфліктують, і довіряти своїй інтуїції — найкращий спосіб вижити.</p>
    </div>
    <div class="org">
    <br>
    <hr>
    <p class="p1"> Умовні позначення: </p>
    <span style="color: green"> ➤ </span>
        - рівень готовий до читання
    <br>
    <span style="color: orange"> ➤ </span>
        - рівень активно робиться
    <br>
    <span style="color: red"> ➤ </span>
        - рівень не готовий
    <br>
    <br>
    <hr>
    <ul>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 2 - Вікна</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 3 - Усміхнені</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 4 - Смертомолі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 5 - Багаторук</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 6 - Сіристь</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 7 - Джері</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 8 - Гончі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 9 - Безликі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 10 - Шкірокради</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 11 - Горящі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 12 - Данки</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 13 - Транспортери</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 14 - Підземники</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 15 - Убогі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 16 - Нгуитр’ксурх</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 17 - Крадущійся</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 18 - Джентельмен рівня п'ять</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 19 - Хвороба</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 20 - Сутність рівня 7</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 21 - Гакоголовий</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 22 - Попереджаючі повітряні змії</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 23 - Неприпустима лошадь</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 24 - Смертощури</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 25 - Чумні Гобліни</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 26 - Саманта</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 27 - Афінські качки</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 28 - Жителі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 29 - Булькающі кішки</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Сутність 30 - Мати</a></p></li>
    </ul>
    <br>
    <br>
    </div>`
}
function removeContainer6() {
    big.innerHTML = `
    <div class="container3">
    <p class="p3">Об'єкти, також відомі як предмети або артефакти, є інструментами, зброєю, витратними матеріалами та іншими речами, що використовуються людьми в Закуліссі. Багато хто з них дотримується правил звичного нам світу. На інші Об'єкти якось вплинуло Закулісся, змінило чи зовсім створило їх. Деякі з них небезпечні, інші мають високу цінність серед мандрівників. Ключова різниця між сутністю та об'єктом полягає в тому, що сутності живі.</p>
    </div>
    <div class="org">
    <br>
    <hr>
    <p class="p1"> Умовні позначення: </p>
    <span style="color: green"> ➤ </span>
        - рівень готовий до читання
    <br>
    <span style="color: orange"> ➤ </span>
        - рівень активно робиться
    <br>
    <span style="color: red"> ➤ </span>
        - рівень не готовий
    <br>
    <br>
    <hr>
    <ul>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 1 - Мигдалева вода</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 2 - Рівневі ключі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 3 - Репелент від усміхнених</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 4 - Деуклідатори</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 5 - Цукерки</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 6 - Дзеркало</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 7 - Банку з спогадами</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 8 - Лампи</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 9 - Активоване вугілля</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 10 - Чучела</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 11 - Сік Пам'яті</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 12 - Смертельні уламки</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 13 - Офісний термінал</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 14 - Скарабей</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 15 - Вогнесіль</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 16 - Царський Пайок</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 17 - Рідка Тиша</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 18 - Фонограф</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 19 - Водяний пістолет</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 20 - Летюча Смерть</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 21 - Wi-Fi</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 22 - Машина для Відкату</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 23 - Куб Наслідків</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 24 - Настінні маски</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 25 - Вавілонський Бальзам</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 26 - Чорнило Діви</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 27 - Солодощі Юмі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 28 - Везуче Молоко</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 29 - Окуляри 3D Бачення</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Об'єкт 30 - Сальний Зефір</a></p></li>
    </ul>
    <br>
    <br>
    </div>`  
}
function removeContainer7() {
    big.innerHTML = `
    <div class="container3">
    <p class="p3">Поки одні автори представляють Закулісся місцем самотності, інші бачать його заселеним міріадами унікальних груп, фракцій та колоній. Це можуть бути групи, що складаються з людей або сутностей, що зібралися разом задля досягнення різних цілей, чи то виживання, чи що-небудь інше.</p>
    </div>
    <div class="org">
    <br>
    <hr>
    <p class="p1"> Умовні позначення: </p>
    <span style="color: green"> ➤ </span>
        - рівень готовий до читання
    <br>
    <span style="color: orange"> ➤ </span>
        - рівень активно робиться
    <br>
    <span style="color: red"> ➤ </span>
        - рівень не готовий
    <br>
    <br>
    <hr>
    <ul>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 1 - Backrooms Remodeling Co.</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 2 - Backrooms Robotics</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 3 - Темні лицарі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 4 - Н.Т.О.З.</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 5 - Капітанський Екіпаж</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 6 - Очі Аргоса</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 7 - Послідовники Джеррі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 8 - Калазький Інститут</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 9 - Згинули</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 10 - Б.І.Г.</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 11 - Вшанування</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 12 - К.С.І.</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 13 - Провидці Беррі</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 14 - Діви в масках</a></p></li>
    <li><p><a href='#' class='level-link' style="color: red;">➤ Група 15 - С.І.З.О.</a></p></li>
    </ul>
    <br>
    <br>
    </div>
    `
}
function Group10() {
    big.innerHTML = `
    <h1 class="For">В.Д.Г.</h1>
    <div class="org">
        <hr>
    </div>
    <div class="container_fot">
        <p class="p3">Хто ж такі В.Д.Г.? В.Д.Г. (так само відома як "Велика Дослідницька Група") - фракція, створена жителями Закулісся і яка розпочала свою роботу зі створення Дослідницького Аванпосту в 2012 році, а в 2014 офіційно перетворилася на свого роду Військовий Уряд Закулісся. Група намагається захистити мандрівників від Сутностей, пасток та інших Груп (наприклад, від Картографів, з якими Б.І.Г. перебуває у стані війни біля Уровня 3 та інших). У розпорядженні Б.І.Г. знаходиться безліч команд, що виконують різні завдання, з головною та загальною метою - захисту мандрівників. Ця фракція надзвичайно доброзичлива, і запрошує до лав свого "Загону Волонтерів" усіх охочих та підготовлених.</p>
    </div>
    <div class="org">
        <hr>
        <h1 class="For2">СПИСОК КОМАНД:</h1>
        <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Лідери В.Д.Г.:</h1>
        <ul>
            <li class="level-link">Команда "Доглядачів"</li>
        </ul>
        <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Підрозділи В.Д.Г.</h1>
        <p style="font-family:Arial, Helvetica, sans-serif;">Військові Полки підпорядковуються вищим військовим інстанціям В.Д.Г. Більшість Військових Полків разом займаються різними завданнями, експедиціями та іншою небезпечною роботою.</p>
        <ul>
            <li class="level-link">
                Сторони Світла | Мандрівники-першовідкривачі
                <li class="level-link" style="margin-left: 50px;">Команда "Рейд"</li>
            </li>
            <li class="level-link">
                Дикі воїни | Знищувачі Сутностей
                <li class="level-link" style="margin-left: 50px;">Команда "Карл"</li>
                <li class="level-link" style="margin-left: 50px;">Команда "Нарі"</li>
            </li>
            <li class="level-link">
                Руйнівники Замків | Шукачі Ключів
                <li class="level-link" style="margin-left: 50px;">Команда "Рой"</li>
            </li>
            <li class="level-link">
                Загін швидкого реагування | Порятунок та рейди
                <li class="level-link" style="margin-left: 50px;">Команда "Майкл"</li>
            </li>
            <li class="level-link">
                Шлях Картографів Творці карт та маршрутів
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                "Лінія Життя" | Допомога цивільним
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Перший відгук | Комунікації
                <li class="level-link" style="margin-left: 50px;">Команда "Гаррі"</li>
            </li>
        </ul>
        <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Дивізії В.Д.Г.</h1>
        <p style="font-family:Arial, Helvetica, sans-serif;">Дивізії підпорядковуються вищим цивільним підрозділам В.Д.Г. Вони, зазвичай, займаються вирішенням логістичних завдань та завданнями, заснованими на дослідженні. Також Дивізії складаються з Команд, виконують накази Доглядачів.</p>
        <ul>
            <li class="level-link">
                Поштова доставка | Доставка та Логістика
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Перша сторінка | Новинна служба
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Крапка Збору | Збір матеріалів
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Гарантія безпеки | Муніципальна охорона
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Загін Волонтерів | Народна міліція та волонтери швидкої допомоги.
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
            <li class="level-link">
                Бета-тестери Дослідження
                <li class="level-link" style="margin-left: 50px;">Команда "{Дані пошкоджені}"</li>
            </li>
        </ul>
        <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Аванпости В.Д.Г.</h1>
        <ul>
            <li class="level-link">"База Альфа" (Перша головна база на рівні 1)</li>
            <li class="level-link">"База Омега" (Друга головна база на рівні 4)</li>
            <li class="level-link">"База Гамма" (Третя головна база на рівні 3)</li>
            <li class="level-link">"База Бета" (Четверта головна база на рівні 11)</li>
            <li class="level-link">"База Эпсилон" (Пятая главная база на Уровне 238)</li>
            <li class="level-link">"Домоводи" (Рівень 5)</li>
            <li class="level-link">"Вхідний Аванпост Рівень 6" (Рівень 6.1)</li>
            <li class="level-link">"Печерні загарбники" (Рівень 8)</li>
            <li class="level-link">"Пустеля Роза" (Рівень 46)</li>
            <li class="level-link">"Снігові Шукачі" (Рівень 47)</li>
            <li class="level-link">"Уламки Поїзда" (Рівень 61)</li>
            <li class="level-link">"Рейнджери Темряви" (Рівень 64)</li>
            <li class="level-link">"Мрачные Моряки" (Уровень 66)</li>
            <li class="level-link">"Античний" (Рівень α)</li>
            <li class="level-link">"Резиденты" (уровень 101)</li>
        </ul>
    </div>
    <br>
    <br>
    `
}
function Animal3() {
    big.innerHTML = `
    <h1 class="For">СУТНІСТЬ 3 - "Усміхнені"</h1>
    <img src="http://backrooms-wiki.wdfiles.com/local--files/entity-3/entity-3-cc.png" style="width: 300px; height: 260px; border: solid 3px white; box-shadow: 2px 2px 10px 2px white; margin-left: 40%;">
    <div class="org">
    <hr>
    <h4>Місця проживання: Більшість рівнів</h4>
    <h3>Опис:</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">
    Усміхнені зустрічаються досить часто, було задокументовано багато випадків їх появи. Вони вкрай ворожі, пізнати їх можна по характерних очах і зубах, що світяться, мерехтять у темряві. Найкращий спосіб уникнути нападу усміхненого - зберігати прямий зоровий контакт. Вони мешкають у темних областях рівня 2 і рівня 3, відомо, що їх базою є "Кімната усміхнених".</p>
    <h3>Поведінка</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">
    Усміхнених приваблює світло, і вони переслідуватимуть усе, що його випромінює. Відмінний спосіб відволікти Усміхненого - кинути в нього якесь джерело світла. Сутність атакує вас тільки в тому випадку, якщо ви почнете панікувати та відступати, або ж видате гучний звук. Зберігайте зоровий контакт і повільно відходьте назад, якщо хочете вижити. Якщо ви використовуєте Репелент від усміхнених, це змусить суть відступити або втратити почуття на тривалий час.</p>
    <h3>Біологічні особливості</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">
    Відмінна риса усміхнених - широка посмішка, повна гострих зубів, і білі очі, що світяться. Більше про їхню будову нічого невідомо. Існує припущення, що вони мають фізичне тіло, яке неможливо побачити людським оком, але ця інформація залишається непідтвердженою. На даний момент Б.І.Г. знаходиться у пошуку додаткової інформації про біологію цих сутностей.</p>
    <hr>
    <h2>Поради та заборони</h2>
    <h3>Поради</h3>
    <ul>
    <li class="level-rank">Зберігати зоровий контакт та повільно відступати.</li>
    <li class="level-rank">Бути тихим та не видавати гучних звуків.</li>
    <li class="level-rank">Використовувати Репелент від усміхнених.</li>
    <li class="level-rank">Вимкнути всі джерела світла.</li>
    </ul>
    <h3>Заборони</h3>
    <ul>
    <li class="level-rank">У паніці тікати від усміхненого.</li>
    <li class="level-rank">Видавати гучні звуки.</li>
    <li class="level-rank">Використовувати джерела світла.</li>
    </ul>
    </div>
    <hr>
    <br>
    <br>
    `
}
function Object1() {
    big.innerHTML = `
    <h1 class="For">Об'ЄКТ 1 - "Мигдалева вода"</h1>
    <div class="org">Об'єкт 1 - це різнокольорові термоси з рідиною, які можна знайти на більшості рівнів Закулісся. Це один із найпотрібніших і найкорисніших предметів, який може отримати мандрівник.<hr></div>
    <img src="http://natedagreat563.wdfiles.com/local--files/storage-unit-3/AlmondWater" style="width: 300px; height: 260px; border: solid 3px white; box-shadow: 2px 2px 10px 2px white; margin-left: 40%;">
    <div class="org">
    <hr>
    <h2>Опис:</h2>
    <p style="font-family:Arial, Helvetica, sans-serif;">Об'єкт 1 або Мигдалева Вода - це один з найкорисніших об'єктів, який можна отримати на більшості рівнів Закулісся. Це набір металевих термосів, наповнених прозорою рідиною. Зазвичай їх можна знайти окремо на багатьох рівнях, але часто їх можна зустріти скупченнями на рівнях, де її досить багато. Незрозуміло, як Мигдальна Вода стала такою поширеною, але в різних рукописах Згинули говориться, що всі термоси з'явилися в один день абсолютно незрозумілим чином, хоча це більше скидається на легенду, ніж на об'єктивну реальність.\n<br>
    Часто деякі термоси виявляються трохи пошкодженими або мають повноцінні вм'ятини або подряпини. Абсолютно всі термоси мають висоту близько 30 сантиметрів і завжди наповнені до країв - у кожній ємності може поміститися 2-4 склянки води. Якщо ви знайшли неповну пляшку, то в жодному разі не пийте вміст, тому що це може означати, що нею користувався інший мандрівник, який міг підмінити воду всередині або залити в пляшку щось схоже.\n<br>
    Вода немного отличается вкусами, хотя все они напоминают воду: физически и визуально. Миндальная Вода, если она не была подменена, в большинстве случаев безопасна для питья, но некоторые уровни могут иметь аномальный эффект, при котором жидкость вызывает у пьющего симптомы, похожие на отравление цианидом. Нет никакой информации о том, какие уровни могут вызвать этот эффект, и нет ни одного известного способа узнать об этом заранее — если на уровне присутствует такой эффект, то об этом будет указанно на странице уровня. Этот эффект всё же можно убрать, прокипятив Миндальную Воду. Если использовать небольшую щепотку Огнесоли, то можно мгновенно вскипятить жидкость, чтобы обезвредить её. Стоит отметить, что при чрезмерном использовании этот способ кипячения может привести к тому, что жидкость станет слегка острой на вкус.
    Как уточнялось выше, также есть вероятность того, что другие группы, люди и/или организации подменяли жидкость в ёмкости. Общее правило гласит: “Если сомневаешься — вскипяти”. Если ситуация безопасна и позволяет это, то обязательно кипятите недавно найденную Миндальную Воду перед употреблением.\n<br>
    Чаще всего Миндальная Вода используется странниками как замена пище. Выпивая 1-2 литра Миндальной Воды в день, вы получите столько же калорий, сколько содержится в плитке шоколада, а это значит, что три бутылки в день обеспечат достаточное дневное питание для среднего здорового человека. Несмотря на то, что это первый объект, обнаруженный Б.И.Г., до сих пор неизвестно, как именно это случилось. Благодаря тому, что Миндальная Вода может быть найдена в изобилии на большинстве уровней Закулисья, она является самым лёгким способом не умереть от жажды, голода, а также некоторых заболеваний. Она также сводит на нет необходимость в какой-либо форме ведения хозяйства, так как более эффективна на обжитых уровнях, таких как Уровень 11. Кроме калорий, вода также содержит в себе необходимые витамины и питательные вещества, такие как белок, натрий и жир.

    Однако присутствие в жидкости таких веществ, как сахар и натрий, не изменяет её вкус и запах. Например, не все вариации Миндальной Воды солёные, несмотря на одинаковое количество содержащегося в них натрия. Кроме того, попытки воспроизвести процессы, которые обычно отделяют такие вещества как соль и сахар от жидкости — например, кипячение — оказались бессмысленны. Никаких веществ не было получено в результате, чего и следовало ожидать от смеси. Данная информация наводит на некоторые подозрения. Многие исследователи начали считать, что Миндальная Вода — это вовсе не вода, а некое аномальное вещество, которое очень сильно её напоминает. Данную информацию ещё стоит проверить. Ниже предоставлена этикетка для 1 бутылки Миндальной Воды, полученная от Н.Т.О.З.</p>
    </div>
    <hr>
    <br>
    <br>
    `
}
function Level74() {
    big.innerHTML = `
    <h1 class="For3">РІВЕНЬ 74 - "Веселощі на сцені"</h1>
    <img src="http://backrooms-wiki.wdfiles.com/local--files/level-74/stagefright.jpg" style="width: 300px; height: 260px; border: solid 3px white; box-shadow: 2px 2px 10px 2px white; margin-left: 40%;">
    <div class="org">
    <hr>
    <h2>Складність виживання: Клас ПСІ \n<br> Небезпечний \n<br> Нестабільний \n<br> Психологічне взаємодія</h2>
    <hr>
    <div class="org">Рівень 74 - 75-й рівень Закулісся. Це широка сцена, оточена фойє, що замикається.</div>
    <h3>Опис:</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">74 рівень є театральною сценою з двома стільцями на кожному кінці. У залі стоїть двадцять (20) рядів сидінь, а двері у фойє стоять через кожні п'ять (5) рядів. Таким чином, сумарно дверей вісім (8). На сцену легко потрапити. Підлоги на ній з підігрівом та різними люками, які ведуть до Ізоляції. \n<br> Фойє рівня 74 нагадує звичайну зону очікування з цегляними стінами та плитковою підлогою. Приміщення відносно просторі, у них стоять автомати з попкорном, а на стінах висять постери. Постери схожі на карнавальні плакати, де основне зображення це малюнок випадкового рівня. Варто зазначити, деякі зображення показують ще не виявлені рівні. Фойє має сходи, ліфти, три та чотиристоронні перехрестя. Всі коридори фойє повертаються до одного з дверей рівня 74. Однак, все це відбувається не всупереч законам фізики та геометрії. Вважається, що повернення відбувається підсвідомо, деякий вплив змушує людину йти зворотним шляхом. \n <br> При попаданні на рівень місця займатимуть людські постаті. Вони всі нагадуватимуть людей, яких зустрів конкретний мандрівник. Це може бути будь-хто, від членів сім'ї до простого перехожого. Вирази осіб та їхні дії будуть спрощені та порожні, а погляд завжди спрямований на сцену. Спочатку сцена буде заповнена іншими людьми, що слабо впізнаються в білих масках. Фігури на сцені розігруватимуть епізод, так чи інакше пов'язані з тим, що ви бачили уві сні. Наприклад, вони можуть кидати папір повз рот, імітуючи випадання зубів, розіграти смерть, ганятися один за одним і так далі. \n <br> Чим довше перебуваєш на рівні, тим небезпечнішим він стає. Перебуваючи на рівні більше 2-х годин, "люди" та постаті миттєво зникнуть. Всі звуки, що ними видаються, також пропадуть, дезорієнтуючи будь-кого, хто знаходиться на рівні 74. Рівень розуму поступово починає погіршуватися, з'являється почуття стеження, а зі стін чути нерозбірливий шум. Він може бути схожим на звук сутностей, скрегіт металу, пориви вітру за межами рівня. \n <br> Чим нижче падає розсудливість, тим важче після цього відновитись. Мигдальна Вода слабо допомагає відновити розум, оскільки фактично швидкість падіння розсудливості вища за швидкість його відновлення. Вживання Мигдальної Води на цьому рівні має довгостроковий ефект. Поступово може виробитись імунітет до Мигдальної Води. Це означає, що відновити свідомість надалі буде неможливо. \n <br> 
    Тривале перебування на рівні тягне за собою ще гірші наслідки для розуму. Стіни почнуть з'їжджатися, сидіння розтягуватимуться в нескінченні ряди, а звуки ставатимуть голосніше в міру появи фігур у вашому периферійному зорі. Справжній вигляд істот неможливо побачити, оскільки при погляді на них розсудливість стрімко падає до нуля.\n <br></p>
    <h3>Бази, аванпости та поселення:</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">На цьому рівні немає відомих баз, аванпостів чи поселень.</p>
    <h3>Входи та виходи:</h3>
    <h4>Входи</h4>
    <p style="font-family:Arial, Helvetica, sans-serif;">На рівні 117 можна знайти червоні двері, що ведуть на рівень 74. На рівні 68 також можна знайти аналогічні рівні 117 червоні двері.</p>
    <h4>Виходи</h4>
    <p style="font-family:Arial, Helvetica, sans-serif;">Єдиний спосіб залишити рівень – скористатися люками на сцені. Вони безпосередньо ведуть до Ізоляції, проте скористатися ними раніше, ніж через 2 години після потрапляння на рівень неможливо.</p>
    </div>
    <hr>
    <br>
    <br>
    `
}
function Level7() {
    big.innerHTML = `
    <h1 class="For">РІВЕНЬ 7 - "Таласофобія"</h1>
    <img src="http://backrooms-wiki.wdfiles.com/local--files/level-7/level-7-cc.jpg" style="width: 300px; height: 260px; border: solid 3px white; box-shadow: 2px 2px 10px 2px white; margin-left: 40%;">
    <div class="org">
    <hr>
    <h2>Складність виживання: Клас 4 \n<br> Небезпечний \n<br> Нестабільний \n<br> Середня кількість сутностей</h2>
    <hr>
    <div class="org">Рівень 7 - 8-ий рівень Закулісся.</div>
    Вперше був відкритий користувачем Реддіт u/Bart0nius. Цей рівень становить значну перешкоду вивчення рівня 8 і наступних рівнів.
    <h3>Опис:</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">
    Дослідити Рівень 7 вдалося небагатьом, але в даний час відомо, що він складається з двох областей: холу та головного залу - величезного простору води, порівнянного за масштабом та обсягом з океаном. Крім стельових світильників у холі (див. нижче), Рівень 7 не має фіксованих джерел світла. Незважаючи на це, здається, що тьмяне освітлення поширюється на весь рівень. Криків рівня 6 тут не чути, як і "дзижчання" попередніх рівнів. Вода, в яку занурена більша частина рівня 7, є дистильованою, а не солоною або звичайною прісною. За словами тих, хто побував на рівні, вода, якою затоплений весь рівень, надзвичайно холодна, причому кілька джерел порівнюють її температуру з температурою рідкого азоту, тому ми настійно рекомендуємо не занурюватися в неї. \n <br>
    Холл - єдиний вхід на Рівень 7, розташований біля підніжжя сходів на рівні 6. Хол, де знаходиться книжкова шафа з кількома книгами невідомого походження, невеликий кавовий столик, один стілець і люмінесцентна лампа, є однією з небагатьох повністю мебльованих кімнат на перших 9 рівнях. Килим у холі покриває п'ятисантиметровий шар води. Єдиний прохід до головної зали — одні двері навпроти сходів.
    Ця кімната і головний зал мають зовсім різні центри ваги. Вищезгадані двері відкривають вид на головну залу зверху. Кімната, ймовірно, обертається горизонтально, але гравітація досі працює так, що ви можете стояти на підлозі. При вході в головний зал гравітація негайно набирає чинності і тягне все в межах досяжності дверного отвору до поверхні води. Гравітація залу значно сильніша за нормальну земну гравітацію, що підвищує ризик потонути. \n <br>
    Головний зал рівня 7 є гігантським океаном, який, здається, простягається нескінченно в усіх напрямках. Двері в хол розташовані на бетонній стелі, яка знаходиться приблизно в 4,5 метрах (14 футів) над поверхнею води. Декілька островів, що складаються зі скель невідомої форми, були виявлені приблизно за два кілометри на північ від дверного отвору, більшість з яких безлюдні через їхню ворожу природу.
    Більшість океану не досліджена, але перші 1,2 кілометра (0,7 миль) у глибину, де майже нічого немає, називають "Зоною денного світла". Як випливає з назви, ця частина океану найбільше освітлена в порівнянні з рештою простору рівня.
    Ступінь освітленості поступово знижується протягом усієї Зони денного світла і стає значно нижчим на рівні 1,2-2 кілометрів (0,7-1,2 милі) від поверхні води (далі "Сутінкова зона"). У Сутінковій зоні знаходяться кістки та уламки іржавого металу, а також перші цілісні скелети. Ці скелети здебільшого належать гуманоїдним істотам, проте з деякими незначними відмінностями від скелета людини, наприклад, більшими щелепами з довгими гострими зубами та відсутністю очниць. Було також відмічено кілька скелетів великих неземних риб, деякі з яких досягали до 20 метрів (65 футів) завдовжки. Вважається, що тиск тут стає досить високим, але, схоже, в жодній точці океану тиск не настільки сильний, щоб розчавити людський скелет. Однак наслідки тривалого перебування в цій точці не були досліджені, тому мандрівникам, які бажають дослідити глибини океану, рекомендується якнайшвидше покинути це місце. \n <br>
    Область, що тягнеться від 2 до 6,8 кілометрів (1,2-4,2 милі) під поверхнею (далі "Северна зона") повністю занурена у пітьму. У цій частині океану було знайдено багато цілісних кістяків, багато з яких належать вищезгаданим гуманоїдним істотам. Надходили повідомлення про неймовірно великі рибоподібні скелети, знайдені в Північній зоні, але свідки описують їх скелетні структури як "незбагненні".
    Глибина нижче 7 кілометрів (4,3 милі) від поверхні (далі "Безодня") вважається занадто небезпечною для дослідження. Найдовше зареєстроване дослідження Безодні триває приблизно 1 хвилину та 45 секунд. Кажуть, що Безодня складається з гір смоли та каменю, звідки постійно виходять міхури з невідомого джерела. Ця зона кишить вищезгаданими гуманоїдними кістяками, більшість з яких були пошкоджені величезним тиском. Більше про Безодню майже нічого невідомо, чи є лише чутки про вхід до печери в одній із підводних гір, яка, як кажуть, веде на Рівень 8.
    Що стосується сутностей, на даний момент на рівні 7 була виявлена лише одна. Самотня в льодових водах, Істота рівня сім, мабуть, знищила все інше життя в цьому океані. Ця істота є головною небезпекою рівня 7, оскільки його неймовірна швидкість плавання і фізична сила роблять його здатним наздоганяти і потрошити своїх жертв протягом кількох хвилин або секунд, залежно від відстані до мети. Мандрівникам настійно рекомендується відмовитися від дослідження океану, але тим, хто готовий ризикнути, рекомендується взяти з собою, наприклад, м'ясо, щоб відволікти цю сутність і виграти собі достатньо часу.
    Точна глибина рівня 7 поки що невідома, але учасники групи Б.А.С. визначили, що, з архітектурної точки зору, він має бути неймовірно глибоким. Фрагменти синтетичного волокна в північній зоні і безодні говорять про те, що дно океану вкрите килимом.</p>
    <h3>Бази, аванпости та поселення:</h3>
    <p style="font-family:Arial, Helvetica, sans-serif;">
    Капітуляція форта:
    <ul>
    <li class="level-link">Аванпост на найближчому зареєстрованому острові являє собою стару споруду зі зламаних меблів, скріплених смолою.</li>
    <li class="level-link">Група, ймовірно, молиться на Істоту рівня сім.</li>
    <li class="level-link">Кількість людей у групі невідома, але кажуть, що близько 4-9 людей.</li>
    <li class="level-link">Учасники групи мають психічні відхилення та становлять небезпеку для мандрівників. Входи та виходи:</li>
    </ul>
    </p>
    <h3>Входи та виходи:</h3>
    <h4>Входи</h4>
    <p style="font-family:Arial, Helvetica, sans-serif;">Єдиний відомий вхід на рівень 7 знаходиться поруч зі сходами на рівні 6, який веде безпосередньо в хол. Однак ходять чутки про ймовірність потрапити на рівень 7 через калюжу на підлозі рівня 6.</p>
    <h4>Виходи</h4>
    <p style="font-family:Arial, Helvetica, sans-serif;">Єдиний відомий спосіб залишити Рівень 7 - підводна печера, розташована на схилі гори приблизно за сім кілометрів від поверхні океану, яка була виявлена u/Bart0nius і u/avolded. Вона веде на рівень 8. Важливо, що не існує певного способу повернутися на рівень 7 з рівня 8 або будь-якого іншого рівня.</p>
    </div>
    <hr>
    <br>
    <br>
    `
}