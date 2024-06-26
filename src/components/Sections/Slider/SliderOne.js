import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function SliderOne({ data, className }) {
  return (
    <section className={`slider-block ${classNames(className)}`}>
      <div className="container">
        <div className="flex max-xl:flex-col-reverse gap-8">
          <div className="xl:w-1/3 w-full xl:pr-[15px]">
            <div className="text">
              <h2 className="heading2 xl:pr-[55px]">
                IT-tjänster för små till medelstora företag
              </h2>
              <div className="body2 mt-4">
                Vi tillhandahåller skräddarsydda mjukvarulösningar för alla
                branscher. Skapa högvärdig programvara och teknik för ditt
                företag.
              </div>
            </div>
            <div className="block-button xl:mt-10 mt-6 flex gap-4 flex-wrap">
              <Link className="button-main" href="/company/about-us">
                Få en gratis bedömning
              </Link>
              <Link className="button-main bg-grey" href="/pages/contact-us">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full xl:pl-[15px]">
            <div className="bg-img w-full rounded-xl overflow-hidden max-sm:h-[300px]">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "58%",
                  paddingBottom: 0,
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAGI89WY-lE/zH2aPj8igBIyYwlsnu-8KA/watch?embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
