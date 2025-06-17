import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Технологическая выставка",
      category: "Выставочный стенд",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      description: "Современный стенд для IT-компании с интерактивными зонами",
    },
    {
      title: "Медицинский форум",
      category: "Павильон",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      description:
        "Просторный павильон для презентации медицинского оборудования",
    },
    {
      title: "Автосалон премиум",
      category: "Рекламная конструкция",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68e2c6d67c?w=400&h=300&fit=crop",
      description: "Элегантная вывеска с LED-подсветкой для автодилера",
    },
    {
      title: "Пищевая индустрия",
      category: "Выставочный стенд",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
      description:
        "Яркий стенд с дегустационной зоной для пищевого производства",
    },
    {
      title: "Строительная выставка",
      category: "Павильон",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      description: "Многоуровневый павильон для строительной компании",
    },
    {
      title: "Модный бутик",
      category: "Рекламная конструкция",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Стильная витрина с динамической подсветкой",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Портфолио</h2>
          <p className="text-xl text-gray-600">
            Примеры наших работ — от компактных стендов до масштабных павильонов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors">
            Посмотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
