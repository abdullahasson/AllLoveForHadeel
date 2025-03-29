// نختار العناصر من الصفحة
const button = document.getElementById('content');
const textElement = document.getElementById('text');
const hours = document.querySelector('.content h1')
const dname = document.getElementById('dname');

// ننشئ قارئ النصوص
const speech = new SpeechSynthesisUtterance();

// نضبط اللغة العربية
speech.lang = 'ar-SA';

// دالة لقراءة النص
function readText() {
    // نجلب النص من العنصر المخفي
    const text = textElement.textContent;
    
    // نضبط النص للقارئ
    speech.text = text;
    
    // نبدأ القراءة
    window.speechSynthesis.speak(speech);
}

// نضيف حدث النقر على الزر
button.addEventListener('click', readText);




const names = [
    'هدهد', 'هداهيدو', 'هدولي', 'عبودي', 
    'هدوش', 'هدولتي', 'لولا', 'هديلو' , 
    'سبايدرمانة' , 'هديلي' , 'هدو' , 
    'يايا' , 'هدود' , 'سمرتي الجميلة' , 
    'ملاكي الصغيرة' , 'هداهد' , 'هيدو' , 'أم خدود' 
];

function createHeart() {
    const time = new Date()
    const heart = document.createElement('div');
    heart.className = 'heart';

    const text = document.createElement('div');
    text.className = 'heart-text';
    text.textContent = names[Math.floor(Math.random() * names.length)];
    
    heart.appendChild(text);

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const tx = (Math.random() - 0.5) * 500;
    const ty = (Math.random() - 0.5) * 500;

    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    hours.textContent = time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds()

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(() => {
    dname.textContent = names[Math.floor(Math.random() * names.length)];
} , 1000);

setInterval(createHeart, 300);