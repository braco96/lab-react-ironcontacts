import { render, screen } from "@testing-library/react";
import App from "./App";

// Comprobamos que el título principal se renderiza correctamente
test("muestra el título IronContacts", () => {
  render(<App />);
  const heading = screen.getByText(/IronContacts/i);
  expect(heading).toBeInTheDocument();
});
