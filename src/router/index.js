import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BlogDetail from "../pages/BlogDetail";
import NotFound from "../pages/NotFound";
  
const router = createBrowserRouter([
    {
      path: "/", // localhost:3000/
      element: <App/>,
      children: [
        {
            path: '', // localhost:3000/
            element: <Home/>, 
        },
        {
            path: '/about', // localhost:3000/about
            element: <About/>,      
        },
        {
            path: '/contact', // localhost:3000/about
            element: <Contact/>,      
        },
        {
            path: '/blogs/:id', // localhost:3000/blogs/id
            element: <BlogDetail/>,      
        },
        {
            path: '*',
            element: <NotFound/>,
        },
      ]
    },
]);

export default router;