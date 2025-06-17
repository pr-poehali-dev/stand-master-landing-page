import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Профессиональные
              <span className="text-blue-800 block">выставочные стенды</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Создаем впечатляющие выставочные стенды, павильоны и рекламные
              конструкции для успешного представления вашего бизнеса
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Узнать больше</span>
                <Icon name="ArrowRight" size={20} />
              </button>

              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors">
                Портфолио
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800">200+</div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800">15</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800">100%</div>
                <div className="text-gray-600">Качество</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Современный выставочный стенд"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <Icon name="Award" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
