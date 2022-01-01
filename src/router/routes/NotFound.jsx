import PageContent from "../../components/PageContent"
import { NOT_FOUND } from "../constants/paths"

const NotFound = () => {
    return (
        <PageContent key={NOT_FOUND}>
        <div>You took the NOT_FOUND route</div>
      </PageContent>
    )
}
export default NotFound