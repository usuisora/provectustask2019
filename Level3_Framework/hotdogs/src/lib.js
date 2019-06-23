
export const reverseDateString = (ds) => {
    return ds.split('-').reverse().join('-')
  }
  
  export const filterByExpiration = (items) => {
      let Today =   new Date().toISOString().substring(0,10)
      return items.filter(item => reverseDateString(item.expirationDate) > Today)
  };
