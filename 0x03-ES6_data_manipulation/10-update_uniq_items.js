function updateUniqueItems(map) {
  const updatedMap = {};
  map.froEach((item, index) => {
    if(item.quantity === 1) {
      updatedMap[item.name] = {
        name: item.name,
        quantity: 100
      };
    }
  });
  return updatedMap;
}
