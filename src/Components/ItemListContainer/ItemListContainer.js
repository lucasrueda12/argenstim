
export const ItemListContainer = (greeting) =>{
    return(
        <h2 style={styles.titulo}>{greeting.greeting}</h2>
    );
}

const styles = {
    titulo:{
      textAlign: 'center',
      width: '100%',
      color: '#E94560'
    }
  }