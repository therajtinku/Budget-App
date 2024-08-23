//helpers functions
import { fetchData } from "../helpers"

//Loader
export function dashboardLoader(){
    const userName = fetchData("userName")
    return {userName}

}

export const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}
