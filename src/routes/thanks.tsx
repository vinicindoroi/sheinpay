import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/thanks")({
  validateSearch: (search: Record<string, unknown>) => search,
  head: () => ({
    meta: [
      { title: "Reviewer Account Verified — SHEIN VIP" },
      { name: "description", content: "SHEIN VIP Reviewer credentials verified and active." },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/b3/thanks/index.html" + window.location.search);
    }
  }, []);

  return null;
}
