"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export const TanstackQuery = ({ children }) => {
  const [query] = useState(new QueryClient());
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};
