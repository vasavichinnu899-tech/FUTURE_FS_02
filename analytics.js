const revenueCanvas =
document.getElementById("revenueChart");

if(revenueCanvas){

new Chart(revenueCanvas, {

    type: "line",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets: [{

            label: "Revenue",

            data: [
                120000,
                180000,
                250000,
                320000,
                410000,
                520000
            ],

            borderColor: "#3b82f6",

            backgroundColor:
            "rgba(59,130,246,0.2)",

            fill: true,

            tension: 0.4

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff"

                }

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#ffffff"

                }

            },

            y: {

                ticks: {

                    color: "#ffffff"

                }

            }

        }

    }

});

}



const conversionCanvas =
document.getElementById("conversionChart");

if(conversionCanvas){

new Chart(conversionCanvas, {

    type: "doughnut",

    data: {

        labels: [
            "Converted",
            "Pending",
            "Lost"
        ],

        datasets: [{

            data: [
                74,
                18,
                8
            ],

            backgroundColor: [
                "#22c55e",
                "#eab308",
                "#ef4444"
            ],

            borderWidth: 0

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff"

                }

            }

        }

    }

});

}