let superherous = [

  {
    "avatar": "card--1",
    "name": "Бэтмен",
    "univers": "DC Comics",
    "alterago": "Брюс Уэйн",
    "job": "борец с преступностью, филантроп, миллиардер",
    "friens": "Робин, Бэтгерл",
    "powers": "интеллект, обширные познания, знания боевых искусств, ловкость",
  },

  {
    "avatar": "card--2",
    "name": "Супермен",
    "univers": "DC Comics",
    "alterago": "Кларк Кент",
    "job": "борец за справедливость",
    "friens": "собака Крипто",
    "powers":
      "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  },

  {
    "avatar": "card--3",
    "name": "Железный человек",
    "univers": "Marvel Comics",
    "alterago": "Тони Старк",
    "job": "гений, миллиардер, плейбой, филантроп",
    "friens": "Мстители",
    "powers":
      "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  },


  {
    "avatar": "card--4",
    "name": "Спайдер-мен/Человек-паук",
    "univers": "Marvel Comics",
    "alterago": "Питер Паркер",
    "job": "борец за справедливость, студент, фотограф",
    "friens": "Мстители, Фантастическая четверка, Люди Икс",
    "powers":
      "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  },


  {
    "avatar": "card--5",
    "name": "Капитан Америка",
    "univers": "Marvel Comics",
    "alterago": "Стивен Роджерс",
    "job": "супер-солдат",
    "friens": "Мстители",
    "powers":
      "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  },


  {
    "avatar": "card--6",
    "name": "Тор",
    "univers": "Marvel Comics",
    "alterago": "нет; полное имя — Тор Одинсон",
    "job": "борец за справедливость, скандинавский бог",
    "friens": "Мстители",
    "powers": "все, что может бог, плюс молот Мьелнир",
  },


  {
    "avatar": "card--7",
    "name": "Халк",
    "univers": "Marvel Comics",
    "alterago": "Брюс Беннер",
    "job": "супергерой, борец за справедливость, ученый-биохимик",
    "friens": "Мстители",
    "powers": "сверхчеловеческая сила искорость, выносливость, полет",
  },


  {
    "avatar": "card--8",
    "name": "Чудо-женщина",
    "univers": "DC Comics",
    "alterago": "Диана Принс",
    "job": "супергероиня, секретарь-референт",
    "friens": "Лига Справедливости, Бэтмен, Супермен",
    "powers": "верхчеловеческая сила искорость, выносливость, полет",
  },


  {
    "avatar": "card--9",
    "name": "Черная вдова",
    "univers": "Marvel Comics",
    "alterago": "Наташа Романофф",
    "job": "супергероиня, шпионка",
    "friens": "Мстители",
    "powers":
      "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  },


  { 
    "avatar": "card--10",
    "name": "Дэдпул",
    "univers": "Marvel Comics",
    "alterago": "Уэйд Уинстон Уилсон",
    "job": "антигерой, наемник",
    "friens": "частично Мстители, Человек-паук, Росомаха",
    "powers":
      "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  }
];

document.addEventListener("DOMContentLoaded", function()  {
    
     let cardssuper=JSON.stringify(superherous);
let cards = JSON.parse(cardssuper);
     let cardscontent = "";
     for (let card of cards) {
        cardscontent+=`
        <article class="card ${card.avatar}"> 
          <div class="card__info-hover"></div>
          <div class="card__img"></div>
          <a href="#" class="card_link">
         <div class="card__img--hover"></div></a>
          
             
                <div class="card__info">
            <p class="card__category">${card.name}</p>
            <p class="card__title">Вселенная: <strong>${card.univers}</strong></p>
            <p class="card__title">Альтер эго: <strong>${card.alterago}</strong></p>
            <p class="card__title">Род деятельности: <strong>${card.job}</strong></p>
            <p class="card__title">Друзья: <strong>${card.friens}</strong></p>
            <p class="card__title">Суперсилы: <strong>${card.powers}</strong></p>
            <span class="card__by"> <a href="#" class="card__author" title="author">RATE</a></span>
            <span class="fa fa-star unchecked"></span>
        <span class="fa fa-star unchecked"></span>
        <span class="fa fa-star unchecked"></span>
        <span class="fa fa-star unchecked"></span>
        <span class="fa fa-star unchecked"></span>
          </div>
          </article>
        `;
             }
             document.getElementById('cardscontent').innerHTML += cardscontent;
            });
