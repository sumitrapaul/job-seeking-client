

const Gallery = () => {


  return (
    <div className="mt-16">
      <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        Jobs <span className="text-red-900 text-4xl font-bold">Gallery</span>
      </h3>
      <marquee direction="right">
        <div className="flex gap-5">
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/dMgdYhv/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/gt79vT7/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/4NJQwSY/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/mNF3hhb/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/5rz4Vvt/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/6npbR5J/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/b2q9S6K/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/mBh7hvC/image.png"
            alt=""
          />
          <img
            className="w-64 h-48 border border-emerald-900 rounded-xl"
            src="https://i.ibb.co/yXTjGKb/image.png"
            alt=""
          />
        </div>
      </marquee>
    </div>
  );
};

export default Gallery;
