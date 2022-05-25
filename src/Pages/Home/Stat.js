import React from "react";
import svg1 from "../../images/icons8-factory-50.png";
import svg2 from "../../images/icons8-delivery-50.png";
import svg3 from "../../images/icons8-attract-customers-48.png";
import CountUp from "react-countup";

const Stat = () => {
  return (
    <div className="my-14 text-center mx-auto">
      <p className="lg:text-4xl text-1xl shadow-xl font-mono uppercase text-center font-bold my-11 inline-block p-4">
        Business Summary OF the year
      </p>
      <div class="stats shadow grid lg:grid-cols-3 sm:grid-cols-1 gap-3 text-center mx-8">
        <div class="stat">
          <div class="stat-figure text-primary">
            <img src={svg1} alt="" />
          </div>
          <div class="stat-title">Total Production</div>
          <div class="stat-value text-primary">
            <CountUp end={94} />K +
          </div>
          <div class="stat-desc">66% more than last month</div>
        </div>

        <div class="stat ">
          <div class="stat-figure text-secondary">
            <img src={svg2} alt="" />
          </div>
          <div class="stat-title">Successfully Delevery</div>
          <div class="stat-value text-secondary">
            <CountUp end={8} />M
          </div>
          <div class="stat-desc">95% more than last month</div>
        </div>

        <div class="stat ">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src={svg3} alt="" />
              </div>
            </div>
          </div>
          <div class="stat-title">Coustomer Happiness</div>
          <div class="stat-value text-secondary">
            <CountUp end={89} />%
          </div>
          <div class="stat-desc text-secondary">92% Ratting</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
