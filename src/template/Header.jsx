import './Header.css'

export default function Header(props){
   
    return(
        <header className="header">
            <div className="row" style={{width:"100%"}}>
              <div className="col-md-4" style={{minWidth:"200px"}}>
                  
                 <div className="textheader"> DENTAL CLINIC </div>
                  
              </div>
              <div className="col-md-8">
                  <div className="d-flex justify-content-end">
                  {props.children}
                  </div>
              </div>
            </div>            
        </header>
    );
}

