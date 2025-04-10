import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Load Font Awesome
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Load Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    // Load AOS (Animate On Scroll) library
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://unpkg.com/aos@next/dist/aos.css';
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@next/dist/aos.js';
    document.body.appendChild(aosScript);

    // Load Highlight.js for code highlighting
    const hlsCSS = document.createElement('link');
    hlsCSS.rel = 'stylesheet';
    hlsCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css';
    document.head.appendChild(hlsCSS);

    const hlsScript = document.createElement('script');
    hlsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js';
    document.body.appendChild(hlsScript);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(aosCSS);
      document.body.removeChild(aosScript);
      document.head.removeChild(hlsCSS);
      document.body.removeChild(hlsScript);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
