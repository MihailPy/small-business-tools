/*
  Основные тексты и контакты:
  меняйте здесь заголовочные тексты, ссылки и подписи под ваш стиль.
*/
const siteConfig = {
  heroText:
    "Делаю понятные цифровые инструменты для тех, кто работает с клиентами: чтобы заявки не терялись, учет был в порядке, а ежедневные действия занимали меньше времени.",
  contactsTitle: "Напишите, чем занимаетесь и какая задача отнимает время",
  contactsNote:
    "Я предложу простой вариант решения, срок и цену. Если задача небольшая, можно начать с мини-формата без большого бюджета.",
  footerTitle: "Цифровые решения для малого бизнеса и самозанятых",
  footerDisclaimer:
    "Я не являюсь сотрудником соцзащиты и не оформляю социальные контракты. Помогаю только с цифровыми инструментами для запуска и ведения дела.",
  telegramUrl: "https://t.me/mikhvoid",
  telegramHandle: "@mikhvoid",
  maxUrl: "https://max.ru/u/f9LHodD0cOJl-Qdwep4HD3-9UpifxLzs6hApuKbIw4YUsJzvQTKc7abOnzc",
  maxContact: "Михаил",
  email: "mikhvoid@gmail.com"
};

/*
  Для кого подходит:
  добавляйте или убирайте пункты под свою целевую аудиторию.
*/
const audience = [
  "Мастера услуг",
  "Самозанятые",
  "Репетиторы",
  "Ремонтники",
  "Кондитеры",
  "Небольшие магазины",
  "Участники соцконтракта",
  "Начинающие предприниматели"
];

/*
  Услуги:
  добавляйте новые объекты по этому шаблону.
*/
const services = [
  {
    title: "Сайт-страница для услуги",
    benefit:
      "Помогает быстро объяснить клиенту, что вы делаете, и получать обращения без переписки в мессенджерах.",
    result: "Одна понятная страница с кнопкой связи и формой заявки.",
    priceFrom: "от 7 000 ₽",
    timeline: "3-5 дней"
  },
  {
    title: "Форма заявок",
    benefit:
      "Собирает обращения в одном месте и уменьшает количество потерянных лидов.",
    result: "Форма с полями под ваш процесс и отправкой в удобный канал.",
    priceFrom: "от 3 000 ₽",
    timeline: "1-2 дня"
  },
  {
    title: "Бот для мессенджеров (Max, VK, Telegram и др.)",
    benefit:
      "Принимает заявки автоматически и экономит время на однотипные ответы.",
    result:
      "Бот, который задает нужные вопросы и передает заявку вам в удобный канал.",
    priceFrom: "от 8 000 ₽",
    timeline: "4-7 дней"
  },
  {
    title: "Таблица учета клиентов и заказов",
    benefit:
      "Дает контроль над текущими заказами, оплатами и этапами работ.",
    result: "Готовая таблица учета с фильтрами и базовой аналитикой.",
    priceFrom: "от 4 000 ₽",
    timeline: "2-3 дня"
  },
  {
    title: "Автоматизация рутинных задач",
    benefit:
      "Снимает ручные действия: перенос данных, уведомления, повторяющиеся операции.",
    result: "Сценарий, который выполняет задачу без вашего постоянного участия.",
    priceFrom: "от 7 000 ₽",
    timeline: "3-6 дней"
  },
  {
    title: "Обработка файлов и документов",
    benefit:
      "Ускоряет работу с Excel/CSV, изображениями и типовыми документами.",
    result: "Скрипт/инструмент для пакетной обработки под ваш формат.",
    priceFrom: "от 5 000 ₽",
    timeline: "2-5 дней"
  }
];

/*
  Примеры решений:
  мини-сценарии по типам клиентов, чтобы проще узнать свою задачу.
*/
const examples = [
  {
    title: "Мастер услуг",
    description: "Форма записи + таблица клиентов.",
    image: "images/registration master.png",
    imageAlt: "Пример интерфейса для мастера услуг"
  },
  {
    title: "Кондитер",
    description: "Заказы, даты, предоплаты, список на неделю.",
    image: "images/pastry chef orders.png",
    imageAlt: "Пример таблицы заказов для кондитера"
  },
  {
    title: "Репетитор",
    description: "Заявки на занятия + расписание + учет оплат.",
    image: "images/teacher appointments.png",
    imageAlt: "Пример учета записей для репетитора"
  },
  {
    title: "Ремонт и бытовые услуги",
    description: "Заявки, статусы, суммы, история клиентов.",
    image: "images/repair requests.png",
    imageAlt: "Пример учета заявок для ремонта и бытовых услуг"
  },
  {
    title: "Торговля и handmade",
    description: "Заказы, остатки, расходы, прибыль.",
    image: "images/trade_and_handmade.png",
    imageAlt: "Пример учёта заказов, остатков и прибыли для торговли и handmade"
  }
];

const socialContractBlock = {
  title: "Помощь участникам соцконтракта",
  description:
    "Если вы запускаете дело по соцконтракту, помогу подготовить простые цифровые инструменты для старта: страницу услуг, форму заявок, таблицу учета клиентов и заказов, бота для мессенджеров или автоматизацию рутинных задач."
};

/*
  Этапы работы:
  можно менять порядок или формулировки.
*/
const workflowSteps = [
  "Обсуждаем задачу и текущую ситуацию в вашем бизнесе",
  "Согласуем результат, цену и срок",
  "Делаю первый рабочий вариант",
  "Вносим правки по обратной связи",
  "Передаю готовое решение и короткую инструкцию"
];

/*
  Тарифы:
  редактируйте состав, стоимость и срок выполнения.
*/
const pricingPlans = [
  {
    name: "Мини-задача",
    description:
      "Настрою форму заявки, сделаю простую таблицу учета, поправлю страницу, подготовлю шаблон прайса или автоматизирую один ручной процесс.",
    price: "от 3 000 ₽",
    timeline: "1-2 дня"
  },
  {
    name: "Стандартный пакет",
    description: "Связка из нескольких инструментов: заявки + учет + базовая автоматизация.",
    price: "от 12 000 ₽",
    timeline: "4-8 дней"
  },
  {
    name: "Индивидуальная автоматизация",
    description: "Решение под ваш процесс с учетом нестандартных требований и доработок.",
    price: "от 25 000 ₽",
    timeline: "по согласованию"
  }
];

/*
  Первый входной оффер:
  можно оставить бесплатный разбор или заменить на платный быстрый формат.
*/
const entryOffer = {
  title: "Быстрый разбор задачи — бесплатно",
  description:
    "Коротко разберем вашу ситуацию и определим, что можно улучшить в первую очередь без лишних затрат."
};

/*
  Блок доверия:
  навыки и короткий текст о стиле работы.
*/
const trustBlock = {
  skills: [
    "Python-автоматизация",
    "Боты для мессенджеров",
    "Обработка Excel/CSV",
    "Обработка изображений",
    "Django",
    "Простые сайты",
    "Работа с таблицами и файлами"
  ],
  note:
    "Работаю с понятными небольшими задачами. Объясняю простым языком, передаю инструкцию и не усложняю решение без необходимости."
};

function createServiceCard(service) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <h3>${service.title}</h3>
    <p>${service.benefit}</p>
    <p><strong>Результат:</strong> ${service.result}</p>
    <div class="card__meta">
      <div class="meta-row"><span>Цена</span><span>${service.priceFrom}</span></div>
      <div class="meta-row"><span>Срок</span><span>${service.timeline}</span></div>
    </div>
  `;
  return article;
}

function createExampleCard(example) {
  const article = document.createElement("article");
  article.className = "card";
  const imageMarkup = example.image
    ? `<button class="card__image-button" type="button" data-full-image="${example.image}" data-image-alt="${example.imageAlt || example.title}">
         <img class="card__image" src="${example.image}" alt="${example.imageAlt || example.title}" loading="lazy" />
       </button>`
    : "";
  article.innerHTML = `
    ${imageMarkup}
    <h3>${example.title}</h3>
    <p>${example.description}</p>
  `;
  return article;
}

function createPricingCard(plan) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <h3>${plan.name}</h3>
    <p>${plan.description}</p>
    <div class="card__meta">
      <div class="meta-row"><span>Стоимость</span><span>${plan.price}</span></div>
      <div class="meta-row"><span>Срок</span><span>${plan.timeline}</span></div>
    </div>
  `;
  return article;
}

function renderAudience() {
  const audienceList = document.getElementById("audienceList");

  audience.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "chip";
    tag.textContent = item;
    audienceList.appendChild(tag);
  });
}

function renderWorkflow() {
  const list = document.getElementById("workflowSteps");

  workflowSteps.forEach((text, index) => {
    const item = document.createElement("li");
    item.className = "step";
    item.innerHTML = `
      <span class="step__number">${index + 1}</span>
      <p>${text}</p>
    `;
    list.appendChild(item);
  });
}

function renderEntryOffer() {
  const entryOfferNode = document.getElementById("entryOffer");
  entryOfferNode.innerHTML = `
    <h3>${entryOffer.title}</h3>
    <p>${entryOffer.description}</p>
  `;
}

function renderSocialContractBlock() {
  const titleNode = document.getElementById("socialContractTitle");
  const blockNode = document.getElementById("socialContractBlock");
  titleNode.textContent = socialContractBlock.title;
  blockNode.innerHTML = `<p>${socialContractBlock.description}</p>`;
}

function renderTrustBlock() {
  const skillsList = document.getElementById("skillsList");
  const trustNote = document.getElementById("trustNote");

  trustBlock.skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.className = "chip";
    tag.textContent = skill;
    skillsList.appendChild(tag);
  });

  trustNote.textContent = trustBlock.note;
}

function fillStaticContent() {
  document.getElementById("heroText").textContent = siteConfig.heroText;
  document.getElementById("contactsTitle").textContent = siteConfig.contactsTitle;
  document.getElementById("contactsNote").textContent = siteConfig.contactsNote;
  document.getElementById("footerTitle").textContent = siteConfig.footerTitle;
  document.getElementById("footerDisclaimer").textContent = siteConfig.footerDisclaimer;

  const heroButton = document.getElementById("heroTelegramButton");
  heroButton.href = siteConfig.telegramUrl;

  const contactsTelegram = document.getElementById("contactsTelegram");
  contactsTelegram.href = siteConfig.telegramUrl;
  contactsTelegram.textContent = `Telegram: ${siteConfig.telegramHandle}`;

  const contactsMax = document.getElementById("contactsMax");
  contactsMax.href = siteConfig.maxUrl;
  contactsMax.textContent = `Max: ${siteConfig.maxContact}`;

  const contactsEmail = document.getElementById("contactsEmail");
  contactsEmail.href = `mailto:${siteConfig.email}`;
  contactsEmail.textContent = `Email: ${siteConfig.email}`;

}

function renderCards() {
  const servicesGrid = document.getElementById("servicesGrid");
  const examplesGrid = document.getElementById("examplesGrid");
  const pricingGrid = document.getElementById("pricingGrid");

  services.forEach((service) => servicesGrid.appendChild(createServiceCard(service)));
  examples.forEach((example) => examplesGrid.appendChild(createExampleCard(example)));
  pricingPlans.forEach((plan) => pricingGrid.appendChild(createPricingCard(plan)));
}

function setupImageModal() {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="image-modal__backdrop" data-close-image-modal="true"></div>
    <div class="image-modal__content" role="dialog" aria-modal="true" aria-label="Увеличенное изображение">
      <button class="image-modal__close" type="button" aria-label="Закрыть" data-close-image-modal="true">×</button>
      <img class="image-modal__img" src="" alt="" />
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector(".image-modal__img");

  function closeModal() {
    modal.classList.remove("image-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("body--modal-open");
  }

  function openModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add("image-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("body--modal-open");
  }

  document.addEventListener("click", (event) => {
    const imageTrigger = event.target.closest(".card__image-button");
    if (imageTrigger) {
      openModal(imageTrigger.dataset.fullImage, imageTrigger.dataset.imageAlt || "");
      return;
    }

    if (event.target.closest("[data-close-image-modal='true']")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("image-modal--open")) {
      closeModal();
    }
  });
}

fillStaticContent();
renderAudience();
renderCards();
renderWorkflow();
renderEntryOffer();
renderSocialContractBlock();
renderTrustBlock();
setupImageModal();
