function SecondPage() {
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
            <h1 style={{ color:'white' }}>Second Page</h1>
        </div>
    )
}

export default SecondPage;