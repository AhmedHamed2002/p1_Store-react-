import '../css/slider.css' ;  
function Slider()
{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide m-2" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100 height" src="https://majalahpajak.net/wp-content/uploads/2017/10/ecommerce-retail-.jpg" alt="..."/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 height" src="https://empreender.com.br/wp-content/uploads/2023/08/carrinho-de-compras-online-e-caixas-de-papel-na-parte-superior-do-laptop1.jpg" alt="..."/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 height" src="https://www.ecommercenews.pe/wp-content/uploads/2017/07/confianza-online.jpg"  alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    ); 
}

export  default Slider   ; 