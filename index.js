window.onload = function() {
    const messages = [
        "Umuaah I love you Naw 💕",
        "I’m sorry mene apka dil nhi dukhana tha 💔",
        "Mujy trust ha ap pr naw i love you 💖",
        "Mein complain krti hu kyunka mein pyar krti hu 🌹",
        "I am sorry plz🥺",
        "Mene apka dil nhi dukhana tha i know mene apka dil dukhaya i am sorry plz man jyen mein hamesha ulat pulat kr deti hu sab i am sorry naw i love you so much",
        "❤️ Umuaah Naw, I love you! Sorry naw ❤️"
    ];

    let index = 0;
    const messageEl = document.getElementById('message');
    const nextBtn = document.getElementById('nextBtn');

    nextBtn.addEventListener('click', function() {
        if (index < messages.length) {
            messageEl.textContent = messages[index];
            index++;
            if (index === messages.length) {
                nextBtn.textContent = "❤️ Done ❤️";
                nextBtn.disabled = true;
            }
        }
    });

    // Floating hearts
    const heartsContainer = document.querySelector('.hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = (15 + Math.random() * 25) + 'px';
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }

    setInterval(createHeart, 200);
};