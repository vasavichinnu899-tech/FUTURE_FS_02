const tableBody =
document.getElementById("leadTableBody");

if(tableBody){

    tableBody.innerHTML = "";

    leads.forEach((lead)=>{

        tableBody.innerHTML += `

        <tr>

            <td>${lead.id}</td>

            <td>${lead.name}</td>

            <td>${lead.company}</td>

            <td>
                <span class="${lead.status}">
                    ${lead.status}
                </span>
            </td>

            <td>
                ₹${lead.revenue}
            </td>

        </tr>

        `;
    });
}



const total =
document.getElementById("totalLeads");

if(total){

    total.innerText = leads.length;
}



const converted =
leads.filter(
lead=>lead.status==="Converted"
).length;

const convertedText =
document.getElementById("convertedLeads");

if(convertedText){

    convertedText.innerText = converted;
}



const pending =
leads.filter(
lead=>lead.status==="Pending"
).length;

const pendingText =
document.getElementById("pendingLeads");

if(pendingText){

    pendingText.innerText = pending;
}



const revenue =
leads.reduce(
(total,lead)=>total+lead.revenue,
0
);

const revenueText =
document.getElementById("revenue");

if(revenueText){

    revenueText.innerText =
    "₹" + revenue.toLocaleString();
}



const growthCanvas =
document.getElementById("growthChart");

if(growthCanvas){

new Chart(growthCanvas,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Revenue",

data:[
12000,
20000,
35000,
42000,
60000,
75000
],

borderColor:"#3b82f6",

backgroundColor:"rgba(59,130,246,0.2)",

fill:true,

tension:0.4

}]

}

});

}



const statusCanvas =
document.getElementById("statusChart");

if(statusCanvas){

new Chart(statusCanvas,{

type:"doughnut",

data:{

labels:[
"Converted",
"Pending",
"Lost"
],

datasets:[{

data:[
converted,
pending,
leads.length-converted-pending
],

backgroundColor:[
"#22c55e",
"#eab308",
"#ef4444"
]

}]

}

});

}