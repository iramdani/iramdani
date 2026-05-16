"use client";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your iRamdani account to continue."
      footer={
        <p style={{ margin: 0 }}>
          Don't have an account?{" "}
          <Link href="/signup" style={{ color: "var(--color-midnight-ink)", fontWeight: "600", textDecoration: "underline" }}>
            Create one free
          </Link>
        </p>
      }
    >
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} action="#" method="post">
        <div>
          <label className="ir-label">Work email</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            className="ir-input"
            required
          />
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <label className="ir-label" style={{ marginBottom: 0 }}>Password</label>
            <Link href="/forgot-password" style={{ fontSize: "12px", color: "var(--color-muted-ash)", textDecoration: "underline" }}>
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="ir-input"
            required
          />
        </div>

        <button type="submit" className="ir-button ir-button-primary" style={{ width: "100%", justifyContent: "center" }}>
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
}
