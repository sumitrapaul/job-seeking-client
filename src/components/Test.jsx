

const Test = ({t}) => {
    const { name, image } = t;
    return (
        <div>
           <img src={image} alt="not found" />
           <h3 className="font-bold">{name}</h3> 
        </div>
    );
};

export default Test;