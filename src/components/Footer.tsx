import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Building2" size={32} className="text-blue-400" />
              <h3 className="text-2xl font-bold">СтендМастер</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональное изготовление выставочных стендов, павильонов и
              рекламных конструкций. 15 лет опыта, более 200 реализованных
              проектов.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg">
                <Icon name="Phone" size={20} className="text-blue-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg">
                <Icon name="Mail" size={20} className="text-blue-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg">
                <Icon name="MapPin" size={20} className="text-blue-400" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Выставочные стенды</li>
              <li>Торговые павильоны</li>
              <li>Рекламные конструкции</li>
              <li>Дизайн проектирование</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>О нас</li>
              <li>Портфолио</li>
              <li>Отзывы</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 СтендМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
