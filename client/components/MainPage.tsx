import SearchBar from './Searchbar'
import HobbyBtn from './HobbyBtn'

export default function mainPage() {
  return (
    <div className="main-page">
      <h1>Pattern Library</h1>
      <SearchBar />
      <div className="hobbies">
        <HobbyBtn />
        <HobbyBtn />
        <HobbyBtn />
        <HobbyBtn />
        <HobbyBtn />
      </div>
    </div>
  )
}
