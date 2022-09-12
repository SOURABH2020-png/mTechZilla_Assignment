import { lazy } from "react"

const SearchField = lazy(() => import('../view/Home'))

console.log("routes")

const routes = [
    { path: '/', exact: true, name: "SearchField", component: SearchField }
]

export default routes;