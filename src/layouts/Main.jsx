// rrd imports
import { Outlet, useLoaderData } from "react-router-dom"

//assests
import wave from "../assets/wave.svg";

//components
import Nav from "../components/Nav";

//helpers functions
import { fetchData } from "../helpers"

//Loader
export function mainLoader(){
    const userName = fetchData("userName")
    return {userName}

}

const Main = () => {

    const { userName } = useLoaderData();

  return (
    <div className="layout">
        <Nav userName={userName} />
        <main>
        <Outlet />
        </main>
        <img src={wave} alt="" />
    </div>
  )
}

export default Main;
