import './Menu.css'
export default function Menu(){
    return(
        <div className="menu">
          <div>
              <div className="row">
                  <div  style={{color:"white",fontSize:"25px",textAlign:"right",margin:"10px"}} className="col pointer">
                      X
                  </div>
              </div>
              <div style={{textAlign:"center"}}>
              <ul>
                  <li><a href="#">Dental Care</a></li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
                  <li><a href="#">Page 4</a></li>
                  <li><a href="#">Page 5</a></li>
              </ul>
              </div>
          </div>
        </div>
    );
   
}



