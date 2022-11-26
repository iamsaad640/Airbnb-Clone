import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Post from './Components/Post';

function App() {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <Hero />
        <div className='post-section'>
          <Post
            img="sleev-less.png"
            ratting={"5.0"}
            rattingCount={6}
            country="USA"
            description="Life lesson with Kattie Jaffery"
            price={136}
            />
          <Post  
            img="wedding-photography.png"
            ratting={"5.0"}
            rattingCount={6}
            country="USA"
            description="Life lesson with Kattie Jaffery"
            price={136}
            />
          <Post  
            img="mountain-bike.png"
            ratting={"5.0"}
            rattingCount={6}
            country="USA"
            description="Life lesson with Kattie Jaffery"
            price={136}
            />
        </div>
      </div>
    </>
  );
}

export default App;