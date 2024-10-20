import { Navigate } from "react-router";
import Popular from "./pages/Popular";
import Layout from "./Layout/Layout";
import TopRated from "./pages/TopRated";
import SearchResult from "./pages/SearchResult";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/MovieDetail";


const Routes = [
    {
        path : '/',
        index : true,
        element : (
            <Navigate to="/popular" replace />
        )
    },
    {
        path : '/popular',
        element : (
            <Layout>
                <Popular />
            </Layout>
        )
    },
    {
        path : '/toprated',
        element : (
            <Layout>
                <TopRated />
            </Layout>
        )
    },
    {
        path : '/upcoming',
        element : (
            <Layout>
                <Upcoming />
            </Layout>
        )
    },
    {
        path : '/searchresult',
        element : (
            <Layout>
                <SearchResult />
            </Layout>
        )
    },
    {
        path : '/moviedetail',
        element : (
            <Layout>
                <MovieDetail />
            </Layout>
        )
    }
];

export default Routes;