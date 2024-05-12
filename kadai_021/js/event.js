const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    }, 2000);
});
