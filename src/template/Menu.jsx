import './Menu.css'




export default function Menu(props){
    
   
    return(
        <div className="menu">
          <div className="menu-content"  style={{display: props.visu}}>
              <div className="row">
                  <div style={{color:"white",fontSize:"25px",textAlign:"right",margin:"10px"}} className="col pointer">
                      {props.children}
                  </div>
              </div>
              <div style={{textAlign:"center"}}>
              <ul>
                  <li><a href="#">Dental Care</a></li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
                  <li><a href="#">Page 4</a></li>
                  <li><a href="#">Page 5</a></li>
                  <li><a href="#">Page 6</a></li>
                  <li><a href="#">Page 7</a></li>
                  <li><a href="#">Page 8</a></li>
                  <li><a href="#">Page 9</a></li>
                  <li><a href="#">Page 10</a></li>
              </ul>
              </div>
          </div>
        </div>
    );

   
   
}



