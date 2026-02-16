"use strict";

const ctx = document.getElementById("lineChart").getContext("2d");

const lineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["الجمعة", "السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
        datasets: [
            {
                label: "",
                data: [12, 19, 3, 5, 2, 3],
                fill: true,
                borderColor: "#1266c8",
                backgroundColor: "#1266c820",
                tension: 0.4,
                pointBackgroundColor: "#1266c8",
                pointBorderColor: "#ffffff",
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: "#111822",
                    font: {
                        size: 16,
                    },
                },
            },
        },
    },
});