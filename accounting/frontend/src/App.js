import Header from "./components/Header";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import PersonalCards from "./pages/personalCards";
import BusinessTrips from "./pages/businessTrips";
import SickList from "./pages/sickList";
import Subdivisions from "./pages/subdivisions";
import SalaryStory from "./pages/salaryStory";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<PersonalCards/>),
    },
    {
        path: "businessTrips",
        element: (<BusinessTrips/>),
    },
    {
        path: "sickList",
        element: (<SickList/>),
    },
    {
        path: "subdivisions",
        element: (<Subdivisions/>),
    },
    {
        path:'story',
        element: (<SalaryStory/>)
    }
]);


function App() {
  return (
    <div className="App">
        <Header/>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
