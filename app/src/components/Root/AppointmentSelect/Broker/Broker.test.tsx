import { screen, render, fireEvent } from "@testing-library/react";

import Broker from "./Broker";

const testBroker = {
  name: "bob",
  id: 1,
  appointments: [{ brokerId: 1, date: "24/11/2021", id: 1 }]
};

const mockSelectHandler = jest.fn();

describe("Broker Component", () => {
  test("should render broker correctly", () => {
    render(<Broker broker={testBroker} onApptSelect={mockSelectHandler} />);

    expect(screen.getByText(testBroker.name)).toBeTruthy();
    expect(screen.getByText(testBroker.appointments[0].date)).toBeTruthy();
  });

  test("should hide and show appointments on button click", () => {
    render(<Broker broker={testBroker} onApptSelect={mockSelectHandler} />);

    expect(screen.getByText(testBroker.appointments[0].date)).toBeTruthy();

    const showAppointmentsButton = screen.getByRole("button");
    fireEvent(
      showAppointmentsButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.queryByText(testBroker.appointments[0].date)).toBeFalsy();

    fireEvent(
      showAppointmentsButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.getByText(testBroker.appointments[0].date)).toBeTruthy();
  });

  test("should call onApptSelect with correct params", () => {
    render(<Broker broker={testBroker} onApptSelect={mockSelectHandler} />);

    const apptDom = screen.getByText(testBroker.appointments[0].date);
    fireEvent(
      apptDom,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(mockSelectHandler).toBeCalledTimes(1);
    expect(mockSelectHandler).toBeCalledWith(
      expect.objectContaining({
        ...testBroker.appointments[0],
        name: testBroker.name
      })
    );
  });
});
