"use client";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Start for free"
      subtitle="Join thousands of creators and businesses scaling with iRamdani."
      footer={
        <p style={{ margin: 0 }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--color-midnight-ink)", fontWeight: "600", textDecoration: "underline" }}>
            Sign in
          </Link>
        </p>
      }
    >
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} action="#" method="post">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label className="ir-label">First name</label>
            <input type="text" name="first_name" placeholder="John" className="ir-input" required />
          </div>
          <div>
            <label className="ir-label">Last name</label>
            <input type="text" name="last_name" placeholder="Doe" className="ir-input" required />
          </div>
        </div>

        <div>
          <label className="ir-label">Work email</label>
          <input type="email" name="email" placeholder="you@company.com" className="ir-input" required />
        </div>

        <div>
          <label className="ir-label">Password</label>
          <input type="password" name="password" placeholder="Min. 8 characters" className="ir-input" required />
        </div>

        <button type="submit" className="ir-button ir-button-primary" style={{ width: "100%", justifyContent: "center" }}>
          Create account
        </button>

        <p style={{ fontSize: "12px", color: "var(--color-muted-ash)", textAlign: "center", margin: 0 }}>
          By signing up you agree to our{" "}
          <Link href="/terms" style={{ color: "var(--color-midnight-ink)", textDecoration: "underline" }}>Terms</Link>
          {" "}and{" "}
          <Link href="/privacy" style={{ color: "var(--color-midnight-ink)", textDecoration: "underline" }}>Privacy Policy</Link>.
        </p>
      </form>
    </AuthLayout>
  );
}
