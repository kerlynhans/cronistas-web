"use client";

import { useState, useEffect } from "react";
import { getFormattedHeaderDate } from "@/utils/formatters";

export default function HeaderDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(getFormattedHeaderDate());
  }, []);

  if (!currentDate) return null;

  return <>{currentDate}</>;
}
