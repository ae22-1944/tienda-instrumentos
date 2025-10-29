$(document).ready(function () {
  const $themeToggle = $('#themeToggle');
  const $themeIcon = $('#themeIcon');
  const $body = $('body');

  if (localStorage.getItem('dark-mode') === 'enabled') {
    $body.addClass('dark-mode');
    $themeIcon.removeClass('bi-moon').addClass('bi-sun');
  }

  $themeToggle.on('click', function () {
    $body.toggleClass('dark-mode');
    if ($body.hasClass('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      $themeIcon.removeClass('bi-moon').addClass('bi-sun');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      $themeIcon.removeClass('bi-sun').addClass('bi-moon');
    }
  });

  $(document).ready(function () {
    $('#enviarCorreo').on('click', function (event) {
      event.preventDefault();

      const email = $('#campoCorreo').val().trim();
      const subject = $('#asunto').val().trim();
      const message = $('#mensaje').val().trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      $('#emailAlert').remove();

      let alertType, alertMessage;

      if (!email || !subject || !message) {
        alertType = 'warning';
        alertMessage = 'Por favor, llena todos los campos antes de enviar.';
      } else if (!emailRegex.test(email)) {
        alertType = 'danger';
        alertMessage = 'Por favor, introduce un correo electrónico válido.';
      } else {
        alertType = 'success';
        alertMessage = 'Mensaje enviado con éxito.';
        $('#campoCorreo, #subject, #message').val('');
      }

      $('body').prepend(`
        <div id="emailAlert" class="alert alert-${alertType} text-center" role="alert">
          ${alertMessage}
        </div>
      `);

      $('#emailAlert').css({
        position: 'absolute',
        top: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        'z-index': '1050',
        width: 'auto',
        'max-width': '80%',
        padding: '10px 20px',
      });

      setTimeout(function () {
        $('#emailAlert').fadeOut('slow', function () {
          $(this).remove();
        });
      }, 3000);
    });
  });
});
