var smallerBtn = document.getElementById('decreaseBtn');
var barWidth = document.getElementById('rectangle').style.width;
var barWidthNum = parseInt(barWidth);
smallerBtn.addEventListener('click', () => {
    console.log(barWidth);
    console.log(barWidthNum);
});