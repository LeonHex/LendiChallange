import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Broker from "./Broker";

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 250px;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

type BrokerAppointments = {
  id: number;
  name: string;
  appointments: { id: number; brokerId: number; date: string }[];
}[];

const AppointmentSelect = (props) => {
  const [brokers, setBrokers] = useState([]);
  const { appt, setAppt } = props;
  useEffect(() => {
    const brokerReq = axios.get("http://localhost:8080/brokers");
    const apptReq = axios.get(
      "http://localhost:8080/appointments?sort=brokerId&desc=true"
    );
    Promise.all([brokerReq, apptReq])
      .then((responses) => {
        const [brokerResp, apptResp] = responses;
        const { data: brokerData } = brokerResp;
        const { data: apptData } = apptResp;
        apptData.forEach((appt) => {
          const broker = _.find(brokerData, { id: appt.brokerId });
          broker.appointments
            ? broker.appointments.push(appt)
            : (broker.appointments = [appt]);
        });
        setBrokers(brokerData);
      })
      .catch((e) => {
        // TODO add error handling here
        console.log(e);
      });
  }, []);

  return (
    <Wrapper>
      <SideBar>
        <Heading>Amazing site</Heading>
        <ul>
          {brokers.map((broker) => {
            return (
              <Broker key={broker.id} broker={broker} onApptSelect={setAppt} />
            );
          })}
        </ul>
      </SideBar>
      <div>
        <Heading>Appointment details</Heading>
        {appt && (
          <>
            <div>broker: {appt.brokerId}</div>
            <div>date: {appt.date}</div>
            <div>id: {appt.id}</div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default AppointmentSelect;
