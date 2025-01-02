const quotes = [
    " None can destroy iron, but its own rust can!. Likewise, none can destory a person, but their own mindset can. ",
    "Power and Wealth are not two of my main stakes.",
    "Don't wait for opportunities to come to you,create your own opportunities",
    "If you want to walk fast ,walk alone. But if you want to walk far,walk together.",
    "Never understimate the power kindness, empathy, and compassion in your interactions with others.,"
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
});
 