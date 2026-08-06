// JavaScript Canvas & Code Studio Interaction
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('btn-submit-lead');
    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const formMessage = document.getElementById('form-message');

    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();

            if (!name || !email) {
                alert('Por favor, preencha seu nome e e-mail para receber a proposta.');
                return;
            }

            // Simulate form submission
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                submitBtn.textContent = 'Solicitar Proposta Comercial';
                submitBtn.style.opacity = '1';
                nameInput.value = '';
                emailInput.value = '';

                formMessage.style.display = 'block';
                formMessage.textContent = `Obrigado, ${name}! Sua solicitação foi recebida. Entraremos em contato em até 10 minutos no e-mail ${email}.`;
            }, 1000);
        });
    }

    // Interactive card tilt effect
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(0, 240, 255, 0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        });
    });
});
