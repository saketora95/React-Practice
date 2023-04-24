import { Link, useParams } from 'react-router-dom';
import './Layout.css';

function FirstPage(props) {
    const { id } = useParams();

    return(
        <div className='Layout'>
            <nav>
                <Link to='/'>點我連到第一頁</Link>
                <Link to='/second' style={{ marginLeft: '20px' }}>點我連到第二頁</Link>
            </nav>
            <h1 style={{ color:'white' }}>First Page - { id }</h1>
        </div>
    )
}

export default FirstPage;