import Navbar from './components/Navbar'
import Separator from './components/Separator'
import StudentsPage from './components/StudentsPage'

function App() {
  return(
    <div className="min-h-screen mx-auto bg-stone-800 
    text-white font-inter
    flex flex-col">
      <Navbar />
      <Separator />
      <StudentsPage />
    </div>
  )
}

export default App
