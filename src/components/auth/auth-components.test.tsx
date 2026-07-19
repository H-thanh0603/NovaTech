import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";

describe("login form component", () => {
  it("renders email and password fields", () => {
    const markup = renderToStaticMarkup(<LoginForm />);
    expect(markup).toContain('name="email"');
    expect(markup).toContain('name="password"');
    expect(markup).toContain('type="email"');
    expect(markup).toContain('type="password"');
  });

  it("renders submit button", () => {
    const markup = renderToStaticMarkup(<LoginForm />);
    expect(markup).toContain("Đăng nhập");
  });

  it("links to registration page", () => {
    const markup = renderToStaticMarkup(<LoginForm />);
    expect(markup).toContain('href="/dang-ky"');
  });
});

describe("register form component", () => {
  it("renders name, email, and password fields", () => {
    const markup = renderToStaticMarkup(<RegisterForm />);
    expect(markup).toContain('name="name"');
    expect(markup).toContain('name="email"');
    expect(markup).toContain('name="password"');
  });

  it("renders submit button", () => {
    const markup = renderToStaticMarkup(<RegisterForm />);
    expect(markup).toContain("Đăng ký");
  });

  it("links to login page", () => {
    const markup = renderToStaticMarkup(<RegisterForm />);
    expect(markup).toContain('href="/dang-nhap"');
  });
});
