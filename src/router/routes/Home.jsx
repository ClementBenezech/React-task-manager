import PageContent from "../../components/PageContent"
import { HOME } from "../constants/paths"
import TodoList from "../../components/TodoList"
import TodoTaskDetails from "../../components/TodoTaskDetails"

const Home = () => {
    return (
      <PageContent key={HOME}>
        <TodoList/>
        <TodoTaskDetails/>
      </PageContent>
    )
}
export default Home