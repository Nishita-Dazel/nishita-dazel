import "../Style/All.css"
import { Icon } from "@iconify/react";
import image from '../Image/hero.png'

const Banner = () => {
  return (
    <div name='home'>
      <div className="hero-one text-white py-4 lg:py-6">
        <div className="mx-auto flex justify-between w-full md:w-[90%] lg:w-[75%] px-2">
          <div>
            <h1 className="text-6xl font-bold text-text white hero-text-head">
              Set Your <span className="business">Business</span>
              <br />
              With Innovative Idea
            </h1>
            <p className="py-6 hero-text-p text-text white">
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla porttitor. oltorrent gongi Duis a orci nunc. Suspendisse
              ac convallis sapien, quis commodo libero. Donec nec duomoi luctus,
              pellentesque lacus sed, mollis going leo.
            </p>
          </div>
          <div class="hero-img-div">
            <img src={image} alt="sg" className="rounded max-h-[450px] max-w-[400px]"/>
          </div>
        </div>
      </div>


      <div className="creative-design py-3 ">
        <div className="hero potentials">
          <div className="mx-auto w-full md:w-[90%] lg:w-[75%] px-2 py-4 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold text-white potential-text-head">
                Unlock The <span className="potential">Potential</span> Of{" "}
                <br />
                Your Business.
              </h1>
              <p className="py-6 potential-text-p">
                Maecenas euismod viverra purus, volutpat posuere mauris
                tristique quisokaft. Mauris facilisis consequat dolor, et luctus
                tortor imperdiet eget. Nulla europeai facilisi. Aliquam ac nisi
                sed enim ullamcorper condimentum. Creative Strategy Unique
                Production Rebranding Design Corporate Identity
              </p>
              <hr  />
              <div class="grid grid-cols-1 lg:grid-cols-2 mt-[10px]">
                <div className="items-design">
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Creative Strategy</span></h6>
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Unique Production</span></h6>
                </div>
                <div className="items-design">
                <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Rebranding Design</span></h6>
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/><span className="text-white ml-[5px]">Corporate Identity</span></h6>
                </div>

              </div>
            </div>
            <div class="design-img-div">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
