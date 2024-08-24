//helpers functions
import { useLoaderData } from "react-router-dom"
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
