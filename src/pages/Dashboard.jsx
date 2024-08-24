// rrd imports
import { useLoaderData } from "react-router-dom"

//helpers functions
import { fetchData } from "../helpers"

//Loader
export function dashboardLoader(){
    const userName = fetchData("userName")
    return {userName}

}

export const Dashboard = () => {

    const { userName } = useLoaderData();

  return (
    <div>
        <h1>{userName}</h1>
        Dashboard
    </div>
  )
}
