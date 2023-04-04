import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Este es el componente Home</h1>

            <button>
                <Link to='/about'/>About<Link/>
            </button>
            
            <button>
                <Link to='/profile'>Profile</Link>
            </button>
        </>
    )
}


export default Home