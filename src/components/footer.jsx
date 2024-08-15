import F_logo from '../assets/footer_logo.png'

function Footer(){
    return(
        <div className="w-full bg-figmaBlue text-white">
            <div className="py-12 ">
                <div className="flex items-center flex-col justify-center gap-8 font-light text-center">
                    <img src={F_logo} className='w-32' alt="" />
                    <h1 className='text-center font-semibold'>School Management System <br /><span className='font-normal'>powered by Greatsome Innovations Ltd</span></h1>
                    <div className='flex gap-4'>
                        <p>greatsomeinns@gmail.com</p>
                        <p>0811 763 2222</p>
                    </div>
                    <p>1, Ogunlowo Street, Obanta Avenue, Off Ajao Road, Ikeja, Lagos</p>
                    <p>&copy; Copyright 2024. Greatsome Innovations Limited</p>
                </div>
            </div>            
        </div>
    )
}

export default Footer