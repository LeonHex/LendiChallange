import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface BrokerProps {
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
  onApptSelect: Dispatch<SetStateAction<{}>>;
}

const Broker = (props: BrokerProps) => {
  const [showAppts, setShowAppts] = useState(true);

  const {
    broker: { name, id, appointments },
    onApptSelect
  } = props;

  const showApptHandler = () => setShowAppts(!showAppts);
  return (
    <li>
      <span>{name}</span>
      <br />
      {appointments && (
        <>
          appointments:
          <button onClick={showApptHandler}>
            {showAppts ? "Hide" : "Show"} appointments
          </button>
          {showAppts && (
            <ul>
              {appointments.map((appt) => {
                return (
                  <li
                    key={appt.date}
                    onClick={() => {
                      onApptSelect({ ...appt, name });
                    }}
                  >
                    {appt.date}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

export default Broker;
