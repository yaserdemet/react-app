const Card = ({data}) => {
  return (
    <div className="container">
      {data.map((item,index) => {
        const {key={index} ,job,comment,name ,img} = item;
        return (
            <div>
              <h1>{name}</h1>
              <h2>{job}</h2>
              <p>{comment}</p>
              <img src={img} alt="" />
              <div>
                <button>Small</button>
                <button>Large</button>
              </div>
            </div>

        )
      })}
     
    </div>
  );
};

export default Card;
