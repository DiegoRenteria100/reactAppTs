import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./article";


const Main = () => {
    
    const [articles, setArticles] = useState([]);

    const bodyStyle={
        backgroundColor: "#FF9877",
        margin: 0,
        padding: 0
    }
    const title = {
		border: "1px solid salmon",
		height: "40px",
		padding: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        fontFamily: "Serif, Times",
        fontSize: "30px",
        backgroundColor: "#CD5C5C",
  }
    
    useEffect(() => {
        axios.get<any>('https://newsapi.org/v2/everything?q=covid&language=es&pageSize=30&apiKey=fb180203450147afa51ce92ad38deabd')
        .then((res)=>{
            setArticles(res.data.articles);
        })
    }, [])
    return (
        <div style={bodyStyle}>
            <header style={title}>NOTICIAS COVID</header>
            <div
            style={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"flex-start",
                justifyContent:"space-around"
            }}>
            {articles.map((article:any,index)=>{
             return <Article key={index} title={article.title} description={article.description} url={article.url} img={article.urlToImage}></Article>   
            })}
            </div>
        </div>
    );

}
export default Main