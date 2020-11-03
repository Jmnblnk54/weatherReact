import React from 'react';


//format the date
function FormatDate(dateStr){
    const d = new Date(dateStr)
    const year = d.getFullYear();
    const day = d.getDate();
    const month = d.getMonth()+1;

    let date = month+"/"+day+"/"+year;

    return date;
};

export default FormatDate;