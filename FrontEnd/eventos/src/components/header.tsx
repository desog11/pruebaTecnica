type HeaderProps = {
    filterProductos(e:string): void;
    
    
  };

const Header:React.FunctionComponent<HeaderProps> = ({filterProductos}) =>{
    return (
        <header>
            <div className="header_container">
                <h2>Productos</h2>
                <span>Búsqueda por nombre</span>
                <input type="text" placeholder="Búsqueda" 
                onChange={(e)=> filterProductos(e.target.value)}/>
            
            </div>
        </header>
    )
}
export default Header