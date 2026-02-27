new Chart(document.getElementById("bepChart"),{
type:"line",
data:{
labels:["0%","25%","50%","75%","100%"],
datasets:[
{
label:"Revenue (Billion IDR)",
data:[0,165,330,495,660]
},
{
label:"Total Cost (Billion IDR)",
data:[152,270,390,510,538]
}
]
}
});

new Chart(document.getElementById("cashChart"),{
type:"line",
data:{
labels:["Year1","Year2","Year3","Year4","Year5"],
datasets:[
{
label:"Cumulative Cashflow (Billion IDR)",
data:[109,218,327,436,545]
}
]
}
});
