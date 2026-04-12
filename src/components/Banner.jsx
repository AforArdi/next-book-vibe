import Image from "next/image";
import bannerImg from '@/assets/images/banner.png'

const Banner = () => {
    return ( 
        <div className="flex items-center justify-center container mx-auto my-15 p-10 gap-10 bg-[#1313130d] rounded-lg">
            <div className="space-y-10">
                <h2 className="font-bold text-5xl">Books to freshen up <br /> your bookshelf</h2>
                <button className="btn bg-[#23BE0A] text-white rounded-lg">View the List</button>
            </div>
            <div>
                <Image
                src={bannerImg}
                ></Image>
            </div>
        </div>
     );
}
 
export default Banner;