// Zenith Market Hub Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Simulate Real-time Market Data Flux
    const btcPrice = document.getElementById('btc-price');
    const goldPrice = document.getElementById('gold-price');
    const silverPrice = document.getElementById('silver-price');

    const updatePrice = (element, baseValue, prefix = "$") => {
        const flux = (Math.random() - 0.5) * 2; // Random change between -1 and 1
        const newValue = baseValue + flux;
        element.innerText = prefix + newValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    let btcBase = 69157.62;
    let goldBase = 2184.20;
    let silverBase = 24.57;

    setInterval(() => {
        btcBase += (Math.random() - 0.5) * 10;
        goldBase += (Math.random() - 0.5) * 0.5;
        silverBase += (Math.random() - 0.5) * 0.05;
        
        updatePrice(btcPrice, btcBase);
        updatePrice(goldPrice, goldBase);
        updatePrice(silverPrice, silverBase);
    }, 2000);

    // 3. Typining Animation for AI Insight
    const insightTextElement = document.getElementById('ai-insight-text');
    const insights = [
        "Gold (XAU) is showing consolidation at $2,184. Gemini detects low-correlation signals between HKMA liquidity reports and BTC intraday volatility.",
        "Bitcoin RSI suggests temporary overbought status. AI Sentiment suggests $68.5k support floor based on regional flows.",
        "Silver manufacturing demand in APAC is up by 12% following recent industrial trade agreements. Long-term trend: Positive."
    ];
    let currentInsightIndex = 0;

    const typeInsight = (text) => {
        insightTextElement.innerHTML = "[INITIALIZING SENTIENT SCAN...]<br>";
        let i = 0;
        const speed = 30; // Typing speed in ms
        
        const typeChar = () => {
            if (i < text.length) {
                insightTextElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            }
        };
        typeChar();
    };

    // Cycle through insights every 10 seconds
    setInterval(() => {
        currentInsightIndex = (currentInsightIndex + 1) % insights.length;
        typeInsight(insights[currentInsightIndex]);
    }, 10000);

    // 4. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .data-card, .insight-console').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    });

    // Add hidden classes to simulate reveal
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
