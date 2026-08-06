// Sales Magnet Engine - Canvas & Code
document.addEventListener('DOMContentLoaded', () => {

    // 1. Lead Magnet Form Handler
    const magnetForm = document.getElementById('magnet-form');
    const magnetStatus = document.getElementById('magnet-status');
    const submitBtn = document.getElementById('btn-submit-magnet');

    if (magnetForm) {
        magnetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const siteUrl = document.getElementById('site-url').value;
            const siteEmail = document.getElementById('site-email').value;

            submitBtn.textContent = 'Analisando site e gerando prévia...';
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                submitBtn.textContent = 'Gerar Diagnóstico & Prévia Grátis';
                submitBtn.style.opacity = '1';

                magnetStatus.style.display = 'block';
                magnetStatus.innerHTML = `✨ <strong>Diagnóstico Solicitado!</strong><br>Analisando <em>${siteUrl}</em>. O relatório executivo + protótipo Bento Box será enviado para <em>${siteEmail}</em> em até 2 horas.`;
                
                magnetForm.reset();
            }, 1200);
        });
    }

    // 2. Real-Time ROI Calculator
    const visitorsInput = document.getElementById('visitors-input');
    const ticketInput = document.getElementById('ticket-input');
    const currentRevEl = document.getElementById('current-rev');
    const projectedRevEl = document.getElementById('projected-rev');
    const gainValEl = document.getElementById('gain-val');

    function calculateROI() {
        if (!visitorsInput || !ticketInput) return;

        const visitors = parseFloat(visitorsInput.value) || 0;
        const ticket = parseFloat(ticketInput.value) || 0;

        // Current conversion: 1%
        const currentSales = visitors * 0.01;
        const currentRev = currentSales * ticket;

        // Bento Box optimized conversion: 2.5%
        const projectedSales = visitors * 0.025;
        const projectedRev = projectedSales * ticket;

        const gain = projectedRev - currentRev;

        const formatBRL = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        currentRevEl.textContent = formatBRL(currentRev);
        projectedRevEl.textContent = formatBRL(projectedRev);
        gainValEl.textContent = `${formatBRL(gain)} / mês`;
    }

    if (visitorsInput && ticketInput) {
        visitorsInput.addEventListener('input', calculateROI);
        ticketInput.addEventListener('input', calculateROI);
        calculateROI(); // Initial run
    }
});
