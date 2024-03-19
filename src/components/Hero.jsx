import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white">
          <h1 className="font-bold text-4xl">Find your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With WeekAway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit id corporis
            officia assumenda! Magnam repudiandae quos dolorum, voluptatibus corrupti incidunt
            aliquid quod fuga! Ducimus magni id, amet ullam ipsam, recusandae nisi alias corporis
            voluptatibus cum, atque nemo. Odit iste fugit quasi quisquam nulla voluptas quas in
            possimus dolore sint!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
