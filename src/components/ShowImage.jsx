import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
const ShowImage = () => {

     const {id} = useParams();
    const [images,setImages] = useState([]);

    const getImages = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        setImages(res.data);
      }
    useEffect(() => {
       getImages();
    },[])

    return (
        <div className="container">
            <h1>Images Gallery</h1>
            <div className="row">
                {images.map((data)=>{
                        return(<img src={data.url}  className="col-lg-3 col-md-4 col-sm-6 mt-2" />);
                    })} 
            </div>  
        </div>
    )
}

export default ShowImage
