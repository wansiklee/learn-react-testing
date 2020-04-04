import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import DelayedToggle from "../DelayedToggle";

describe("<DelayedToggle />", () => {
  it("reveals text with when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await wait(() => getByText("야호!!"), { timeout: 3000 });
  });
});
