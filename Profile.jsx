import { Link, Outlet, useNavigate, useParams } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)
    
    return (
        <div>
            <h1>Este perfil pertenece a la daianeta xd 🥱</h1>
            <h2>Cohorte: FT 37a</h2>

            <button>
                <Link to='/person'>Person</Link>
            </button>

            <button onClick={() => navigate('/')}>BACK</button>

            <Outlet/>
        </div>
    )
}

export default Profile