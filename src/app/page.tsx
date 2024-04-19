"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";



export default function Home() {
  useGSAP(() => {
    gsap.to('#logo', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    })

    gsap.fromTo('#buttons', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.3
    })
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono">
        <div className="flex flex-col items-center">
          <Image id="logo" className="mb-5 opacity-0 translate-y-10" src="/mozer-logo.png" width={300} height={300} alt="" />
          <h1 id="orange" className="text-7xl md:text-8xl font-bold mb-4">$MOOZER</h1>
          <p className="text-3xl md:text-4xl mb-4">Coinz 4 Moozerz</p>
          <p className="mb-4 text-xs bg-white p-4 rounded-full">CA: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="flex flex-col w-[40%] md:w-[20%] gap-5">
            <a id="buttons"
              href="https://www.google.com" 
              target="_blank" rel="noreferrer" 
              className="bg-black text-white w-full text-2xl rounded-lg p-2 text-center"
            >BUY</a>
            <a id="buttons"
              href="https://www.google.com" 
              target="_blank" rel="noreferrer" 
              className="bg-black text-white w-full text-2xl rounded-lg p-2 text-center"
            >CHARTZ</a>
            <a id="buttons"
              href="https://www.google.com" 
              target="_blank" rel="noreferrer" 
              className="bg-black text-white w-full text-2xl rounded-lg p-2 text-center"
            >TWIZZER</a>
            <a id="buttons"
              href="https://www.google.com" 
              target="_blank" rel="noreferrer" 
              className="bg-black text-white w-full text-2xl rounded-lg p-2 text-center"
            >TEZEGAM</a>
          </div>
        </div>
        <div className="p-5 mt-20 flex flex-col">
          <p className="mb-20">Moo$er is a totally rad (and reaaaalllly not Mickey Mouse) crypto project by some super-duper-smart developers who like shiny things and strong cheese (not financial advice!). It&apos;s, like, a celebration of moo-gic (that&apos;s magic, duh!) and could make you richer than Scrooge McDuck swimming in a money bin (but also might not, no promises!). So if you wanna be a crypto-cool kid (and maybe buy a lambo one day), invest at your own risk! We&apos;re not your financial fairy godmoothers (those don&apos;t exist!), so don&apos;t come crying to us if your Moo$ers vanish faster than a free ice cream cone on a hot day!</p>
          <Image className="mx-auto" src="/lambo-mozer.png" width={300} height={300} alt="Moozer with Lambo" />
        </div>
      </div>
    </main>
  );
}
