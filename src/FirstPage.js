import { Link, useParams } from 'react-router-dom';

function FirstPage(props) {
    const { id } = useParams();

    const StyleSheet = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FF2E63',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    return(
        <div style={ StyleSheet }>
            <h1 style={{ color:'white' }}>First Page { id }</h1>
        </div>
    )
}

export default FirstPage;