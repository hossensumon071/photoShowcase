import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
        delay: 2.7,
        ease: Expo.easeIn,
      }
    );
  }, []);
};


export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

  gsap.fromTo(el, 
    {
      y: 0,
    },
    {
      y: "-40%",
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: trig.current,
        scrub: 1,
        toggleActions: 'play reverse play reverse'
      }
    }
    )
  }, [])
}

export const useGsapFeatureLeftShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el, 
      {
        height: "100%"
      }, 
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        }
      })
  }, [])
}

export const useGsapFeatureRightShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el, 
      {
        width: "100%"
      }, 
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        }
      })
  }, [])
}