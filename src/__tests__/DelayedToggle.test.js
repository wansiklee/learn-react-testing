import React from "react";
import {
  render,
  fireEvent,
  wait,
  waitForElement,
  waitForDomChange,
} from "@testing-library/react";
import DelayedToggle from "../DelayedToggle";

describe("<DelayedToggle />", () => {
  it("reveals text with when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await wait(() => getByText("야호!!"), { timeout: 3000 });
  });

  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitForElement(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });

  it("changes something when button is clicked", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const mutations = await waitForDomChange({ container });
    console.log(mutations);
  });
});
