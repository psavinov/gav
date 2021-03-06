export function getString(language, key) {
    return STRINGS[language][key] || STRINGS["en"][key];
}

const STRINGS = {
    "en": {
        "header": "Goals & Values analyzer",
        "hello": "Hello",
        "years.ago.published": "A couple of years ago I published",
        "this.post": "this post",
        "on.linkedin.tried": "on LinkedIn. There I tried to explain my approach to planning my life in general, and goals setting in particular.",
        "got.feedback": "Since when I got a bunch of different feedback about the approach and difficulties people faced trying to apply it.",
        "most.difficult.part": "Surprisingly, the most difficult part was - to identify your core values, especially for those of us who don't have a lot of time for self-reflection.",
        "reference.point": "In this simple app I have a good variety of core values which you could use as a reference point. Just choose the ones which resonate the most with your current state of mind!",
        "price.disclaimer": "This app is 100% free, I don't ask you to pay to get the results or any other bullshit like that. App doesn't store any personal data remotely and doesn't share the results with anyone.",
        "source.code": "Source code is",
        "here": "here",
        "start.btn": "Let's start!",
        "default.name.first":"It seems that it is the first time you are using this app or just prefer the default user name.",
        "type.your.name":"Please type your name in the box below or keep it empty if you're OK with the default ;).",
        "welcome.back": "Welcome back! Great to see you here again. If you're ok with your current user name feel free to skip this step.",
        "prefer.different": "and prefer a different user name, please change it in the box below.",
        "you.are.not": "If you're not",
        "preferred.name": "Preferred name",
        "back.btn": "Back",
        "continue.btn": "Continue",
        "hey": "Hey",
        "thanks.intro": "Thank you for the introduction, it is always much better to know who you're talking to!",
        "not.first.time.reminder": "Since it is not your first time here, you're probably familiar with the idea, but just in case here is the reminder.",
        "first.time.explain": "Since it is your first time here, let me explain you how it works.",
        "please.choose.values": "Please choose some (I recommend to start with 3 - 5 if it is your first time) core values which resonate the most with your current state of mind. Use the filter field to fid the one you want.",
        "click.plus.value": "Click Plus button or double-click on the list option to add a value. If you haven't found the right one please use the Plus button to add your own from the filter field. Use the Minus button to remove any selected value from the list.",
        "if.you.on.mobile": "If you are on mobile you can just mark the checkboxes for the values you want to add.",
        "available.vals": "Available values",
        "selected.vals": "Selected values",
        "placeholder.filter": "Start typing to find a value...",
        "placeholder.add": "Enter your value...",
        "thanks": "Thanks",
        "you.selected.vals.rate": "You have selected your core values, but one value can have higher priority than another one, so let's rate them!",
        "please.spec.prior.vals": "Please specify a priority for each of your values, from",
        "lowest.pr": "lowest priority",
        "highest.pr": "highest priority",
        "repeat.same.rating.vals": "Feel free to repeat the same rating more than once (e.g. all 5 if they are all super-important for you).",
        "value": "Value",
        "rating": "Rating",
        "to.val": "to",
        "awesome.vals.rated": "Awesome, values rated! Now it is time to set some goals.",
        "any.number.of.goals": "Here you can put any number of goals you  set for yourself. It can be one long-term goal or many short-term ones.",
        "goal.select.val": "If you feel that the accomplishment of this goal contributes to one of your values - please select corresponding value from the list, but it is not required.",
        "dont.set.any.goals": "If you don't do any goals setting maybe it is the right time to start, you can use your day-by-day actions to formulate your goals.",
        "click.plus.new.goal": "Click Plus button to add a new goal line, or click Minus button to remove any existing goal.",
        "goal": "Goal",
        "corresponding.val": "Corresponding Value",
        "no.corresponding.val": "No corresponding value",
        "perfect": "Perfect",
        "almost.done": "We are almost done!",
        "lets.rate.goals": "You have entered your goals, but very likely the accomplishment of one goal is more important for you than the accomplishment of another, so let's rate them!",
        "please.rate.goals": "Please specify a priority for each of your goals, from",
        "repeat.more.goal": "Feel free to repeat the same rating more than once (e.g. all 5 if they are all super-important for you).", 
        "we.are.done": "That is it!",
        "thanks.contact": "First of all, thank you for using this app, I hope the experience was smooth, but if you found anything you would like to improve - please",
        "let.me.know": "let me know",
        "here.results": "Here are the results",
        "values.no.goals": "I see that you have some values without corresponding goals",
        "values.no.goals.desc1": "Proper planning could help you to contribute more to the things which are important for you (your core values).",
        "values.no.goals.desc2": "Or the reason could be that those values are not really important and it's time to find something else?",
        "goals.no.values": "There are some goals without a corresponding value",
        "goals.no.values.desc1": "It seems that you're trying to accomplish some goals which don't contribute to any of your core values. Probably you're wasting your time and energy doing something that doesn't make you happy.",
        "goals.no.values.desc2": "Maybe it is the right moment to reprioritize your goals and start doing something that will make you happy long-term? If you are sure that these goals are important for you then maybe there is a new value to consider.",
        "half.high.pr.goals": "More than a half of your goals are high-priority goals.",
        "half.high.pr.desc1": "I don't know how energetic and hardworking person you are, but just keep in mind that when chasing two rabbits at once there is a risk that both will escape.",
        "half.high.pr.desc2": "Maybe it could be better to reprioritize your goals and focus on the contribution to the values which are more important for you?",
        "low.pr.values": "More than 75% of your values are low-priority values, that looks a bit weird.",
        "low.pr.values.desc1": "Maybe it makes sense to review your values list and think about something that really matters?",
        "low.pr.values.desc2": "It could be difficult to identify your values, but this is a key part of the whole excercise, please make sure you have your values defined correctly.",
        "low.pr.goals": "More than 75% of your goals are low-priority goals, that looks a bit weird. Typically your goals define your action items and I'm pretty sure you're doing a lot of important things everyday. Are those actions related to any of your goals?",
        "low.pr.goals.desc": "Maybe it makes sense to review your goals list and change priorities or add new goal related to the actions you take day by day?",
        "final.scores": "Final scores",
        "score": "Score",
        "everything.ok": "Everything is OK!",
        "too.much.effort": "It seems that there is too much effort to reach the goal which is not super-important for you. Maybe you can start taking more actions contributing to something more important than this value.",
        "not.enough.goals": "It makes sense to prioritize more goals / action items you have related to this value. There is not enough keeping in mind the importance of the value.",
        "congrats.all.ok": "Congratulations!  It looks like you are one of the few people who live in a complete internal agreement, at least within these",
        "values": "values",
        "scores.mean": "What these scores mean?",
        "green": "Green",
        "orange": "Orange",
        "red": "Red",
        "green.desc": "Priorities of your goals match the priority of this value, you are doing great contribution to something which is really important for you. Keep going!",
        "orange.desc": "There is a space for improvement for this value. Our values, from a certain standpoint, could be chaining us down, thus attempts to reach the goals related to this value can lead to frustration, internal struggle, and unnecessary stress.",
        "red.desc": "Something isn't right. You are most likely trying to reach the goals which won't make you happy since the related value is not important for you. Or you don't have enough prioritized goals/actions contributing to your core value. It is time for a good self-reflection, take a break, review what you're doing day by day and think about what important things you are missing.",
        "hold.to.hint": "Hold the pointer (or tap, if you're on mobile) on the question mark near the score to get a hint.",
        "proceed.2.vals": "I recommend to add at least 3 values to get more accurate results. Are you sure you want to proceed with 2 values?",
        "less.2.vals": "It makes no sense to proceed with less than 2 values, please select some that fit you best.",
        "vals.miss.rate": "Please make sure that all your values have corresponding rating assigned.",
        "miss.goals": "Please make sure you entered at least 1 goal.",
        "goals.miss.rate": "Please make sure that all your goals have corresponding rating assigned.",
        "confirm.all.goals": "Please confirm that all your goals are in place. Are you sure you want to continue?",
        "app.use.localstorage": "This app is using your browser's local storage to keep your data, so you don't have to start from scratch every time. If you have any concerns about this data being store in your browser storage please click \"Close &amp; Reset\" button.",
        "share.social": "Click corresponding social network share button above if you liked the idea of this app and want to share it with your friends.",
        "send.gift": "If you found this app useful and want to thank me for it click \"Send me a gift\" button ;).",
        "close.reset.btn": "Close & Reset",
        "close.btn": "Close",
        "send.gift.btn": "Send me a gift"
    },

    "ru": {
        "header": "Анализатор Целей и Ценностей",
        "hello": "Привет",
        "years.ago.published": "Несколько лет назад я опубликовал",
        "this.post": "этот пост",
        "on.linkedin.tried": "в LinkedIn. В нём я попытался объяснить мой подход к планированию в целом и к постановке целей в частности.",
        "got.feedback": "С тех пор я получил неплохую обратную связь о том, что люди думают об этом подходе и трудностях с которыми они столкнулись, пытаясь его применить.",
        "most.difficult.part": "На удивление самым сложным моментом оказалось определние ключевых ценностей, особенно для тех из нас, у кого нет времени на саморефлексию.",
        "reference.point": "В этом простом приложении я собрал приличный список ценностей, из которых Вы можете выбрать те, что соответствют Вашему мироощущению в данный момент.",
        "price.disclaimer": "Это приложение полностью бесплатно. Я не прошу Вас заплатить за результат в конце и т.п. Приложение не хранит персональные данные и не никому не передаёт ",
        "source.code": "Исходный код доступен",
        "here": "здесь",
        "start.btn": "Начать!",
        "default.name.first":"Видимо, Вы пользуетесь приложением впервые, либо предпочитаете имя по умолчанию.",
        "type.your.name":"Пожалуйста введите Ваше имя в поле снизу, либо оставьте его пустым если Вам нравится обращение по умолчанию ;).",
        "welcome.back": "И снова здравствуйте! Здорово видеть Вас ещё раз. Если Вам нравится текущее обращение, то можете смело пропустить этот шаг.",
        "prefer.different": "и предпочитаете другое имя, пожалуйста, введите его в поле внизу.",
        "you.are.not": "Если Вы не",
        "preferred.name": "Предпочитаемое обращение",
        "back.btn": "Назад",
        "continue.btn": "Продолжить",
        "hey": "Продолжим",
        "thanks.intro": "Спасибо за то, что представились, всегда приятно знать с кем имеешь дело!",
        "not.first.time.reminder": "Вы здесь уже не первый раз и наверняка понимаете идею того, как это работает, но на всякий случай вот небольшое напоминание.",
        "first.time.explain": "Так как Вы здесь впервые сейчас я расскажу Вам как это работает.",
        "please.choose.values": "Пожалуйста выберете (я рекомендую начать с 3-5, если это Ваш первый раз) ключевые ценности, которые наиболее соответствуют Вашему текущему мироощущению. Используйте фильтр чтобы легче найти то, что Вам подходит.",
        "click.plus.value": "Нажмите на кнопку Плюс или дважды кликните на ценность, чтобы добавить её в выбранные. Если Вы не нашли необходимую ценность в списке, то используйте кнопку Плюс чтобы добавить свою ценность из поля фильтра. Используйте кнопку Минус чтобы убрать выделенную ценность из списка выбраных.",
        "if.you.on.mobile": "Если Вы используете приложение с мобильного телефона, то просто отметьте подходящие ценности в списке.",
        "available.vals": "Доступные ценности",
        "selected.vals": "Выбранные ценности",
        "placeholder.filter": "Начните набор текста для фильтра...",
        "placeholder.add": "Введите Вашу ценность...",
        "thanks": "Спасибо",
        "you.selected.vals.rate": "Вы выбрали Ваши ключевые ценности, но одна ценность может быть для Вас важнее другой, поэтому давайте их оценим!",
        "please.spec.prior.vals": "Пожалуйста, укажите приоритет для каждой из Ваших ценностей, от",
        "lowest.pr": "наименее важная",
        "highest.pr": "наиболее важная",
        "repeat.same.rating.vals": "Вы можете использовать одну и ту же оценку несколько раз (например, все 5 если все Ваши ценности одинаково очень важны для Вас).",
        "value": "Ценность",
        "rating": "Оценка",
        "to.val": "до",
        "awesome.vals.rated": "Отлично, с ценностями закончили. Теперь давайте перейдём к целям.",
        "any.number.of.goals": "Здесь Вы можете указать все цели, которые Вы перед собой ставити. Это могут быть несколько долгосрочных целей или много маленьких, краткосрочных целей.",
        "goal.select.val": "Если Вы чувствуете, что достижение цели соответствует одной из Ваших жизненных ценностей - выберете данную ценность в соответствующем выпадающем списке, но это необязательно.",
        "dont.set.any.goals": "Если обычно Вы не записываете свои цели, то самое время начать, хорошим стартом будет использовать Ваши ежедневные действия, чтобы сформулировать Ваши цели.",
        "click.plus.new.goal": "Нажмите кнопку Плюс чтобы добавить новую цель или кнопку Минус рядом с соответствующей целью чтобы удалить её.",
        "goal": "Цель",
        "corresponding.val": "Соответствующая ценность",
        "no.corresponding.val": "Нет соответствующей ценности",
        "perfect": "Отлично",
        "almost.done": "Мы почти закончили!",
        "lets.rate.goals": "Вы добавили свои цели, но наверняка достижение одних целей для Вас важнее, чем достижение других. Давайте их оценим!",
        "please.rate.goals": "Можалуйста, укажите оценку для каждой цели от",
        "repeat.more.goal": "Вы можете использовать одну и ту же оценку много раз (например, все 5 если они все для Вас одинаково важны).",
        "we.are.done": "Готово!",
        "thanks.contact": "Прежде всего, спасибо за то, что воспользовались этим приложением. Я надеюсь процесс был простым и понятным, но если вдруг Вы хотите предложить улучшение / исправление - пожалуйста,",
        "let.me.know": "дайте мне знать",
        "here.results": "Результаты анализа",
        "values.no.goals": "У Вас есть следующие ценности без соответствующих им целей",
        "values.no.goals.desc1": "Правильное планирование может помочь Вам больше работать на эти ценности, раз уж они действительно значимы для Вас.",
        "values.no.goals.desc2": "Или, может быть, проблема в том, что эти ценности на самом деле не так уж и значими и пришла пора пересмотреть взгляды на жизнь и ценности?",
        "goals.no.values": "У Вас есть следующие цели без соответствующих ценностей",
        "goals.no.values.desc1": "Похоже, что Вы тратите силы на достижение целей, которые не работают на Ваши жизненные ценности. Может быть Вам стоит уделять больше времени работе на то, что для Вас действительно важно?",
        "goals.no.values.desc2": "Возможно сейчас подходящий момент для того, чтобы поменять приоритеты Ваших целей, что в перспективе принесёт Вам больше удовлетворения в долгосрочной перспективе? Если же Вы уверены в том, что данные цели действительно для Вас важны, то вполне возможно в Вашей жизни есть и неучтённая ценность?",
        "half.high.pr.goals": "Более половины Ваших целей очень важны для Вас",
        "half.high.pr.desc1": "Я не знаю насколько Вы энергичный и работоспособный человек, но учитывайте, что погнавшись за двумя зайцами всегда есть риск не догнать ни одного.",
        "half.high.pr.desc2": "Может быть есть смысл пересмотреть оценку целей и сфокусировать основные усилия на тех целях, которые работают на Ваши приоритетные ценности?",
        "low.pr.values": "Более 75% Ваших ценностей не являются для Вас значимыми (это странно).",
        "low.pr.values.desc1": "Возможно есть смысл пересмотреть Ваши ценности и-или их оценку, найдя для себя то, что для Вас действительно значимо?",
        "low.pr.values.desc2": "Человеку бывает сложно определить и выразить словами его ключевые ценности, но это суть данного анализа, приложите усилия в данном направлении.",
        "low.pr.goals": "Более 75% Ваших целей не являются для Вас значимыми. Обычно наши цели это отражение действий, которые мы совершаем каждый день. Я уверен, что Вы делаете много полезных и важных для Вас действий. Подумайте, наверняка среди эти действий найдётся что-то, что поможет Вам пересмотреть оценку Ваших целей.",
        "low.pr.goals.desc": "Возможно имеет смысл либо пересмотреть оценку текущих целей, либо поставить новые, важные для Вас, цели, основанные на Ваших ежедневных действиях, которые будут работать на Ваши ключевые ценности.",
        "final.scores": "Финальные баллы",
        "score": "Балл",
        "everything.ok": "Всё отлично!",
        "too.much.effort": "Похоже, что Вы прикладываете слишком много усилий для достижения целей, работающих на менее значимые ценности. Возможно стоит уделять больше внимания тем целям, которые работают на более важные для Вас ценности.",
        "not.enough.goals": "Имеет смысл ставить больше целей(и совершать больше действий), которые работали бы на эту ценность. Текущих усилий недостаточно держа в уме значимость данной ценности для Вас.",
        "congrats.all.ok": "Поздравляю! Похоже, что Вы - тот самый человек, живущий во внутреннем согласии с собой, по крайней мере в рамках этих",
        "values": "ценностей",
        "scores.mean": "Что означают эти баллы?",
        "green": "Зелёный",
        "orange": "Оранжевый",
        "red": "Красный",
        "green.desc": "Приоритеты Ваших целей полностью совпадают с приоритетом данной ценности. Ваши действия работают на то, что для Вас действительно важно. Продолжайте в том же духе!",
        "orange.desc": "Для этой ценности есть возможные варианты улучшения ситуации. Наши ценности, в каком-то смысле, связывают нас. Так упорные попытки достичь целей, связанных с этой ценностью могут привести в ненужным переживаниям, стрессу, и т.п. Либо наоборот для данной ценности делается недостаточно соответствующих действий.",
        "red.desc": "Обратите особое внимание на данную ценность. Скорее всего Вы совершаете много действий для достижения целей, которые, в конечном итоге, не сделают Вас счастливее, т.к. не работают на Вашу приоритетную ценность. Либо наоборот Вы делаете очень мало для удовлетворения очень важной для Вас ценности. Самое время для само-рефлексии, сделайте паузу, подумайте о том, что для Вас действительно важно и какие действия стоит предпринять для достижения соответствующих целей.",
        "hold.to.hint": "Наведите курсор (или нажмите, если Вы используете мобильный телефон) на знак вопроса рядом с баллом чтобы получить подсказку.",
        "proceed.2.vals": "Я рекомендую добавить хотя бы 3 ценности для получения более точных результатов. Вы уверены, что хотите продолжить с 2 ценностям?",
        "less.2.vals": "Не имеет смысла продолжать без, как минимум, 2 ценностей. Пожалуйста выберете те, которые подходит Вам лучше всего.",
        "vals.miss.rate": "Пожалуйста убедить в том, что все Ваши ценности имеют соответствующую оценку.",
        "miss.goals": "Пожалуйста убедитесь в том, что Вы добавили хотя бы 1 цель.",
        "goals.miss.rate": "Пожалуйста убедитесь в том, что все Ваши цели имеют соответствующую оценку.",
        "confirm.all.goals": "Пожалуйста проверьте, что все Ваши цели на месте. Вы уверены, что хотите продолжить?",
        "app.use.localstorage": "Приложение использует локальное хранилище Вашего браузера, чтобы вам не приходилось каждый раз начинать заново. Если Вы не хотите хранить результат локально, то нажмите кнопку \"Закрыть и Очистить\".",
        "share.social": "Вы можете поделиться данным приложением с друзьями и знакомыми в социальных сетях кликнув на соответствующую иконку.",
        "send.gift": "Если Вы нашли данное приложение полезным для себя и хотите отблагодарить меня, то нажмите на кнопку \"Отправьте мне подарок\" ;).",
        "close.reset.btn": "Закрыть и Очистить",
        "close.btn": "Закрыть",
        "send.gift.btn": "Отправьте мне подарок"
    },

}