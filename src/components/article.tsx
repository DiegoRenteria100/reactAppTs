interface ArticleProps{
    title: string,
    description: string,
    url: string,
    img:string
}

function Article({title, description, url, img}:ArticleProps) {

    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            <img src={img} className="card-img-top" style={{width: "18rem", height:"12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">See more</a>
                </div>
        </div>
    );
}

export default Article;