// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AllTasks from "./pages/AllTasks";
// import CompletedTasks from "./pages/CompletedTasks";
// import ImportantTasks from "./pages/ImportantTasks";
// import Main from "./pages/Main";
// import Secondary from "./pages/Secondary";
// import UncompletedTasks from "./pages/UncompletedTasks";
// import SideBar from "./components/SideBar";
// import New from "./pages/New";
// import NavBar from "./components/NavBar";
// import Layout from "./components/Layout";

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <SideBar />
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route index element={<AllTasks />} />
//           {/* <Route path="/" element={<AllTasks />} /> */}
//           <Route path="important" element={<ImportantTasks />} />
//           <Route path="completed" element={<CompletedTasks />} />
//           <Route path="uncompleted" element={<UncompletedTasks />} />
//           <Route path="secondary" element={<Secondary />} />
//           <Route path="main" element={<Main />} />
//           <Route path="new" element={<New />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import Main from "./pages/Main";
import Secondary from "./pages/Secondary";
import UncompletedTasks from "./pages/UncompletedTasks";
import New from "./pages/New";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllTasks />} />
          <Route path="important" element={<ImportantTasks />} />
          <Route path="completed" element={<CompletedTasks />} />
          <Route path="uncompleted" element={<UncompletedTasks />} />
          <Route path="secondary" element={<Secondary />} />
          <Route path="main" element={<Main />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
