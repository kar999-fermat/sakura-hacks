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

    setInterval(() => {
        const i = document.createElement('div');
        i.classList.add('petal');
        i.innerText = '🌸';
        i.style.left = Math.random() * 100 + 'vw';
        i.style.fontSize = (Math.random() * 10 + 10) + 'px';
        i.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(i);
        setTimeout(() => {
            i.remove();
        }, 10000);
    }, 400);
});
