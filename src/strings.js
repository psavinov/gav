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
        "header": "???????????????????? ?????????? ?? ??????????????????",
        "hello": "????????????",
        "years.ago.published": "?????????????????? ?????? ?????????? ?? ??????????????????????",
        "this.post": "???????? ????????",
        "on.linkedin.tried": "?? LinkedIn. ?? ?????? ?? ?????????????????? ?????????????????? ?????? ???????????? ?? ???????????????????????? ?? ?????????? ?? ?? ???????????????????? ?????????? ?? ??????????????????.",
        "got.feedback": "?? ?????? ?????? ?? ?????????????? ???????????????? ???????????????? ?????????? ?? ??????, ?????? ???????? ???????????? ???? ???????? ?????????????? ?? ???????????????????? ?? ???????????????? ?????? ??????????????????????, ?????????????? ?????? ??????????????????.",
        "most.difficult.part": "???? ?????????????????? ?????????? ?????????????? ???????????????? ?????????????????? ???????????????????? ???????????????? ??????????????????, ???????????????? ?????? ?????? ???? ??????, ?? ???????? ?????? ?????????????? ???? ??????????????????????????.",
        "reference.point": "?? ???????? ?????????????? ???????????????????? ?? ???????????? ?????????????????? ???????????? ??????????????????, ???? ?????????????? ???? ???????????? ?????????????? ????, ?????? ???????????????????????? ???????????? ???????????????????????? ?? ???????????? ????????????.",
        "price.disclaimer": "?????? ???????????????????? ?????????????????? ??????????????????. ?? ???? ?????????? ?????? ?????????????????? ???? ?????????????????? ?? ?????????? ?? ??.??. ???????????????????? ???? ???????????? ???????????????????????? ???????????? ?? ???? ???????????? ???? ???????????????? ",
        "source.code": "???????????????? ?????? ????????????????",
        "here": "??????????",
        "start.btn": "????????????!",
        "default.name.first":"????????????, ???? ?????????????????????? ?????????????????????? ??????????????, ???????? ?????????????????????????? ?????? ???? ??????????????????.",
        "type.your.name":"???????????????????? ?????????????? ???????? ?????? ?? ???????? ??????????, ???????? ???????????????? ?????? ???????????? ???????? ?????? ???????????????? ?????????????????? ???? ?????????????????? ;).",
        "welcome.back": "?? ?????????? ????????????????????????! ?????????????? ???????????? ?????? ?????? ??????. ???????? ?????? ???????????????? ?????????????? ??????????????????, ???? ???????????? ?????????? ???????????????????? ???????? ??????.",
        "prefer.different": "?? ?????????????????????????? ???????????? ??????, ????????????????????, ?????????????? ?????? ?? ???????? ??????????.",
        "you.are.not": "???????? ???? ????",
        "preferred.name": "???????????????????????????? ??????????????????",
        "back.btn": "??????????",
        "continue.btn": "????????????????????",
        "hey": "??????????????????",
        "thanks.intro": "?????????????? ???? ????, ?????? ??????????????????????????, ???????????? ?????????????? ?????????? ?? ?????? ???????????? ????????!",
        "not.first.time.reminder": "???? ?????????? ?????? ???? ???????????? ?????? ?? ?????????????????? ?????????????????? ???????? ????????, ?????? ?????? ????????????????, ???? ???? ???????????? ???????????? ?????? ?????????????????? ??????????????????????.",
        "first.time.explain": "?????? ?????? ???? ?????????? ?????????????? ???????????? ?? ???????????????? ?????? ?????? ?????? ????????????????.",
        "please.choose.values": "???????????????????? ???????????????? (?? ???????????????????? ???????????? ?? 3-5, ???????? ?????? ?????? ???????????? ??????) ???????????????? ????????????????, ?????????????? ???????????????? ?????????????????????????? ???????????? ???????????????? ????????????????????????. ?????????????????????? ???????????? ?????????? ?????????? ?????????? ????, ?????? ?????? ????????????????.",
        "click.plus.value": "?????????????? ???? ???????????? ???????? ?????? ???????????? ???????????????? ???? ????????????????, ?????????? ???????????????? ???? ?? ??????????????????. ???????? ???? ???? ?????????? ?????????????????????? ???????????????? ?? ????????????, ???? ?????????????????????? ???????????? ???????? ?????????? ???????????????? ???????? ???????????????? ???? ???????? ??????????????. ?????????????????????? ???????????? ?????????? ?????????? ???????????? ???????????????????? ???????????????? ???? ???????????? ????????????????.",
        "if.you.on.mobile": "???????? ???? ?????????????????????? ???????????????????? ?? ???????????????????? ????????????????, ???? ???????????? ???????????????? ???????????????????? ???????????????? ?? ????????????.",
        "available.vals": "?????????????????? ????????????????",
        "selected.vals": "?????????????????? ????????????????",
        "placeholder.filter": "?????????????? ?????????? ???????????? ?????? ??????????????...",
        "placeholder.add": "?????????????? ???????? ????????????????...",
        "thanks": "??????????????",
        "you.selected.vals.rate": "???? ?????????????? ???????? ???????????????? ????????????????, ???? ???????? ???????????????? ?????????? ???????? ?????? ?????? ???????????? ????????????, ?????????????? ?????????????? ???? ????????????!",
        "please.spec.prior.vals": "????????????????????, ?????????????? ?????????????????? ?????? ???????????? ???? ?????????? ??????????????????, ????",
        "lowest.pr": "???????????????? ????????????",
        "highest.pr": "???????????????? ????????????",
        "repeat.same.rating.vals": "???? ???????????? ???????????????????????? ???????? ?? ???? ???? ???????????? ?????????????????? ?????? (????????????????, ?????? 5 ???????? ?????? ???????? ???????????????? ?????????????????? ?????????? ?????????? ?????? ??????).",
        "value": "????????????????",
        "rating": "????????????",
        "to.val": "????",
        "awesome.vals.rated": "??????????????, ?? ???????????????????? ??????????????????. ???????????? ?????????????? ???????????????? ?? ??????????.",
        "any.number.of.goals": "?????????? ???? ???????????? ?????????????? ?????? ????????, ?????????????? ???? ?????????? ?????????? ??????????????. ?????? ?????????? ???????? ?????????????????? ???????????????????????? ?????????? ?????? ?????????? ??????????????????, ?????????????????????????? ??????????.",
        "goal.select.val": "???????? ???? ????????????????????, ?????? ???????????????????? ???????? ?????????????????????????? ?????????? ???? ?????????? ?????????????????? ?????????????????? - ???????????????? ???????????? ???????????????? ?? ?????????????????????????????? ???????????????????? ????????????, ???? ?????? ??????????????????????????.",
        "dont.set.any.goals": "???????? ???????????? ???? ???? ?????????????????????? ???????? ????????, ???? ?????????? ?????????? ????????????, ?????????????? ?????????????? ?????????? ???????????????????????? ???????? ???????????????????? ????????????????, ?????????? ???????????????????????????? ???????? ????????.",
        "click.plus.new.goal": "?????????????? ???????????? ???????? ?????????? ???????????????? ?????????? ???????? ?????? ???????????? ?????????? ?????????? ?? ?????????????????????????????? ?????????? ?????????? ?????????????? ????.",
        "goal": "????????",
        "corresponding.val": "?????????????????????????????? ????????????????",
        "no.corresponding.val": "?????? ?????????????????????????????? ????????????????",
        "perfect": "??????????????",
        "almost.done": "???? ?????????? ??????????????????!",
        "lets.rate.goals": "???? ???????????????? ???????? ????????, ???? ?????????????????? ???????????????????? ?????????? ?????????? ?????? ?????? ????????????, ?????? ???????????????????? ????????????. ?????????????? ???? ????????????!",
        "please.rate.goals": "????????????????????, ?????????????? ???????????? ?????? ???????????? ???????? ????",
        "repeat.more.goal": "???? ???????????? ???????????????????????? ???????? ?? ???? ???? ???????????? ?????????? ?????? (????????????????, ?????? 5 ???????? ?????? ?????? ?????? ?????? ?????????????????? ??????????).",
        "we.are.done": "????????????!",
        "thanks.contact": "???????????? ??????????, ?????????????? ???? ????, ?????? ?????????????????????????????? ???????? ??????????????????????. ?? ?????????????? ?????????????? ?????? ?????????????? ?? ????????????????, ???? ???????? ?????????? ???? ???????????? ???????????????????? ?????????????????? / ?????????????????????? - ????????????????????,",
        "let.me.know": "?????????? ?????? ??????????",
        "here.results": "???????????????????? ??????????????",
        "values.no.goals": "?? ?????? ???????? ?????????????????? ???????????????? ?????? ?????????????????????????????? ???? ??????????",
        "values.no.goals.desc1": "???????????????????? ???????????????????????? ?????????? ???????????? ?????? ???????????? ???????????????? ???? ?????? ????????????????, ?????? ???? ?????? ?????????????????????????? ?????????????? ?????? ??????.",
        "values.no.goals.desc2": "??????, ?????????? ????????, ???????????????? ?? ??????, ?????? ?????? ???????????????? ???? ?????????? ???????? ???? ?????? ???? ?? ?????????????? ?? ???????????? ???????? ???????????????????????? ?????????????? ???? ?????????? ?? ?????????????????",
        "goals.no.values": "?? ?????? ???????? ?????????????????? ???????? ?????? ?????????????????????????????? ??????????????????",
        "goals.no.values.desc1": "????????????, ?????? ???? ?????????????? ???????? ???? ???????????????????? ??????????, ?????????????? ???? ???????????????? ???? ???????? ?????????????????? ????????????????. ?????????? ???????? ?????? ?????????? ?????????????? ???????????? ?????????????? ???????????? ???? ????, ?????? ?????? ?????? ?????????????????????????? ???????????",
        "goals.no.values.desc2": "???????????????? ???????????? ???????????????????? ???????????? ?????? ????????, ?????????? ???????????????? ???????????????????? ?????????? ??????????, ?????? ?? ?????????????????????? ???????????????? ?????? ???????????? ???????????????????????????? ?? ???????????????????????? ??????????????????????? ???????? ???? ???? ?????????????? ?? ??????, ?????? ???????????? ???????? ?????????????????????????? ?????? ?????? ??????????, ???? ???????????? ???????????????? ?? ?????????? ?????????? ???????? ?? ???????????????????? ?????????????????",
        "half.high.pr.goals": "?????????? ???????????????? ?????????? ?????????? ?????????? ?????????? ?????? ??????",
        "half.high.pr.desc1": "?? ???? ???????? ?????????????????? ???? ???????????????????? ?? ?????????????????????????????? ??????????????, ???? ????????????????????, ?????? ???????????????????? ???? ?????????? ?????????????? ???????????? ???????? ???????? ???? ?????????????? ???? ????????????.",
        "half.high.pr.desc2": "?????????? ???????? ???????? ?????????? ???????????????????????? ???????????? ?????????? ?? ?????????????????????????? ???????????????? ???????????? ???? ?????? ??????????, ?????????????? ???????????????? ???? ???????? ???????????????????????? ?????????????????",
        "low.pr.values": "?????????? 75% ?????????? ?????????????????? ???? ???????????????? ?????? ?????? ?????????????????? (?????? ??????????????).",
        "low.pr.values.desc1": "???????????????? ???????? ?????????? ???????????????????????? ???????? ???????????????? ??-?????? ???? ????????????, ?????????? ?????? ???????? ????, ?????? ?????? ?????? ?????????????????????????? ???????????????",
        "low.pr.values.desc2": "???????????????? ???????????? ???????????? ???????????????????? ?? ???????????????? ?????????????? ?????? ???????????????? ????????????????, ???? ?????? ???????? ?????????????? ??????????????, ?????????????????? ???????????? ?? ???????????? ??????????????????????.",
        "low.pr.goals": "?????????? 75% ?????????? ?????????? ???? ???????????????? ?????? ?????? ??????????????????. ???????????? ???????? ???????? ?????? ?????????????????? ????????????????, ?????????????? ???? ?????????????????? ???????????? ????????. ?? ????????????, ?????? ???? ?????????????? ?????????? ???????????????? ?? ???????????? ?????? ?????? ????????????????. ??????????????????, ?????????????????? ?????????? ?????? ???????????????? ???????????????? ??????-????, ?????? ?????????????? ?????? ???????????????????????? ???????????? ?????????? ??????????.",
        "low.pr.goals.desc": "???????????????? ?????????? ?????????? ???????? ???????????????????????? ???????????? ?????????????? ??????????, ???????? ?????????????????? ??????????, ???????????? ?????? ??????, ????????, ???????????????????? ???? ?????????? ???????????????????? ??????????????????, ?????????????? ?????????? ???????????????? ???? ???????? ???????????????? ????????????????.",
        "final.scores": "?????????????????? ??????????",
        "score": "????????",
        "everything.ok": "?????? ??????????????!",
        "too.much.effort": "????????????, ?????? ???? ?????????????????????????? ?????????????? ?????????? ???????????? ?????? ???????????????????? ??????????, ???????????????????? ???? ?????????? ???????????????? ????????????????. ???????????????? ?????????? ?????????????? ???????????? ???????????????? ?????? ??????????, ?????????????? ???????????????? ???? ?????????? ???????????? ?????? ?????? ????????????????.",
        "not.enough.goals": "?????????? ?????????? ?????????????? ???????????? ??????????(?? ?????????????????? ???????????? ????????????????), ?????????????? ???????????????? ???? ???? ?????? ????????????????. ?????????????? ???????????? ???????????????????????? ?????????? ?? ?????? ???????????????????? ???????????? ???????????????? ?????? ??????.",
        "congrats.all.ok": "????????????????????! ????????????, ?????? ???? - ?????? ?????????? ??????????????, ?????????????? ???? ???????????????????? ???????????????? ?? ??????????, ???? ?????????????? ???????? ?? ???????????? ????????",
        "values": "??????????????????",
        "scores.mean": "?????? ???????????????? ?????? ???????????",
        "green": "??????????????",
        "orange": "??????????????????",
        "red": "??????????????",
        "green.desc": "???????????????????? ?????????? ?????????? ?????????????????? ?????????????????? ?? ?????????????????????? ???????????? ????????????????. ???????? ???????????????? ???????????????? ???? ????, ?????? ?????? ?????? ?????????????????????????? ??????????. ?????????????????????? ?? ?????? ???? ????????!",
        "orange.desc": "?????? ???????? ???????????????? ???????? ?????????????????? ???????????????? ?????????????????? ????????????????. ???????? ????????????????, ?? ??????????-???? ????????????, ?????????????????? ??????. ?????? ?????????????? ?????????????? ?????????????? ??????????, ?????????????????? ?? ???????? ?????????????????? ?????????? ???????????????? ?? ???????????????? ????????????????????????, ??????????????, ?? ??.??. ???????? ???????????????? ?????? ???????????? ???????????????? ???????????????? ???????????????????????? ?????????????????????????????? ????????????????.",
        "red.desc": "???????????????? ???????????? ???????????????? ???? ???????????? ????????????????. ???????????? ?????????? ???? ???????????????????? ?????????? ???????????????? ?????? ???????????????????? ??????????, ??????????????, ?? ???????????????? ??????????, ???? ?????????????? ?????? ????????????????????, ??.??. ???? ???????????????? ???? ???????? ???????????????????????? ????????????????. ???????? ???????????????? ???? ?????????????? ?????????? ???????? ?????? ???????????????????????????? ?????????? ???????????? ?????? ?????? ????????????????. ?????????? ?????????? ?????? ????????-??????????????????, ???????????????? ??????????, ?????????????????? ?? ??????, ?????? ?????? ?????? ?????????????????????????? ?????????? ?? ?????????? ???????????????? ?????????? ?????????????????????? ?????? ???????????????????? ?????????????????????????????? ??????????.",
        "hold.to.hint": "???????????????? ???????????? (?????? ??????????????, ???????? ???? ?????????????????????? ?????????????????? ??????????????) ???? ???????? ?????????????? ?????????? ?? ???????????? ?????????? ???????????????? ??????????????????.",
        "proceed.2.vals": "?? ???????????????????? ???????????????? ???????? ???? 3 ???????????????? ?????? ?????????????????? ?????????? ???????????? ??????????????????????. ???? ??????????????, ?????? ???????????? ???????????????????? ?? 2 ???????????????????",
        "less.2.vals": "???? ?????????? ???????????? ???????????????????? ??????, ?????? ??????????????, 2 ??????????????????. ???????????????????? ???????????????? ????, ?????????????? ???????????????? ?????? ?????????? ??????????.",
        "vals.miss.rate": "???????????????????? ?????????????? ?? ??????, ?????? ?????? ???????? ???????????????? ?????????? ?????????????????????????????? ????????????.",
        "miss.goals": "???????????????????? ?????????????????? ?? ??????, ?????? ???? ???????????????? ???????? ???? 1 ????????.",
        "goals.miss.rate": "???????????????????? ?????????????????? ?? ??????, ?????? ?????? ???????? ???????? ?????????? ?????????????????????????????? ????????????.",
        "confirm.all.goals": "???????????????????? ??????????????????, ?????? ?????? ???????? ???????? ???? ??????????. ???? ??????????????, ?????? ???????????? ?????????????????????",
        "app.use.localstorage": "???????????????????? ???????????????????? ?????????????????? ?????????????????? ???????????? ????????????????, ?????????? ?????? ???? ?????????????????????? ???????????? ?????? ???????????????? ????????????. ???????? ???? ???? ???????????? ?????????????? ?????????????????? ????????????????, ???? ?????????????? ???????????? \"?????????????? ?? ????????????????\".",
        "share.social": "???? ???????????? ???????????????????? ???????????? ?????????????????????? ?? ???????????????? ?? ?????????????????? ?? ???????????????????? ?????????? ?????????????? ???? ?????????????????????????????? ????????????.",
        "send.gift": "???????? ???? ?????????? ???????????? ???????????????????? ???????????????? ?????? ???????? ?? ???????????? ?????????????????????????? ????????, ???? ?????????????? ???? ???????????? \"?????????????????? ?????? ??????????????\" ;).",
        "close.reset.btn": "?????????????? ?? ????????????????",
        "close.btn": "??????????????",
        "send.gift.btn": "?????????????????? ?????? ??????????????"
    },

}