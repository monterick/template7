
import './Content.css';
export default function Content(){
    return(
        <div className="row">
            <div className="col-md-4" style={{margin:"80px"}}>
                <div style={{fontSize:"70px",fontWeight:"bold",color:"#0c9ddd"}}>
                DENTAL  CARE
                </div>
                
                    <div style={{textAlign:"center",backgroundColor:"#0facf1",color:"white",width:"200px",padding:"7px"}} type="button">VIEW ALL SERVICES</div>
                
                <div style={{fontSize:"25px"}}>
                Changing Lives One Smile At A Time
                </div>
            </div>
            <div className="col" >
                <div className="image1" style={{height:"400px"}}>
                    
                </div>
            </div>
        </div>
    );
}