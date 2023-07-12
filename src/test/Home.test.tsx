import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("", async () => {
  render(<Home />);
  expect(await screen.findByText("Home")).toBeInTheDocument();
});
