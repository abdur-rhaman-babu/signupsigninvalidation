import { createBrowserRouter } from "react-router-dom";
import Facebook from "../Components/facebookloginpage/Facebook";
import Facebooksign from "../Components/facebooksignup/Facebookregister"
import NotFount from "../pages/NotFound/NotFount";
import App from './../pages/App';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/signup",
                element:<Facebooksign/>,
                
            },
            {
                path:"/signin",
                element:<Facebook/>,
            },
            
        ]
    },
   
   
    {
        path:'*',
        element:<NotFount/>
    }
])

export default routes