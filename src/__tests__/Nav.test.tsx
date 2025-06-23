// src/__tests__/Nav.test.tsx
import { render, screen } from "@testing-library/react";
import { Nav } from "@/components/shared/Nav"; // ✅ Use alias
import { AppProvider } from "@/context/AppContext";

describe("Nav", () => {
  it("renders the dashboard title", () => {
    render(
      <AppProvider>
        <Nav />
      </AppProvider>
    );
    expect(screen.getByText("Dashboard Overview")).toBeInTheDocument();
  });
});
