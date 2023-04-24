import { Link, useParams } from 'react-router-dom';

function SecondPage() {
    const { id } = useParams();

    const StyleSheet = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#08D9D6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    return(
        <div style={ StyleSheet }>
            <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to="/second" style={{ marginLeft: '20px' }}>點我連到第二頁</Link>
            </nav>
            <h1 style={{ color:'white' }}>Second Page - { id }</h1>
        </div>
    )
}

export default SecondPage;