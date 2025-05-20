import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("features/LoginForm", () => {
  it("renders form with inputs and submit button", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("toggles password visibility by clicking the eye icon", async () => {
    render(<LoginForm />);
    const passwordInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;

    const eyeIcon = screen.getByLabelText("eye-invisible");
    expect(passwordInput.type).toBe("password");

    await userEvent.click(eyeIcon);
    const updatedInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;
    expect(updatedInput.type).toBe("text");
  });

  it("shows validation messages if submitted empty", async () => {
    render(<LoginForm />);
    const submitBtn = screen.getByRole("button", { name: /log in/i });

    await userEvent.click(submitBtn);

    expect(
      await screen.findByText(/please enter your email/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/please enter your password/i)
    ).toBeInTheDocument();
  });
});
