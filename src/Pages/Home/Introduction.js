import React from "react";
import { Link } from "react-router-dom";
import tools from "../../images/desktop-tool.png";

const Introduction = () => {
  return (
    <div>
      {/* middle text */}
      <div className="text-center">
        <h1 className="text-5xl  mt-24 italic border-b-8 border-r- rounded-full border- inline-block mx-auto pb-4 pr-2 font-bold">
          {" "}
          WelCome to all PC Parts Center
        </h1>
      </div>
      {/* info with hero */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={tools} className="w-50 rounded-lg " alt="info pic" />
          <div>
            <h1 className="text-4xl font-bold text-secondary">
              PC Parts Information !
            </h1>
            <p className="py-6 text-justify">
              If you're looking to build your own PC, it's likely that you're
              thinking about making sure you've got the best PC components to
              get the job done. While the sheer number of options can make
              choosing feel more than a little overwhelming, this guide is here
              to help make that job a whole lot easier. There's no doubt about
              it, learning how to build a PC is not for the faint of heart. It's
              a job that will really test your patience and endurance and
              there's likely to be times when you just want to throw in the
              towel, head to your local home electronics retailer and splash out
              on the best computer that money can buy. But, we guarantee that
              all that hard work of building your own is going to be well worth
              it when you feel the satisfaction of sitting back and looking at
              the finished product.
            </p>
            <Link to="/seeAll" className="btn btn-primary">
              SEE ALL PARTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
