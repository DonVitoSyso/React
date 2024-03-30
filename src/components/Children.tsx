import * as React from "react";

function Children( props ){
    let the_childrens = props.children;
    
    return(
        <>
            {the_childrens}
        </>
    )
}

export default Children;
