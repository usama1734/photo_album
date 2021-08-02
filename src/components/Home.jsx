import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    const [data,setData] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
        setData(res.data);
      }
    useEffect(() => {
       getData();
    },[])
    return (
        <div className="home">
            <h1>Images Links</h1>
            <div className="container">
                <div className="row">
                    {data.map((data)=>{
                        return(<div className="col-12"><Link to={`/showImage/${data.id}`}>{data.title}</Link></div> );
                    })} 
                </div>
            </div>
        </div>
    )
}

export default Home
