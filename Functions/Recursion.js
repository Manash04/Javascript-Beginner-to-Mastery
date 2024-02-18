function recurse(){
    if(base_consdition){
        //do something
        return;
    }
    recurse();
}

function fetchWater(count){
    if(count==0){
        console.log("No more water left");
        return;
    }
    console.log("Fetching water...");
    fetchWater(count-1);
}
fetchWater(2000);