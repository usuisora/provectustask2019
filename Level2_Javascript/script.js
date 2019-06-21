// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }




const reverseDateString = (ds) => {
  return ds.split('-').reverse().join('-')
}

const filterByExpiration = (items) => {
    let Today =   new Date().toISOString().substring(0,10)
    return items.filter(item => reverseDateString(item.expirationDate) < Today)
};
