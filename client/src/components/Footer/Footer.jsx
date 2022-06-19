import './Footer.css'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter>
            <div className='footer'>
                &copy; {new Date().getFullYear()} &nbsp; &nbsp; Document Tracking
            </div>
        </MDBFooter>
    )
}

export default Footer