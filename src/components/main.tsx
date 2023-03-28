import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./article";
const Main = () => {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        axios.get<any>('https://newsapi.org/v2/everything?q=covid&language=es&pageSize=20&apiKey=fb180203450147afa51ce92ad38deabd')
        .then((res)=>{
            setArticles(res.data.articles)
            // console.log(res.data.articles);
        })
    }, [])

    return (
        <div >
            <header>New of the day</header>
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