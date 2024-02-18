const allUsers = [
    {FirstName: "Manash", gender:"Male"},
    {FirstName:"Priya", gender:"Female"},
    {FirstName:"Yash", gender:"Male"},
]
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="Male"){
        console.log(allUsers[i]["FirstName"])
    }
}
