"use client";

import { useEffect, useState } from "react";

const LoadingDots = () => {
    return (
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
};

const WebsitesPage = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        if (search) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [search]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[436px] h-[112px] bg-white flex-col flex rounded-[12px] gap-[24px] custom-shadow">
                <div className="relative flex flex-col justify-center h-full px-[24px] gap-[4px]">
                    <span className="text-[#424243] text-xs flex gap-[4px]">
                        Website
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 12.8652C9.81371 12.8652 12.5 10.1789 12.5 6.86523C12.5 3.55153 9.81371 0.865234 6.5 0.865234C3.18629 0.865234 0.5 3.55153 0.5 6.86523C0.5 10.1789 3.18629 12.8652 6.5 12.8652ZM5 5.56365C5 4.71024 5.67897 4.03191 6.5 4.03191C6.95496 4.03191 7.33403 4.16943 7.59066 4.38725C7.83897 4.59802 8 4.9053 8 5.32178C8 5.81567 7.71682 6.06715 7.20806 6.43305C7.18079 6.45267 7.15228 6.4729 7.12279 6.49382L7.12238 6.49412C6.67399 6.81231 6 7.2906 6 8.19857H7C7 7.83322 7.23398 7.64618 7.79194 7.24489C8.28318 6.8916 9 6.37135 9 5.32178C9 4.61615 8.71332 4.0285 8.23777 3.62486C7.77054 3.22827 7.14961 3.03191 6.5 3.03191C5.11189 3.03191 4 4.17286 4 5.56365H5ZM7 10.7652V9.69857H6V10.7652H7Z" fill="#424243" />
                        </svg>

                    </span>
                    <div className="relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-[40px] p-[12px] border-[1px] text-sm text-[#424243] border-[#87898A] rounded-[4px] hover:border-[1px] hover:border-[#1789FA] focus:outline-none focus:border-[2px] focus:border-[#1789FA] w-full"
                            placeholder="Enter a login URL or app name"
                        />
                        {loading && (
                            <div className="absolute top-[40px] left-0 w-[306px] h-[48px] bg-white text-[#BEBFC2] text-xs rounded-md shadow-lg flex justify-center items-center">
                                {/* Contenido del rectángulo de búsqueda */}

                                {/* <LoadingDots /> */}
                                No results found
                            </div>
                        )}
                        <div className="absolute top-[40px] left-0 w-[306px] min-h-[48px] py-[8px] bg-white text-[#BEBFC2] text-xs rounded-[8px] shadow-lg flex flex-col justify-center items-center">
                            {/* Items rendered */}
                            <div className="flex items-center w-full h-[48px] hover:bg-[#F2F9FF] py-[10px] px-[20px] gap-[8px] cursor-pointer">
                                <div className="w-[28px] h-[28px] bg-blue-200">

                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm font-bold leading-none text-[#424243]">Atlassian</span>
                                    <span className="text-xs leading-none text-[#757678]">primero</span>
                                </div>
                            </div>
                            <div className="flex items-center w-full h-[48px] hover:bg-[#F2F9FF] py-[10px] px-[20px] gap-[8px] cursor-pointer">
                                <div className="w-[28px] h-[28px] bg-blue-200">

                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm font-bold leading-none text-[#424243]">Atlassian</span>
                                    <span className="text-xs leading-none text-[#757678]">primero</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebsitesPage;