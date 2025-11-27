import React, { useState, useMemo, useEffect, useRef } from "react";
import { Category, Service, Language } from "./types";
import { services } from "./data";
import { ServiceCard } from "./components/ServiceCard";
import { CategoryButton } from "./components/CategoryButton";
import { SmartSearch } from "./components/SmartSearch";
import { translations } from "./translations";
import { config } from "./config";
import { Phone, Search, Globe, Filter, ArrowUp } from "lucide-react";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const t = translations[language];

  // Reset subcategory when category or language changes
  useEffect(() => {
    setSelectedSubcategory("All");
  }, [selectedCategory, language]);

  // Scroll to results when category or subcategory changes (but not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (resultsRef.current) {
      // Small delay to ensure DOM has updated
      setTimeout(() => {
        const headerOffset = 100; // Account for sticky header
        const elementPosition =
          resultsRef.current?.getBoundingClientRect().top || 0;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [selectedCategory, selectedSubcategory]);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300; // Show button after scrolling 300px
      setShowBackToTop(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStr = (obj?: { [key in Language]: string }) => {
    if (!obj) return "";
    return obj[language] || obj["en"];
  };

  const subcategories = useMemo(() => {
    if (selectedCategory === "All") return [];

    const uniqueSubs = new Set<string>();
    services.forEach((s) => {
      if (s.category === selectedCategory && s.subcategory) {
        uniqueSubs.add(getStr(s.subcategory));
      }
    });

    return Array.from(uniqueSubs).sort();
  }, [selectedCategory, language]);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const searchLower = searchTerm.toLowerCase();
      const name = getStr(service.name).toLowerCase();
      const description = getStr(service.description).toLowerCase();
      const subRaw = service.subcategory ? getStr(service.subcategory) : "";
      const subLower = subRaw.toLowerCase();

      const matchesSearch =
        name.includes(searchLower) ||
        description.includes(searchLower) ||
        subLower.includes(searchLower);

      const matchesSubcategory =
        selectedSubcategory === "All" || subRaw === selectedSubcategory;

      return matchesCategory && matchesSearch && matchesSubcategory;
    });
  }, [selectedCategory, searchTerm, language, selectedSubcategory]);

  // Scroll to results when search term changes (debounced - waits for user to stop typing)
  useEffect(() => {
    if (isInitialMount.current) {
      return;
    }

    // Don't scroll if search term is too short (less than 3 characters)
    if (searchTerm.length < 3 && searchTerm.length > 0) {
      return;
    }

    // Don't scroll if there are no results
    if (filteredServices.length === 0) {
      return;
    }

    // Debounce: wait 500ms after user stops typing before scrolling
    const timeoutId = setTimeout(() => {
      if (resultsRef.current && filteredServices.length > 0) {
        const headerOffset = 100; // Account for sticky header
        const elementPosition =
          resultsRef.current?.getBoundingClientRect().top || 0;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);

    // Cleanup timeout if user continues typing
    return () => clearTimeout(timeoutId);
  }, [searchTerm, filteredServices.length]);

  // Order of categories to display
  const categoryOrder = [
    Category.EMERGENCY,
    Category.HEALTH,
    Category.HOUSING,
    Category.TRANSPORTATION,
    Category.FOOD,
    Category.EMPLOYMENT,
    Category.LEGAL,
    Category.MENTAL_HEALTH,
    Category.CAREGIVER,
    Category.RECREATION,
    Category.SPECIALIZED,
    Category.ABUSE,
    Category.PETS,
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900 tracking-tight leading-none">
                  {t.title}
                </h1>
                <p className="text-xs md:text-sm text-stone-500 font-medium">
                  {t.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center bg-stone-100 rounded-lg p-1 border border-stone-200">
                <Globe className="w-4 h-4 text-stone-500 ml-2 mr-1" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent border-none text-sm font-semibold text-stone-700 focus:ring-0 py-1 pl-1 pr-8 cursor-pointer"
                  aria-label="Select Language"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="zh">中文</option>
                  <option value="pa">ਪੰਜਾਬੀ</option>
                  <option value="es">Español</option>
                </select>
              </div>
              <a
                href="tel:911"
                className="md:hidden bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-red-700 text-sm"
              >
                911
              </a>
              <div className="hidden md:block text-right mr-2">
                <p className="text-xs font-bold text-stone-600 uppercase tracking-wide">
                  {t.needHelp}
                </p>
                <p className="text-lg font-bold text-blue-800 leading-none">
                  {t.callText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {t.heroTitle}
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-stone-300 text-xl shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-6 h-6" />
          </div>
          {config.branding.enabled && (
            <p className="text-xs text-stone-400 mt-2">
              Powered by{" "}
              <a
                href={config.branding.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                {config.branding.companyName}
              </a>
            </p>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-700 mb-4 sr-only">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categoryOrder.map((cat) => (
              <CategoryButton
                key={cat}
                label={t.categories[cat]}
                category={cat}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat ? "All" : cat)
                }
                isSelected={selectedCategory === cat}
              />
            ))}
            <button
              onClick={() => setSelectedCategory("All")}
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 w-full h-32 md:h-40
                ${
                  selectedCategory === "All"
                    ? "bg-stone-800 border-stone-800 text-white"
                    : "bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-200"
                }
              `}
            >
              <span className="text-lg font-bold text-center">{t.showAll}</span>
            </button>
          </div>
        </div>

        {selectedCategory !== "All" && subcategories.length > 0 && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-2 mb-3 text-stone-500 text-sm font-semibold uppercase tracking-wider">
              <Filter className="w-4 h-4" />
              <span>Filter by Type</span>
            </div>
            <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              <div className="flex gap-2 whitespace-nowrap">
                <button
                  onClick={() => setSelectedSubcategory("All")}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    selectedSubcategory === "All"
                      ? "bg-blue-800 text-white shadow-md transform scale-105"
                      : "bg-white text-stone-600 border border-stone-300 hover:bg-stone-100 hover:border-stone-400"
                  }`}
                >
                  {t.showAll}
                </button>
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      selectedSubcategory === sub
                        ? "bg-blue-800 text-white shadow-md transform scale-105"
                        : "bg-white text-stone-600 border border-stone-300 hover:bg-stone-100 hover:border-stone-400"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={resultsRef} className="scroll-mt-24 animate-fade-in">
          <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-2">
            <h3 className="text-2xl font-bold text-slate-900">
              {selectedCategory === "All"
                ? searchTerm
                  ? t.searchResults
                  : t.allServices
                : t.categories[selectedCategory]}
            </h3>
            <span className="text-stone-500 font-medium">
              {filteredServices.length} results
            </span>
          </div>

          {filteredServices.length > 0 ? (
            <div
              key={`${selectedCategory}-${selectedSubcategory}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  language={language}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
              <p className="text-xl text-stone-500 mb-4">{t.noResults}</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                  setSelectedSubcategory("All");
                }}
                className="text-blue-700 font-bold hover:underline text-lg"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-white text-xl font-bold mb-4">
                Toronto Seniors Directory
              </h4>
              <p className="mb-4">
                This tool is based on the "Directory of Services for Seniors and
                Caregivers in Toronto" provided by the City of Toronto.
              </p>
              <p className="text-sm opacity-75">
                Always call ahead to confirm service availability.
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-white text-xl font-bold mb-4">
                Important Numbers
              </h4>
              <ul className="space-y-2 text-lg">
                <li>
                  <strong className="text-white">Emergency:</strong> 911
                </li>
                <li>
                  <strong className="text-white">Community Services:</strong>{" "}
                  211
                </li>
                <li>
                  <strong className="text-white">City Services:</strong> 311
                </li>
                <li>
                  <strong className="text-white">Health Advice:</strong> 811
                </li>
              </ul>
            </div>
          </div>

          {/* Branding Section */}
          {config.branding.enabled && (
            <div className="border-t border-slate-700 pt-6 mt-6">
              <p className="text-center text-slate-400 text-sm">
                {config.branding.text}{" "}
                <a
                  href={config.branding.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline transition-colors"
                >
                  {config.branding.companyName}
                </a>
              </p>
            </div>
          )}
        </div>
      </footer>

      {config.aiHelper.enabled && (
        <SmartSearch language={language} translations={t} />
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
