import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const AgeVerificationModal = () => (
    <Dialog open={!isVerified} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-900 to-black text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Возрастная верификация
          </DialogTitle>
          <DialogDescription className="text-center text-purple-200">
            Данный сайт содержит материалы для взрослых. Вам должно быть 18 лет
            или больше.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            onClick={() => setIsVerified(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3"
          >
            Мне есть 18 лет
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "https://google.com")}
            className="border-purple-400 text-purple-200 hover:bg-purple-900"
          >
            Мне нет 18 лет
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (!isVerified) {
    return <AgeVerificationModal />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-purple-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Crown" className="text-purple-400" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AdultHub
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                onClick={() => setActiveTab("home")}
                className="text-white hover:text-purple-400"
              >
                Главная
              </Button>
              <Button
                variant={activeTab === "content" ? "default" : "ghost"}
                onClick={() => setActiveTab("content")}
                className="text-white hover:text-purple-400"
              >
                Контент
              </Button>
              <Button
                variant={activeTab === "profiles" ? "default" : "ghost"}
                onClick={() => setActiveTab("profiles")}
                className="text-white hover:text-purple-400"
              >
                Профили
              </Button>
              <Button
                variant={activeTab === "upload" ? "default" : "ghost"}
                onClick={() => setActiveTab("upload")}
                className="text-white hover:text-purple-400"
              >
                Загрузить
              </Button>
            </nav>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-900"
              >
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="home" className="space-y-8">
            {/* Hero Section */}
            <section className="text-center py-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Премиальный контент для взрослых
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Эксклюзивный контент, приватные чаты и возможность загружать
                  собственные материалы в безопасной среде
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
                  >
                    Начать просмотр
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-400 text-purple-200 hover:bg-purple-900 text-lg px-8 py-3"
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
              <h3 className="text-3xl font-bold text-center mb-12">
                Возможности платформы
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-black/50 border-purple-800 hover:border-purple-600 transition-all duration-300">
                  <CardHeader>
                    <Icon
                      name="Image"
                      className="text-purple-400 mb-4"
                      size={48}
                    />
                    <CardTitle className="text-purple-200">
                      Галерея контента
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Просматривайте высококачественные фото и видео от
                      верифицированных создателей
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-black/50 border-purple-800 hover:border-purple-600 transition-all duration-300">
                  <CardHeader>
                    <Icon
                      name="Users"
                      className="text-purple-400 mb-4"
                      size={48}
                    />
                    <CardTitle className="text-purple-200">
                      Профили создателей
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Подписывайтесь на любимых моделей и получайте эксклюзивный
                      контент
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-black/50 border-purple-800 hover:border-purple-600 transition-all duration-300">
                  <CardHeader>
                    <Icon
                      name="Upload"
                      className="text-purple-400 mb-4"
                      size={48}
                    />
                    <CardTitle className="text-purple-200">
                      Загрузка контента
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Стань создателем контента и зарабатывай на своих
                      материалах
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="content" className="space-y-8">
            <section className="py-8">
              <h3 className="text-3xl font-bold text-center mb-12">
                Категории контента
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Фото", count: "12,543", icon: "Camera" },
                  { name: "Видео", count: "8,234", icon: "Video" },
                  { name: "Стримы", count: "1,234", icon: "Radio" },
                  { name: "Чаты", count: "5,678", icon: "MessageCircle" },
                ].map((category) => (
                  <Card
                    key={category.name}
                    className="bg-black/50 border-purple-800 hover:border-purple-600 transition-all duration-300 cursor-pointer"
                  >
                    <CardHeader className="text-center">
                      <Icon
                        name={category.icon}
                        className="text-purple-400 mx-auto mb-4"
                        size={48}
                      />
                      <CardTitle className="text-purple-200">
                        {category.name}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-purple-900 text-purple-200"
                      >
                        {category.count} материалов
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="profiles" className="space-y-8">
            <section className="py-8">
              <h3 className="text-3xl font-bold text-center mb-12">
                Популярные создатели
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card
                    key={i}
                    className="bg-black/50 border-purple-800 hover:border-purple-600 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
                      <CardTitle className="text-purple-200 text-center">
                        Модель {i}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-center">
                        Премиальный контент • 18+ • Верифицирован
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Подписаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="upload" className="space-y-8">
            <section className="py-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8">
                  Загрузка контента
                </h3>
                <Card className="bg-black/50 border-purple-800">
                  <CardHeader>
                    <CardTitle className="text-purple-200">
                      Стань создателем
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Загружай свой контент и зарабатывай на подписках
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed border-purple-600 rounded-lg p-8 text-center">
                      <Icon
                        name="Upload"
                        className="text-purple-400 mx-auto mb-4"
                        size={48}
                      />
                      <p className="text-gray-300 mb-4">
                        Перетащите файлы сюда или нажмите для выбора
                      </p>
                      <Button
                        variant="outline"
                        className="border-purple-400 text-purple-200 hover:bg-purple-900"
                      >
                        Выбрать файлы
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                          Название
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-black/50 border border-purple-800 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="Введите название..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                          Описание
                        </label>
                        <textarea
                          className="w-full px-3 py-2 bg-black/50 border border-purple-800 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          rows={4}
                          placeholder="Расскажите о вашем контенте..."
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Загрузить контент
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-purple-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-purple-200 mb-4">
                AdultHub
              </h4>
              <p className="text-gray-400 text-sm">
                Премиальная платформа для взрослого контента с высокими
                стандартами безопасности
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-200 mb-4">Ссылки</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-200 mb-4">
                Создателям
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Стать моделью
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Выплаты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-200 mb-4">
                Безопасность
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Конфиденциальность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Условия использования
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    18+ Контент
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2024 AdultHub. Все права защищены. Только для лиц старше 18
              лет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
