import Head from "next/head";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import item from "../assets/items";
import styles from "../styles/Home.module.scss";
import MintPopup from "../components/mintpage/MintPopup";
import React, { useState } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygon],
  [
    alchemyProvider({ apiKey: "h5EkxiXXtxUHRFIW4nmcDW3-30NCOhyD" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Walkyries NFT Mintpage</title>
        <meta
          name='description'
          content='Official Mintpage for Walkyries NFT by Uorfi Javed'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section
        className='tf-section hero-slider pt-0'
        style={{ transform: "translateY(-20px)" }}
      >
        <div className='container'>
          <div
            className=' flex justify-center relative'
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div className='swiper-container fade-top-bottom'>
              <div className='swiper-main-1'>
                <Swiper
                  modules={[Autoplay]}
                  direction={"vertical"}
                  spaceBetween={30}
                  slidesPerView={3}
                  loop
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  speed={2000}
                  className='swiper-main'
                >
                  <SwiperSlide>
                    <div className='item item-header bg-1'>
                      <Image src={item.item1} alt='Monteno' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='item item-header bg-2'>
                      <Image src={item.item2} alt='Monteno' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='item item-header bg-1'>
                      <Image src={item.item3} alt='Monteno' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='item item-header bg-2'>
                      <Image src={item.item4} alt='Monteno' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  reverseDirection: true,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                className='swiper-main-2'
              >
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item5} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item6} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item7} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item8} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item9} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>

              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                className='swiper-main-3'
              >
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item10} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item11} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item12} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item13} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item14} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  reverseDirection: true,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                className='swiper-main-4'
              >
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item15} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item16} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item17} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-1'>
                    <Image src={item.item18} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item item-header bg-2'>
                    <Image src={item.item19} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className='absolute w-full h-full flex flex-col items-center justify-center gap-5'
              style={{
                zIndex: "20",
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className='mint-heading'>
                PUBLIC SALE <span style={{ color: "#FD562A" }}>LIVE!</span>
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center gap: 0.75rem",
                }}
              >
                <h4 className='mint-heading-4'>
                  <span>1000</span>/
                  <span style={{ marginRight: "0.5rem" }}>5000</span> MINTED
                </h4>
                <div className='mint-timer'>
                  <h4 className='mint-timer-text'>TIME LEFT</h4>
                  <h4 className='mint-timer-text'>NA : NA : NA : NA</h4>
                </div>
                <a
                  onClick={handleOpen}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#FD562A",
                    color: "white",
                    borderRadius: "9999px",
                    paddingInline: "2.5rem",
                    paddingBlock: "1.1rem",
                    fontSize: "1.25rem",
                    marginTop: "0.75rem",
                  }}
                >
                  Mint Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MintPopup handleClose={handleClose} open={open} />
    </div>
  );
}
