/*
Swiper
*/
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*
Hooks
*/
import { useState, useEffect } from "react";
import { useGetFavorites } from "../../hooks/useFavoritesDishes";

/*
Services
*/
import { api } from "../../services/api";

/*
Components
*/
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

/*
Elements
*/
import { Container, Content, Banner } from "./styles";
import mainIngredients from "../../assets/ingredients-main.png";

export const Home = () => {
  const { favoriteDishes } = useGetFavorites();
  const [searchDishes, setSearchDishes] = useState("");
  const [dishes, setDishes] = useState([]);
  const [temporaryDishes, setTemporaryDishes] = useState([]);
  const [favorites, setFavorites] = useState(true);

  const handleFavorites = async (favorites) => {
    if (typeof favoriteDishes === "undefined" || !favoriteDishes.length) {
      return;
    } else {
      setDishes(favoriteDishes);
      setFavorites(false);
    }
    if (dishes === favoriteDishes) {
      setDishes(temporaryDishes);
      setFavorites(true);
    }
  };

  useEffect(() => {
    const getDishes = async () => {
      const response = await api.get(`/dishes?title=${searchDishes}`);
      setDishes(response.data);
      setTemporaryDishes(response.data);
      console.log(dishes);
    };
    getDishes();
  }, [searchDishes, !favoriteDishes.length]);

  return (
    <Container>
      <Header
        searchDishes={setSearchDishes}
        favoritesDishesFilter={handleFavorites}
        handleFavorites={favorites}
      />
      <Content>
        <Banner>
          <img src={mainIngredients} alt="Ingredientes Principais" />
          <div className="banner">
            <div className="title">
              <h1>Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
        </Banner>

        <div className="cards">
          <p>Refeições</p>
          {dishes.filter((dish) => dish.category == "dish").length > 0 ? (
            <Swiper
              style={{
                "--swiper-navigation-size": "30px",
              }}
              grabCursor={true}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
              }}
              className="mySwiper"
            >
              {dishes
                .filter((dish) => dish.category == "dish")
                .map((dish) => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card data={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : null}

          <p>Sobremesas</p>
          {dishes.filter((dish) => dish.category == "dessert").length > 0 ? (
            <Swiper
              style={{
                "--swiper-navigation-size": "30px",
              }}
              grabCursor={true}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
              }}
              className="mySwiper"
            >
              {dishes
                .filter((dish) => dish.category == "dessert")
                .map((dish) => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card data={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : null}

          <p>Bebidas</p>
          {dishes.filter((dish) => dish.category == "drinks").length > 0 ? (
            <Swiper
              style={{
                "--swiper-navigation-size": "30px",
              }}
              grabCursor={true}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {dishes
                .filter((dish) => dish.category == "drinks")
                .map((dish) => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card data={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : null}
        </div>
      </Content>
      <Footer />
    </Container>
  );
};
