import './Searchbar.css'
import {BsSearch} from 'react-icons/bs'

function Searchbar({handleSearch}) {
  return (
    <div className='entire--container'>
        <div className='search--container'>
            <BsSearch className='search--icon'/>
            <input type='text' placeholder='Search artisan' className='search--bar'
            onChange={handleSearch}
            />
        </div>
    </div>
  )
}

export default Searchbar