"use client";
import HamburgerMenu from "@/app/Components/NavigationBar";
import { Check } from "@mui/icons-material";

export default function payment() {
  return (
    <main>
      <HamburgerMenu />
      <section className="payment-section">
        <section className="Profile-section">
          <h2 style={{ marginRight: "auto" }}>Basic </h2>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "20px",
            }}
          >
            <h1>$5/month</h1>
            <button className="nav-button">Subscribe</button>
            <div className="inline">
              <Check
                style={{
                  backgroundColor: "green",
                  color: "#ffffff",
                  borderRadius: "100%",
                }}
              />
              <p>Edit videos up to 100mb</p>
            </div>
          </div>
        </section>
        <button className="pay-button">Pay With Card</button>
      </section>
    </main>
  );
}
