import { createContext, useContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext({});

function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem(`@foodexplorer:shoppingcart`)) || []
  );

  const [orders, setOrders] = useState([]);

  const handleAddDish = (data, amount, image) => {
    try {
      const { id, title, price } = data;

      const formatPrice =
        Math.round(amount * Number(price.replace(",", ".")) * 100) / 100;

      const finalOrder = {
        id,
        title,
        price: formatPrice,
        image,
        amount,
      };

      const orderControl = shoppingCart.findIndex(
        (currentOrder) => currentOrder.title === orders.title
      );
      if (orderControl !== -1) {
        setShoppingCart((prevState) => {
          const newState = [...prevState];
          newState[orderControl].amount += amount;
          newState[orderControl].price =
            Math.round((newState[orderControl].price + formatPrice) * 100) /
            100;
          return newState;
        });
      }
      setShoppingCart((prevState) => [...prevState, orders]);
      alert("O Item foi adicionado ao carrinho!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o item selecionado ao carrinho");
      }
    }
  };

  const handleResetCart = async () => {
    localStorage.removeItem("@foodexplorer:shoppingcart");
    setShoppingCart([]);
  };

  const handleRemoveDish = (deleted) => {
    setShoppingCart((prevState) =>
      prevState.filter((element) => element.id !== deleted)
    );
  };

  const totalValue = shoppingCart.reduce((value, item) => {
    return value + item.price;
  }, 0);

  useEffect(() => {
    localStorage.setItem(
      "@foodexplorer:shoppingcart",
      JSON.stringify(shoppingCart)
    );
  }, [shoppingCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        handleAddDish,
        handleRemoveDish,
        handleResetCart,
        shoppingCart,
        orders,
        setOrders,
        totalValue: totalValue.toFixed(2).replace(".", ","),
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  return context;
}

export { ShoppingCartProvider, useShoppingCart };
