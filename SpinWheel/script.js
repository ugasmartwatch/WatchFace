const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");
const finalValue = document.getElementById("final-value");
const rotationValue = [
    {minDegree:0, maxDegree:30, value:60}, 
    {minDegree:31, maxDegree:90, value:0}, 
    {minDegree:91, maxDegree:150, value:360},
    {minDegree:151, maxDegree:210, value:300},
    {minDegree:211, maxDegree:270, value:240},
    {minDegree:271, maxDegree:330, value:180},
    {minDegree:331, maxDegree:360, value:60}];

const data = [16, 16, 16, 16, 16, 16];

var pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da"];

let myChart = new Chart(wheel, {
    plugins: [ChartDataLabels], 
    type: "pie",
    data: {
        labels:[0, 60, 180, 240, 300, 360],
        datasets: [
            {backgroundColor: pieColors,
            data:data,},
        ],
    },
    options:{
        responsive: true,
        animation: {duration: 0},
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) =>
                context.chart.data.labels[context.dataIndex],
                font: {size: 24},
            },
        },
    },
});

const valueGenerator = (angleValue) => {
    for(let i of rotationValue) {
        if(angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>${i.value} Minutes!</p>`;
            spinButton.disabled = false;
            break;
        }
    }
};

let count = 0;
let resultValue = 101;
spinButton.addEventListener("click", () => {
    spinButton.disabled = true;
    finalValue.innerHTML = '<p>*Please Be Zero*</p>';
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    let rotationInterval = window.setInterval(() => {
        myChart.options.rotation = myChart.options.rotation + resultValue;
        myChart.update();
        if(myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        }
        else if(count > 15 && myChart.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
        }
    }, 10);
});
