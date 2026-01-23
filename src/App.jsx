import './App.css'
import Background from './components/Background'

function App() {

  return (
    <>
      <Background />

      <div className="relative z-10 text-white text-center pt-[20vh]">
        {/* Your foreground content goes here */}
        <h1>Welcome to My Website</h1>
        <p>This is content over the background.</p>
      </div>

      {/* <div className="relative z-10 min-h-screen text-white">
        <Navbar />
        <Hero />
        <Footer />
      </div> */}
    </>
      
  )
}

export default App
