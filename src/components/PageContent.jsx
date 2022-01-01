import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// This component always displays the header (including nav menu) and footer.
// It also displays the components we have nested in it in the routes definitions. 

const PageContent = (props) => {

        return (
            <React.Fragment>
                        <Header/>
                            <div className = "">
                                    {props.children}
                            </div>
                        <Footer/>
            </React.Fragment>
        )

}

export default PageContent