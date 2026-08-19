"use client";

import { useEffect } from "react";
import { increaseArticleViews } from "@/services/Articles";

export default function ViewsTracker({ nid }) {
  useEffect(() => {
    if (!nid) return;
    increaseArticleViews(nid);
  }, [nid]);

  // No renderiza nada visual en el DOM
  return null;
}
