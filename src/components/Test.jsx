/* eslint-disable react/prop-types */

const Test = ({ t }) => {
  const { name, image } = t;
  return (
    <div className="mt-8">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center items-center">{name}</h2>
         
        </div>
      </div>
    </div>
  );
};

export default Test;
