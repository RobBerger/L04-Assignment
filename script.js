var smallerBtn = document.getElementById('decreaseBtn');
var barWidth = document.getElementById('rectangle').style.width;
var barWidthNum = parseInt(barWidth);
smallerBtn.addEventListener('click', () => {
    barWidthNum = barWidthNum - 10;
    document.getElementById('rectangle').style.width = barWidthNum + 'px';
});