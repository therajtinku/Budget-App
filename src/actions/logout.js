//rrd imports
import { redirect } from "react-router-dom";

//toast library
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
    //delete the user
    deleteItem({
        key: "userName"
    })
    toast.success("You have deleted your account!");
    //return and redirect user
    return redirect("/")
    
}