// Importing components needed to handle routing.
import { Route, Routes } from "react-router-dom"

// Importing app components.

import PageContent from "../components/PageContent.jsx"

// Importing other ressources (images...)

// Importing PATH values (The definition of existing routes)

import { DUMMY_ROUTE } from "./constants/paths.js"
import { NOT_FOUND } from "./constants/paths.js"
import { HOME } from "./constants/paths.js"

//Importing routes content

import Home from "./routes/Home.jsx"
import Dummy from "./routes/Dummy.jsx"
import NotFound from "./routes/NotFound.jsx"

const AppRoutes = () => {
    return (
            <Routes>
                    <Route path={HOME} element={<Home/>} />
                    
                    <Route path={DUMMY_ROUTE} element={<Dummy/>} />

                    <Route path={NOT_FOUND} element={<NotFound/>} />
                       
            </Routes>
    )
}
            
export default AppRoutes