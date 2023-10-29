import { createContext, useContext, useState, useEffect } from "react";

export const GetFavoritesDishesContext = createContext({});

function GetFavoritesDishesProvider({ children }) {
  const [favoriteDishes, setFavoritesDishes] = useState(
    JSON.parse(localStorage.getItem("@foodexplorer:favoritesdishes")) || []
  );

  const includeFavoriteDish = (dish) => {
    setFavoritesDishes([...favoriteDishes, dish]);
  };

  const removeFavoriteDish = (dish) => {
    setFavoritesDishes(
      favoriteDishes.filter((dishes) => dishes.id !== dish.id)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "@foodexplorer:favoritesdishes",
      JSON.stringify(favoriteDishes)
    );
  }, [favoriteDishes]);

  return (
    <GetFavoritesDishesContext.Provider
      value={{
        favoriteDishes,
        includeFavoriteDish,
        removeFavoriteDish,
      }}
    >
      {children}
    </GetFavoritesDishesContext.Provider>
  );
}

function useGetFavorites() {
  const context = useContext(GetFavoritesDishesContext);
  return context;
}

export { GetFavoritesDishesProvider, useGetFavorites };
