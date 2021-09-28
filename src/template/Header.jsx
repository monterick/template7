import './Header.css'

export default function Header(){
   
    return(
        <header className="header">
            <div className="row" >
              <div className="col">
                  
                 <div className="textheader"> DENTAL CLINIC </div>
                  
              </div>
              <div className="col-md-1">
                  <button  type="button">bot</button>
              </div>
            </div>            
        </header>
    );
}

