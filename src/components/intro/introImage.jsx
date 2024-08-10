import mainImage from '../../assets/umar.png'

const IntroImage = () => {
    return (
        <>
            <div className="relative mt-10  md:mt-0 md:w-6/12 flex items-end">
                <div className="flex-grow">
                    <img
                        className="h-full w-full block object-cover object-left dark:hidden"
                        src={mainImage}
                        alt="app screenshot"

                       
                    />
                    <img
                        className="hidden h-full object-cover object-left dark:block"
                        src={mainImage}
                        alt="app screenshot"
                        
                    />
                </div>
            </div>
        </>
    )
}


export default IntroImage;