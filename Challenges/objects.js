const usuario = {
   name: 'Giovanni',
   enterprise: {
      name: "Rocketseat",
      focus: "purple",
      address: {
         street: "Guilherme Gembala",
         number: 260,          
      }      
   }
}

console.log(`The ${usuario.enterprise.name} enterprise is located at number ${usuario.enterprise.address.number}, ${usuario.enterprise.address.street} street.`)