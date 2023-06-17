import type { V2_MetaFunction } from "@remix-run/node";

import { useState } from "react";

import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix" },
  ];
};
const Index: React.FC = () => {
  let [showPie, setShowPie] = useState<number>(0)

  const handleClick = (num: number): void => {

    setShowPie(num);
    setTimeout(() => {
      setShowPie(0);
    }, 1500);
  };


  return (
    <div className="main" >

      <div className="message-container">
        <h1 className="text-3xl font-bold underline">404</h1>
        <p>It look like we couldn't find this page <br /> To make it up to you, please choose a co-founder to pie in the face</p>
      </div>



      <div className="avatar-container">
        <div className="avatar-div">
          <img
            src="/images/baby1.jpg"
            alt="Co-Founder 1"
            onClick={() => { handleClick(1) }}
            className={`avatar ${showPie === 1 ? "hit" : ""}`}

          />
          Thomas

          {showPie === 1 && (
            <div className="pie-animation">
              <div className="pie-tin" >
                <img src="/images/pie-tin.jpg" alt="pie-tin" className="pie-tin" />
              </div>

            </div>
          )}
        </div>
        <div className="avatar-div">
          <img
            src="/images/baby2.jpg"
            alt="Co-Founder 2"
            onClick={() => { handleClick(2) }}
            className={`avatar ${showPie === 2 ? "hit" : ""}`}
          />
          Ryan
          {showPie === 2 && (
            <div className="pie-animation">
              <div className="pie-tin" >
                <img src="/images/pie-tin.jpg" alt="pie-tin" className="pie-tin" /></div>
            </div>
          )}
        </div>

        <div className="avatar-div">
          <img
            src="/images/baby3.jpg"
            alt="Co-Founder 3"
            onClick={() => { handleClick(3) }}
            className={`avatar ${showPie === 3 ? "hit" : ""}`}
          />
          Emma
          {showPie === 3 && (
            <div className="pie-animation">
              <div className="pie-tin" >
                <img src="/images/pie-tin.jpg" alt="pie-tin" className="pie-tin" /></div>
            </div>
          )}
        </div>

        <div className="avatar-div">
          <img
            src="/images/baby4.jpg"
            alt="Co-Founder 4"
            onClick={() => { handleClick(4) }}
            className={`avatar ${showPie === 4 ? "hit" : ""}`}
          />
          Micheal
          {showPie === 4 && (
            <div className="pie-animation">
              <div className="pie-tin" >
                <img src="/images/pie-tin.jpg" alt="pie-tin" className="pie-tin" /></div>
            </div>
          )}
        </div>


      </div>

    </div>
  );
}


export default Index