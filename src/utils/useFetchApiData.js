import { useState, useEffect } from "react"


/**
 * This custom hook fetches data for the user we get as a parameter
 * The return datatype is dynamically determined based on the datatype parameter we pass when using the hook
 * @param { String } query
 * @param { Type } dataType
 * @return { Type | null | undefined }
 */

const useFetchApiData = (query)  => {

    //Setting up a hook for our API data. This hook can have 3 types of values:
    // 1) Data from a valid API response.
    // 2) null, if no call has been done yet.
    // 3) undefined, if an invalid response was received.
    const [apiData, setApiData] = useState(null)

    useEffect(() => {
        if (apiData === null) {    
        // Fetching data
            fetch('whatever your base URL is"'+query, {mode: 'cors'})
            .then (response => 
                response.json())
            .then (response => {
                const data = response.data;

                if (data !== "whatever the error is for your call") {
                    // If the result of the call is not an error message
                    setApiData(data);
                }
                else {
                    // If there is no result, we set the data as undefined.
                    setApiData(undefined)
                }
        })}

        }, [apiData, query])

  return [apiData]

}
export default useFetchApiData

