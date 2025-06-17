import React from "react";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={24} className="text-blue-800" />
            <span className="text-lg font-bold">СтендМастер</span>
          </div>
          <button onClick={onClose}>
            <Icon name="X" size={24} className="text-gray-600" />
          </button>
        </div>

        <nav className="p-6">
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors font-medium"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors font-medium"
            >
              Контакты
            </button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <div className="bg-blue-800 text-white p-4 rounded-lg text-center">
              <p className="font-semibold mb-2">Нужна консультация?</p>
              <p className="text-sm mb-3 opacity-90">Звоните прямо сейчас</p>
              <p className="font-bold">+7 (495) 123-45-67</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
