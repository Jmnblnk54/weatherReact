import React from 'react';


function StateCheck(str){
    let count = 0;
    let index; 
    const stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA', 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA', 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND', 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT', 'VT','VI','VA','WA','WV','WI','WY'
    ];  
    for(let i = 0; i<str.length; i++){
        if(str[i]===","){
            ++count;
        };
    };
    if (count===1){
        index = str.search(",")+1;
        let subStr = str.substr(index);
        for (let i = 0; i<stateAbbreviations.length; i++){
            subStr = subStr.toUpperCase(subStr);
            if(stateAbbreviations[i]=== subStr){
                str = str.substr(0,index)+""+subStr+",us"
            };
        };
    };
    return str;
};

export default StateCheck;