import React from "react";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Store",
      title: "Выставочные стенды",
      description:
        "Индивидуальные стенды для выставок и форумов. Современный дизайн, качественные материалы, быстрый монтаж.",
      features: [
        "Индивидуальный дизайн",
        "Быстрая сборка",
        "Многоразовое использование",
      ],
    },
    {
      icon: "Building",
      title: "Торговые павильоны",
      description:
        "Просторные павильоны для презентации продукции. Функциональные решения для любых мероприятий.",
      features: ["Большие площади", "Модульная система", "Полное оснащение"],
    },
    {
      icon: "Megaphone",
      title: "Рекламные конструкции",
      description:
        "Эффективные рекламные решения: баннеры, вывески, световые короба для максимальной видимости.",
      features: ["Световые решения", "Долговечность", "Яркий дизайн"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по изготовлению выставочного оборудования и
            рекламных конструкций любой сложности
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-blue-800 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
