// pages/Page.tsx
'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Banner from "@/app/MenuLandingPage/Banner";
import Events from "@/app/MenuLandingPage/Events";
import ManfaatSection from "./MenuLandingPage/Manfaat";
import TestimonialsSection from "./MenuLandingPage/Testimoni";
import JoinSection from "./MenuLandingPage/join";
const Map = dynamic(() => import('./MenuLandingPage/Map/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Banner/>
      <section>
        <ManfaatSection/>
      </section>
      <section>
        <Map/>
      </section>
      <section>
        {/* <Events /> */}
      </section>
      <section>
        <TestimonialsSection/>
      </section>
      <section>
        <JoinSection/>
      </section>
    </>
  );
}
