const msg = document.getElementById('msg');
const inpName = document.getElementById('inpName');
const btn = document.getElementById('btn');

function happeyEid(person) {
    const msges = [
        'عيد سعيد يا',
        'كل سنة وانت طيب يا',
        ' عيد مبارك يا ',
        'وأسأل من الله أن يتقبل طاعتك وصيامك وقيامك وأن يجعل العيد لك كُله فرحًا وسرورًا يا',
        'عيد الفطر فرحة لا تكتمل إلّا بوجودك،',
        'والعيد بهجة لا تحلو إلّا بقربك، كل عام وأنت بخير',
        '  كل عام وأنت بألف خير أعاده الله عليك يا',
    ];
    const n = Math.floor(Math.random() * msges.length);
    if (inpName.value !== '') {
        msg.textContent = ` ${msges[n]} ${person}`;
    }
}

window.addEventListener('load', () => {
    inpName.focus();
});

btn.addEventListener('click', () => {
    happeyEid(inpName.value);
});

inpName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        happeyEid(inpName.value);
    }
});
