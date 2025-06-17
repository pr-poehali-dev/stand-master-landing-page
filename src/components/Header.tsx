import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-blue-800" />
            <h1 className="text-2xl font-bold text-gray-900">СтендМастер</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
