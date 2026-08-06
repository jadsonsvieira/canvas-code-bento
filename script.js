// Interactive Script - Canvas & Code Showcase
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Portfolio Cases Tabs Switcher
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 2. Currency Switcher (BRL vs USD)
    const currencyToggle = document.getElementById('currency-toggle');
    const priceElements = document.querySelectorAll('.price-val');

    if (currencyToggle) {
        currencyToggle.addEventListener('change', () => {
            const isUsd = currencyToggle.checked;
            priceElements.forEach(priceEl => {
                const brlVal = priceEl.getAttribute('data-brl');
                const usdVal = priceEl.getAttribute('data-usd');

                priceEl.style.opacity = '0';
                setTimeout(() => {
                    priceEl.textContent = isUsd ? usdVal : brlVal;
                    priceEl.style.opacity = '1';
                }, 150);
            });
        });
    }

    // 3. Lead Form Simulation
    const leadForm = document.getElementById('lead-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('btn-submit-lead');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('client-name').value;
            const email = document.getElementById('client-email').value;
            const service = document.getElementById('client-service').value;

            submitBtn.textContent = 'Enviando Solicitação...';
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                submitBtn.textContent = 'Solicitar Orçamento Expresso';
                submitBtn.style.opacity = '1';

                formMessage.style.display = 'block';
                formMessage.innerHTML = `✨ <strong>Solicitação Recebida com Sucesso!</strong><br>Obrigado, ${name}. Nossa equipe do Canvas & Code entrará em contato via <em>${email}</em> em até 10 minutos para alinhar o <strong>${service}</strong>.`;
                
                leadForm.reset();
            }, 1000);
        });
    }
});
