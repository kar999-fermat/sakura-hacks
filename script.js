document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Mechanics
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.accordion-header');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
            
            if (!isOpen) {
                currentItem.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
