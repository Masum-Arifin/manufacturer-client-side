import React from 'react';
import svg1 from '../../images/icons8-factory-50.png'
import svg2 from '../../images/icons8-delivery-50.png'
import svg3 from '../../images/icons8-attract-customers-48.png'
import CountUp from 'react-countup';

const Stat = () => {
    return (
        <div className='my-14 text-center'>
            <p className='lg:text-4xl text-1xl shadow-xl font-mono uppercase text-center text-secondary  font-bold my-11 hover:border-r-2 hover:border-b-2 border-green-600 rounded-full duration-200 inline-block p-4'>Business Summary OF the year</p>
            <div class="stats shadow grid lg:grid-cols-3 sm:grid-cols-1 gap-3 text-center mx-8">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={svg1} alt="" />
                    </div>
                    <div class="stat-title">Total Production</div>
                    <div class="stat-value text-primary"><CountUp end={90} />K +</div>
                    <div class="stat-desc">46% more than last month</div>
                </div>

                <div class="stat ">
                    <div class="stat-figure text-secondary">
                    <img src={svg2} alt="" />
                    </div>
                    <div class="stat-title">Successfully Delevery</div>
                    <div class="stat-value text-secondary"><CountUp end={7} />M</div>
                    <div class="stat-desc">81% more than last month</div>
                </div>

                <div class="stat ">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                            <img src={svg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value"><CountUp end={79} />%</div>
                    <div class="stat-title">Coustomer Happiness</div>
                    <div class="stat-desc text-secondary">89% Ratting</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;