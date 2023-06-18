import { useRef } from "react";
import { useGsapShutterUnveil, useGsapPhotoDropping, useGsapPhotoLevitate } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photoref1 = useRef(null);
  const photoref2 = useRef(null);
  const photoref3 = useRef(null);
  const photoref4 = useRef(null);
  const photoref5 = useRef(null);

  const photoArr = [photoref1, photoref2, photoref3, photoref4, photoref5];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photoArr);
  useGsapPhotoLevitate(photoArr, heroRef)
  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethreal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photoref1}
          className="photo one"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7549484/pexels-photo-7549484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          }}
        ></div>
        <div
          ref={photoref2}
          className="photo two"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/9551363/pexels-photo-9551363.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          }}
        ></div>
        <div
          ref={photoref3}
          className="photo three"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/17190006/pexels-photo-17190006/free-photo-of-fashion-people-woman-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          }}
        ></div>
        <div
          ref={photoref4}
          className="photo four"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/14751173/pexels-photo-14751173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          }}
        ></div>
        <div
          ref={photoref5}
          className="photo five"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/17084850/pexels-photo-17084850/free-photo-of-reflection-of-woman-in-mirror-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
