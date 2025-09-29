'use client';
import Spline from '@splinetool/react-spline';

export default function SplineCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-end items-center pr-23">
      <div className="w-[500px] h-[500px] relative">
        <Spline scene="https://prod.spline.design/CekctndbSK6KGzdN/scene.splinecode" />
        <style jsx>{`
          .spline-watermark {
            display: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}