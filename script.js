document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.acc-trigger');
    
    triggers.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isOpen = item.classList.contains('open');
            
            document.querySelectorAll('.acc-item').forEach(i => {
                i.classList.remove('open');
            });
            
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
});
