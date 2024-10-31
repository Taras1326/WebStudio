



const allLang = ['ua', 'en'];

select.addEventListener('change', ChangeURLLanguage);


function ChangeURLLanguage(){
    let.lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload();
}

function ChangeLanguage(){
    let hash = window.location.hash;
    console.log(hash);
    hash = hash.substr(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.nav-link').innerHTML = langArr['.link'][hash];
}


ChangeLanguage();



var arrLang = {
    'en': {
        'studio': 'Studio' ,
        'portfolio': 'Portfolio' ,
        'contacts': 'Contacts' ,
    },
    'ukr': {
        'studio': 'Студія' ,
        'portfolio': 'Портфоліо' ,
        'contacts': 'Контакти'  ,
    }
}

$(function () {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, mains) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        }); 
    });
});