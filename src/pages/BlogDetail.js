import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function BlogDetail() {

    let params = useParams();
    let url = `http://localhost:8000/blogs/${params.id}`; 
    // let url = 'http://localhost:8000/blogs/'+param.id;
    let { data : blog , loading , error } = useFetch(url);

    let navigate = useNavigate();

    useEffect(() => {
        if(error) {
            // redirect to home page
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    },[error, navigate])

    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div>loading...</div>}

            {/* စစချင်းမှာ blogs' data တွေက NULL မို့လို့  map ရင်မရ။ */}
            {blog && (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Posted by - {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            )} 
        </div>
    );
}
  
export default BlogDetail;
  