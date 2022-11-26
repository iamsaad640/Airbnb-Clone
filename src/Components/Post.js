function Post(props) {
    return (
            <div className="post">
                <img src={`/images/${props.img}`} className="post-thumbnail" alt=""/>
                <div className="post--stats">
                    <img className="post--star" src="/images/star-icon.png" alt="" />
                    <span>{props.ratting}</span>
                    <span className="gray">({props.rattingCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p className="gray">{props.description}</p>
                <p><span className="bold">From {props.price}$</span> / person</p>
            </div>
     );
}

export default Post;