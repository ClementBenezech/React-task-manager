import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/mainContent.scss'

// This component always displays the header (including nav menu) and footer.
// It also displays the components we have nested in it in the routes definitions. 

const PageContent = (props) => {

        return (


                            <div className = "main-content">
                                    {props.children}
                            </div>


        )

}

export default PageContent