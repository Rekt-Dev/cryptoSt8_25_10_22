import React from "react";

export const MarketData = (props) => {
  return (
    <div>
      Market Data component
      <div></div>
      <div>
        <button
        /*         onClick={() => {
          console.log(
              `object from messari ${props.coins[18].data[0].developer_activity.stars}`
            );
          }}   */
        >
          get data from Messari{" "}
        </button>
      </div>
      <div>data here: </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  );
};
