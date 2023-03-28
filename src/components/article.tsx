interface ArticleProps {
    title: string,
    description: string,
    url: string,
    img: string
}

function Article({ title, description, url, img }: ArticleProps) {

    const card = {
        width: "20rem",
        margin: "10px",
        backgroundColor: "white",
        borderRadious: "10px",
        height: "34rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",

    }
    const cardTitle = {
        height:"2rem",
        paddingBottom: "1rem"
    }

    const cardText = {
        height: "12rem",
    }

    const btn={
        backgroundColor: "#B22D03",
        border: "none",
        color: "white",
        padding: "10px 15px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadious: "5px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "10px",
    }

    const cardBody={
        padding:"10px"
    }
    return (
        <div className="card" style={card}>
            <img src={img} className="card-img-top" style={{ width: "100%", height: "12rem" }} />
            <div className="card-body" style={cardBody}>
                <h5 className="card-title" style={cardTitle}>{title}</h5>
                <p className="card-text" style={cardText}>{description}</p>
                <a href={url} className="btn" style={btn}>Ver más</a>
            </div>
        </div>
    );
}

export default Article;