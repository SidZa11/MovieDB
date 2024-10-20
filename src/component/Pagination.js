import { useState } from "react";



const Pagination = ({current, total}) => {
    const [pagination, setPagination] = useState(1);
    function handlePage (page) {
        if(page && page > 0.9 && page <= 500 && page <= total) {
            current(page);
            setPagination(page);
        } else if (page > 500) {
            alert("Free API allows only 500 page Limit!");
        } else if(!page) {
            setPagination(page);
        }
    }

    function handlePrevious () {
        if(pagination > 1) {
            current(parseInt(pagination) - 1);
            setPagination(parseInt(pagination) - 1);
        }
    }

    function handleNext () {
        if(pagination <= 499 && pagination < total) {
            current(parseInt(pagination) + 1);
            setPagination(parseInt(pagination) + 1);
        } else if(pagination == total){
            alert("Total Page is "+ total + " !");
        }
    }

    return (
        <div style={{
            width : "250px",
            display : "flex", 
            flexDirection : "row", 
            justifyContent : "space-evenly", 
            color : "white",
            margin : "50px",
            fontSize : "16px",
            alignItems : "center",
            float : "right"
        }}>
            <div style={{
                background : "#555",
                padding : "3px",
                borderRadius : "5px",
                cursor : "pointer"
            }} onClick={() => handlePrevious()}>Previous</div>
            <div><input type="number" value={pagination} onChange={(e) => handlePage(e.target.value)} style={{
                width : "40px",
                borderRadius : "5px",
                border : "2px solid blue",
                fontSize : "16px",
                height : "20px",
                paddingLeft : "3px"
            }} /></div>
            of <div>{total}</div>
            <div style={{
                background : "#555",
                padding : "3px",
                borderRadius : "5px",
                cursor : "pointer"
            }} onClick={() => handleNext()}>Next</div>
        </div>
    );
};

export default Pagination;