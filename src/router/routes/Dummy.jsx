import PageContent from "../../components/PageContent"
import { DUMMY_ROUTE } from "../constants/paths"

const Dummy = () => {
    return (
        <PageContent key={DUMMY_ROUTE}>
        <div>You took the DUMMY route</div>
      </PageContent>
    )
}
export default Dummy