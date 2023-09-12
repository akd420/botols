const handleAddToCart = (bottle) => {
    const newCart = [...cart,bottle];
    setCart(newCart);
    console.log(initialStock);
    if(initialStock>0){
        setStock(stock-1);
    }
    else{
        alert('Sorry! Out of stock');
    }
  }