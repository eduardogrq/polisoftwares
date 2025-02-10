"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";

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

const AppItem = ({ app, onSelect }: { app: any, onSelect: (name: string) => void }) => {

    function extractDomain(url: string) {
        if (!url || typeof url !== "string") return "";
        const match = url.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        return match ? match[1].replace(/^www\./, "") : url;
    }

    const handleClick = () => {
        onSelect(app.name);
    };
    return (
        <div className="flex items-center w-full h-[48px] hover:bg-[#F2F9FF] py-[10px] px-[20px] gap-[8px] cursor-pointer" onClick={handleClick}>
            <img src={`/icons/${app.icon}`} alt={app.name} className="w-[28px] h-[28px]" />
            <div className="flex flex-col justify-center">
                <span className="text-sm font-bold leading-none text-[#424243]">{app.name}</span>
                <span className="text-xs leading-none text-[#757678]">{app.domains.length > 0 ? extractDomain(app.domains[0]) : 'Domain not available'}</span>
            </div>
        </div>
    )
};

const AppsPage = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [appsData, setAppsData] = useState<any[]>([]);
    const [optionsOpen, setOptionsOpen] = useState(true);
    const [hasSelected, setHasSelected] = useState(false);

    const handleSelectApp = useCallback((name: string) => {
        setSearch(name);
        setOptionsOpen(false);
        setHasSelected(true);
    }, []);


    const getAppsData = useCallback(async () => {
        if (!search.trim()) {
            setAppsData([]);
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3001/websites/search?name=${search}`);
            setAppsData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setAppsData([]);
        } finally {
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        if (!hasSelected) {
            setOptionsOpen(true);
        }
        setHasSelected(false);
        getAppsData();
    }, [search, getAppsData]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-scroll pb-[10px]">
            <div className="w-[436px] h-[112px] bg-white flex-col flex rounded-[12px] gap-[24px] custom-shadow">
                <div className="relative flex flex-col justify-center h-full px-[24px] gap-[4px]">
                    <span className="text-[#424243] text-xs flex gap-[4px] font-semibold">
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
                            className="h-[40px] p-[12px] border-[1px] text-sm text-[#424243] border-[#87898A] rounded-[4px] hover:border-[#1789FA] focus:outline-none focus:border-[2px] focus:border-[#1789FA] w-full"
                            placeholder="Enter a login URL or app name"
                        />

                        {/* results container or loading */}
                        {search && optionsOpen && (
                            <div className="absolute top-[40px] left-0 w-[306px] min-h-[48px] max-h-[250px] overflow-y-auto bg-white text-xs rounded-md shadow-lg flex flex-col justify-center items-center ">
                                {loading ? (
                                    <LoadingDots />
                                ) : appsData.length > 0 ? (
                                    appsData.map((app) => <AppItem key={app.id} app={app} onSelect={handleSelectApp} />
                                    )
                                ) : (
                                    <div className="text-[#BEBFC2]">No results found</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsPage;
