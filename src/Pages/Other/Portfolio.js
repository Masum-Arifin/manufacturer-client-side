import React from "react";
import portfolioPic from "../../images/owner.png";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-purple-600 hover:text-purple-400 font-serif font-bold uppercase my-10">
        portfolio page
      </h1>

      <div className="mx-auto text-center">
        <img
          className="mx-auto w-96 "
          src={portfolioPic}
          alt=""
        />
        <h1 className="text-2xl font-extraBold mt-8 uppercase">
          MD Abdullah al Masum
        </h1>
        <h1 className="text-xl mt-4 te ">Email: masumarifinbd@gmail.com</h1>
        <h1 className="text-xl mb-4 te ">Phone: 01586393242</h1>

        <div className="border-8 mx-auto ">
          <p className="text-xl font-bold py-4 bg-blue-200 uppercase">
            skills you have as a web developer
          </p>
          <div class="overflow-x-auto">
            <table class="table  w-full text-center">
              <thead className="bg-purple-500">
                <tr>
                  <th>s.n</th>
                  <th>technology Name</th>
                  <th>framework / Library</th>
                  <th>experience</th>
                  <th>project Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>HTML</td>
                  <td>none</td>
                  <td>1 Year</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>CSS</td>
                  <td>Bootstrap, Tailwind</td>
                  <td>6 Month</td>
                  <td>https://warehouse-management-23433.web.app/</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>JavaScript</td>
                  <td>React.js</td>
                  <td>3 Month</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Node.js</td>
                  <td>Express.js</td>
                  <td>1.5 Month</td>
                  <td>https://photographer-c8d8a.web.app/</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Mongodb</td>
                  <td>none</td>
                  <td>1.5 Month</td>
                  <td>https://ryans-computers.netlify.app</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="border-8 mx-auto bg-purple-300">
          <p className="text-xl font-bold my-4 uppercase">
            educational background
          </p>
          <div class="overflow-x-auto">
            <table class="table  w-full text-center">
              <thead className="bg-purple-500">
                <tr>
                  <th>s.n</th>
                  <th>exam Name</th>
                  <th>result</th>
                  <th>passing year</th>
                  <th>group</th>
                  <th>board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>SSC</td>
                  <td>4.00 (out of 5.00)</td>
                  <td>2017</td>
                  <td>Humanities</td>
                  <td>DHAKA</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>HSC</td>
                  <td>4.50 (out of 5.00)</td>
                  <td>2019</td>
                  <td>Humanities</td>
                  <td>DHAKA</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>BA</td>
                  <td>Appeared (out of 4.00)</td>
                  <td>Appeared</td>
                  <td>Economic</td>
                  <td>Govt. Titumir College(Under DU)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
