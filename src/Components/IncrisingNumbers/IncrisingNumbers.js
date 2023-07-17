import React, { useState } from "react";
import CountUp from "react-countup";
import styles from "./IncrisingNumbers.module.scss";
import VisibilitySensor from "react-visibility-sensor";

const InscrisingNumbers = ({ data }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <>
      <div className={styles.CountUps}>
        <CountUp
          end={data?.end}
          duration={data?.duration}
          start={viewPortEntered ? null : 0}
        >
          {({ countUpRef }) => {
            return (
              <VisibilitySensor
                active={!viewPortEntered}
                onChange={(isVisible) => {
                  if (isVisible) {
                    setViewPortEntered(true);
                  }
                }}
                delayedCall
              >
                <h3 className={styles.CountUp} ref={countUpRef} />
              </VisibilitySensor>
            );
          }}
        </CountUp>
        <p style={{ color: "var(--color-gray)", width: "100%" }}>
          {data?.desc}
        </p>
      </div>
    </>
  );
};
export default InscrisingNumbers;
