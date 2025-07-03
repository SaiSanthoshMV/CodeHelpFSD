
import './App.css'
import UserCard from './components/UserCard'
import Prudhvi from './assets/prudhvi.png'
import love from './assets/loverana.png'
import Maharana from './assets/maha.jpeg'

function App() {
  return (
    <div className='container'>
      <UserCard name="Love Rana" desc="desc1" image={love} style={{ "borderRadius":"10px" }} />
      <UserCard name="Maharana Prathap" desc="desc2" image={Maharana} style={{ "borderRadius":"10px" }} />
      <UserCard name="PrudhviRaj Chauhan" desc="desc3" image={Prudhvi} style={{ "borderRadius":"10px" }} />
    </div>
  )
}

export default App