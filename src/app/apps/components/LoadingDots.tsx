const LoadingDots = () => (
    <div className="flex items-center justify-center gap-1 h-full">
        <div className="w-[4px] h-[4px] rounded-full bg-[#BEBFC2] animate-[dotFade_1.4s_infinite]" />
        <div className="w-[4px] h-[4px] rounded-full bg-[#87898A] animate-[dotFade_1.4s_0.4s_infinite]" />
        <div className="w-[4px] h-[4px] rounded-full bg-[#757678] animate-[dotFade_1.4s_0.8s_infinite]" />
        <style jsx>{`
          @keyframes dotFade {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
    </div>
);

export default LoadingDots;