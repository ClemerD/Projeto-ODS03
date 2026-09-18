(function () {

  const form = document.getElementById('signup-form');
  const status = document.getElementById('form-status');
  const fallbackNote = document.getElementById('fallback-note');
  const waLink = document.getElementById('whatsapp-fallback');


  // =========================================
  // LINK DO WHATSAPP
  // =========================================

  function buildWhatsappLink(nome, contato, perfil) {

    const perfilLabel = {
      gestante: 'sou gestante',
      familia: 'tenho um bebê pequeno',
      comunidade: 'quero apoiar a divulgação'
    }[perfil] || 'quero participar';


    const text = encodeURIComponent(
      `Olá! Sou ${nome} e quero participar da roda de conversa sobre saúde na primeira infância (${perfilLabel}). Meu contato: ${contato}`
    );


    return `https://wa.me/?text=${text}`;
  }


  // =========================================
  // ENVIO DO FORMULÁRIO
  // =========================================

  form.addEventListener('submit', async function (e) {

    e.preventDefault();


    const nome = document
      .getElementById('nome')
      .value
      .trim();


    const contato = document
      .getElementById('contato')
      .value
      .trim();


    const perfil = document
      .getElementById('perfil')
      .value;


    // =========================================
    // VALIDAÇÃO
    // =========================================

    if (!nome || !contato) {

      status.dataset.state = 'err';

      status.textContent =
        'Preencha nome e contato.';

      return;
    }


    // =========================================
    // STATUS DE ENVIO
    // =========================================

    status.dataset.state = '';

    status.textContent = 'Enviando…';

    fallbackNote.hidden = true;


    let saved = false;


    // =========================================
    // TENTATIVA DE SALVAR NO BANCO
    // =========================================

    try {

      if (
        window.claude &&
        typeof window.claude.use === 'function'
      ) {

        const db = await window.claude.use('db');


        if (db) {

          await db
            .collection('inscricoes')
            .add({
              nome: nome,
              contato: contato,
              perfil: perfil,
              criadoEm: new Date().toISOString()
            });


          saved = true;
        }
      }

    } catch (err) {

      console.error(
        'Erro ao salvar inscrição:',
        err
      );

      saved = false;
    }


    // =========================================
    // RESULTADO
    // =========================================

    if (saved) {

      status.dataset.state = 'ok';

      status.textContent =
        'Prontinho! Vamos te avisar com a data e o local.';


      form.reset();

    } else {

      status.dataset.state = 'err';

      status.textContent =
        'Não deu para salvar automaticamente aqui.';


      waLink.href =
        buildWhatsappLink(
          nome,
          contato,
          perfil
        );


      fallbackNote.hidden = false;
    }

  });




// =========================================
// ANIMAÇÃO DAS BARRAS DO GRÁFICO
// =========================================

document.addEventListener("DOMContentLoaded", function () {

  const barras = document.querySelectorAll(".bar-fill");

  console.log("Barras encontradas:", barras.length);

  barras.forEach(function (barra, index) {

    const largura = barra.getAttribute("data-width");

    console.log("Barra:", index, "Largura:", largura);

    setTimeout(function () {
      barra.style.width = largura;
    }, 300 + (index * 250));

  });

});
})();