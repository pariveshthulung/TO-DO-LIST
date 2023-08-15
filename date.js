// for getting day,date and month
exports.getDate = function(){
    
    const today = new Date();
        const options = {
            weekday : "long",
            day: "numeric",
            month: "long"
        }  ;
    
    return today.toLocaleDateString("en-us",options);
    
}

// for getting day only
exports.getDay = function(){
    
    const today = new Date();
        const options = {
            weekday : "long",
        };
    
    return today.toLocaleDateString("en-us",options);
    
}