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

.petal {
    position: fixed;
    background: #ffb7c5;
    border-radius: 15px 2px 15px 15px;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.8;
    animation: fall linear forwards;
}

@keyframes fall {
    0% {
        transform: translateY(-20px) rotate(0deg);
    }
    100% {
        transform: translateY(105vh) rotate(360deg);
    }
}

