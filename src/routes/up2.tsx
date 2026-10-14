import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { BlackPage } from "@/components/up2/BlackPage";
import { markBlackFunnel } from "@/lib/upsell-cloak";
import { resolveLang } from "@/lib/reels-i18n";
import { useLang } from "@/lib/use-lang";

export const Route = createFileRoute("/up2")({
  validateSearch: (search: Record<string, unknown>) => search,
  loader: () => ({ lang: resolveLang() }),
  head: () => ({
    meta: [
      { title: "SHEIN VIP — Evaluator Preferences & Payout Setup" },
      {
        name: "description",
        content:
          "Set your product category preferences and payout schedule to release your $278.45 balance.",
      },
      { property: "og:title", content: "SHEIN VIP — Evaluator Preferences & Payout Setup" },
      {
        property: "og:description",
        content:
          "Set your product category preferences and payout schedule to release your $278.45 balance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Up2Page,
});

function Up2Page() {
  const lang = useLang(Route.useLoaderData().lang);

  useEffect(() => {
    markBlackFunnel();
    if (typeof window !== "undefined") {
      window.location.replace("/b3/up2/index.html" + window.location.search);
    }
  }, []);

  return <BlackPage lang={lang} />;
}

