import { describe, it, expect, vi, beforeEach, Mock } from "vitest"; // Важно: импортируем Mock
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";
import { useAuthStore } from "../model/store/authStore";
import { useNavigate } from "react-router";

// Типизация для Zustand store
type AuthStoreState = {
  loading: boolean;
  isAuth: boolean;
  error: string | null;
  login: (formData: FormData) => Promise<void>;
  logout: () => void;
};

// Мокаем Zustand store и навигацию
vi.mock("../model/store/authStore", () => ({
  useAuthStore: vi.fn(),
}));

vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));

// Исправленная типизация моков
const mockLogin = vi.fn<(formData: FormData) => Promise<void>>();
const mockNavigate = vi.fn<(path: string) => void>();
const mockedUseAuthStore = useAuthStore as unknown as Mock;

describe("features/LoginForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Мокаем Zustand store с типизацией
    mockedUseAuthStore.mockImplementation(
      (selector: (state: AuthStoreState) => unknown) => {
        const state: AuthStoreState = {
          loading: false,
          isAuth: false,
          error: null,
          login: mockLogin,
          logout: vi.fn(),
        };
        return selector(state);
      }
    );

    // Мокаем навигацию
    (useNavigate as Mock).mockReturnValue(mockNavigate);
  });

  // Все тесты остаются без изменений
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

    const eyeIcon = screen.getByTestId("eye-icon");
    expect(passwordInput.type).toBe("password");

    await userEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("text");
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

  it("calls login with FormData when form is submitted", async () => {
    render(<LoginForm />);

    // Заполняем форму
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "test@example.com"
    );
    await userEvent.type(
      screen.getByPlaceholderText(/password/i),
      "password123"
    );
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    // Проверяем вызов login с FormData
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();

      // Проверяем что передали FormData
      const formData = mockLogin.mock.calls[0][0] as FormData;
      expect(formData).toBeInstanceOf(FormData);
      expect(formData.get("email")).toBe("test@example.com");
      expect(formData.get("password")).toBe("password123");
    });
  });

  it("displays error message from store", () => {
    // Мокаем состояние с ошибкой
    mockedUseAuthStore.mockImplementation(
      (selector: (state: AuthStoreState) => unknown) => {
        const state: AuthStoreState = {
          loading: false,
          isAuth: false,
          error: "Invalid credentials",
          login: mockLogin,
          logout: vi.fn(),
        };
        return selector(state);
      }
    );

    render(<LoginForm />);

    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });

  it("redirects to home page on successful authentication", () => {
    // Мокаем состояние после успешной аутентификации
    mockedUseAuthStore.mockImplementation(
      (selector: (state: AuthStoreState) => unknown) => {
        const state: AuthStoreState = {
          loading: false,
          isAuth: true,
          error: null,
          login: mockLogin,
          logout: vi.fn(),
        };
        return selector(state);
      }
    );

    render(<LoginForm />);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("disables submit button when loading", () => {
    // Мокаем состояние загрузки
    mockedUseAuthStore.mockImplementation(
      (selector: (state: AuthStoreState) => unknown) => {
        const state: AuthStoreState = {
          loading: true,
          isAuth: false,
          error: null,
          login: mockLogin,
          logout: vi.fn(),
        };
        return selector(state);
      }
    );

    render(<LoginForm />);

    const submitBtn = screen.getByRole("button", { name: /log in/i });
    expect(submitBtn).toBeDisabled();
  });

  it("shows loading indicator on button during login", () => {
    // Мокаем состояние загрузки
    mockedUseAuthStore.mockImplementation(
      (selector: (state: AuthStoreState) => unknown) => {
        const state: AuthStoreState = {
          loading: true,
          isAuth: false,
          error: null,
          login: mockLogin,
          logout: vi.fn(),
        };
        return selector(state);
      }
    );

    render(<LoginForm />);

    const submitBtn = screen.getByRole("button", { name: /log in/i });
    expect(submitBtn).toHaveTextContent(/loading/i);
  });
});
