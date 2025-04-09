// Incluir el script de EmailJS en tu HTML
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar EmailJS
    emailjs.init("Web Impulse"); // Reemplaza con tu User ID proporcionado por EmailJS

    // Seleccionar el formulario
    const form = document.getElementById("contact-form");

    // Escuchar el evento de envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const emailParams = {
            form_name: document.getElementById("form-name").value,
            form_email: document.getElementById("form-email").value,
            form_message: document.getElementById("form-message").value,
        };

        // Usar el servicio EmailJS para enviar el correo
        emailjs.send("service_5hhik7e", "template_4yslbt8", emailParams)
            .then(function(response) {
                alert("¡Correo enviado exitosamente!");
                console.log("Correo enviado:", response);
            })
            .catch(function(error) {
                alert("Error al enviar el correo. Por favor, intenta nuevamente.");
                console.error("Error:", error);
            });
    });
});