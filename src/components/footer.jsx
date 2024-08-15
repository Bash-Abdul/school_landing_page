import F_logo from '../assets/footer_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Footer(){
    return(
        <div className="w-full bg-figmaBlue text-white">
            <div className="py-12 ">
                <div className="flex items-center flex-col justify-center gap-8 font-light text-center">
                    <img src={F_logo} className='w-32' alt="" />
                    <h1 className='text-center font-semibold'>School Management System <br /><span className='font-normal'>powered by Greatsome Innovations Ltd</span></h1>
                    <div className='flex gap-4'>
                        <p className='flex items-center gap-3'><FontAwesomeIcon icon={faEnvelope} /> greatsomeinns@gmail.com</p>
                        <p className='flex items-center gap-3'> <FontAwesomeIcon icon={faPhone} /> 0811 763 2222</p>
                    </div>
                    <p className='flex items-center gap-3'>  <FontAwesomeIcon icon={faMapMarkerAlt} /> 1, Ogunlowo Street, Obanta Avenue, Off Ajao Road, Ikeja, Lagos</p>
                    <p>&copy; Copyright 2024. Greatsome Innovations Limited</p>
                </div>
            </div>            
        </div>
    )
}

export default Footer