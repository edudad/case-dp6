// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No ultimo caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
    
//  <!-- Google Analytics -->
  


//  <!-- End Google Analytics -->

function contato(){



    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });


};


function download_pdf(){



    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });


};


function analise(texto){



    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: texto
      });


};


function mudou(texto){


    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: texto,
        eventLabel: 'preencheu'
      });



};


aceito.onchange = function() {
    if(this.checked) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'preencheu'
          });
    
    }
};



function form_enviado(){


    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
      });




};

