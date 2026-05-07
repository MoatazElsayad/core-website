import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VisaTravel from "./pages/VisaTravel";
import Accommodation from "./pages/Accommodation";
import FoodFaithCulture from "./pages/FoodFaithCulture";
import FamilyIntegration from "./pages/FamilyIntegration";
import EducationLanguage from "./pages/EducationLanguage";
import HealthSafety from "./pages/HealthSafety";
import CommunityEntertainment from "./pages/CommunityEntertainment";
import ChallengesSolutions from "./pages/ChallengesSolutions";
import FamilyPlan from "./pages/FamilyPlan";
import FamilyJourney from "./pages/FamilyJourney";
import Sources from "./pages/Sources";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("munich-bridge-sidebar") === "collapsed";
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("munich-bridge-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("munich-bridge-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("munich-bridge-sidebar", sidebarCollapsed ? "collapsed" : "expanded");
  }, [sidebarCollapsed]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-transparent text-charcoal transition-colors duration-300 dark:bg-charcoal dark:text-linen">
        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((value) => !value)}
        />
        <main className={`transition-[padding] duration-300 ${sidebarCollapsed ? "lg:pl-20" : "lg:pl-72"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visa-travel" element={<VisaTravel />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/food-faith-culture" element={<FoodFaithCulture />} />
            <Route path="/family-integration" element={<FamilyIntegration />} />
            <Route path="/education-language" element={<EducationLanguage />} />
            <Route path="/health-safety" element={<HealthSafety />} />
            <Route path="/community-entertainment" element={<CommunityEntertainment />} />
            <Route path="/challenges-solutions" element={<ChallengesSolutions />} />
            <Route path="/family-plan" element={<FamilyPlan />} />
            <Route path="/family-journey" element={<FamilyJourney />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </main>
        <div className={`transition-[padding] duration-300 ${sidebarCollapsed ? "lg:pl-20" : "lg:pl-72"}`}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
