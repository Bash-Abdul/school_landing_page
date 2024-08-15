import data from "./data"
import Module from "./module"

function M_container(){

    const displayData = data.map((module) =>{
        return(
          <Module
        
        key={module.id}
        {...module}
        
        />
        )
      })
    

    return(
        {displayData}
    )
}

export default M_container