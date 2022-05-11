import './../App.css';

function Noticia(){
    const noticia = {
      titulo : "Curso React 2022",
      descripcion : "Curso de React del Informatorio - Año 2022 - Prof: Ing. Blas Pascal"
    }
  
    const {titulo, descripcion} = noticia
  
    return (
      <div className = "mi-clase">
        <h1 className='mi-titulo'>Mi noticia: {titulo} </h1>
      </div>
    )
  }

  export default Noticia