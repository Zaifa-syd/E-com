import React from 'react'
const Home = () => {
  // Example product data
  const products = [
      {
        
          name: 'Product 1',
          image: '',
          price: '$10.00'
      },
      {
          name: 'Product 2',
          image: '',
          price: '$20.00'
      },
      {
          name: 'Product 3',
          image: '',
          price: '$30.00'
      }
  ];

  return (
      <div>
          <header>
              <h1>WELCOME</h1>
              <nav>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/products">Products</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/contact">Contact</a></li>
                  </ul>
              </nav>
          </header>
          <main>
              <section>
                  <h2>Featured Products</h2>
                  <div>
                      {products.map(product => (
                          <div key={product.name}>
                              <img src={product.image} alt={product.name} />
                              <h3>{product.name}</h3>
                              <p>{product.price}</p>
                          </div>
                      ))}
                  </div>
              </section>
          </main>
          <footer>
              <p>&copy; 2024 Product Store. All rights reserved.</p>
          </footer>
      </div>
  );
};


// // function Home() {
//   return (
//     <div>
//       Home
      
//     </div>
//   )
// }

export default Home
