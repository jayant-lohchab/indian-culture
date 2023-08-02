import { Outlet } from "react-router-dom";
import ExploreNavigation from "../components/ExploreNavigation";

const ExplorePage = ()=>{
    return <>
        <ExploreNavigation/>
        <h1>this is explore page</h1>
    <main>
        <Outlet/>
    </main>
    </>
}

export default ExplorePage;