import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureRefShutterLeft = useRef(null);
  const featureRefShutterRight = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureRefShutterLeft, featureRef);
  useGsapFeatureRightShutterUnveil(featureRefShutterRight, featureRef);
  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-l">
          <span className="featur-text">90's TELEPHONE</span>
          <img
            src="https://images.pexels.com/photos/7346608/pexels-photo-7346608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90's TELEPHONE"
          />
          <span
            className="feature-shutter-l"
            ref={featureRefShutterLeft}
          ></span>
        </div>
        <div className="feature-r">
          <span className="featur-text">90's CASSETTE PLAYER</span>
          <img
            src="https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90's CASSETTE PLAYER"
          />
          <span
            className="feature-shutter-r"
            ref={featureRefShutterRight}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
