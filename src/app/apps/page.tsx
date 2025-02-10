"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import SearchInput from "./components/SearchInput";
import SearchIcon from "./../icons/SearchIcon";

interface AppData {
    domains: string[];
    icon: string;
    id: string;
    name: string;
}

const AppsPage = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [appsData, setAppsData] = useState<AppData[]>([]);
    const [optionsOpen, setOptionsOpen] = useState(true);

    const getAppsData = useCallback(async () => {
        if (!search.trim()) {
            setAppsData([]);
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get<AppData[]>(`http://localhost:3001/websites/search?name=${search}`);
            setAppsData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setAppsData([]);
        } finally {
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        getAppsData();
    }, [search, getAppsData]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-scroll pb-[10px]">
            <div className="w-[436px] h-[112px] bg-white flex-col flex rounded-[12px] gap-[24px] custom-shadow">
                <div className="relative flex flex-col justify-center h-full px-[24px] gap-[4px]">
                    <span className="text-[#424243] text-xs flex gap-[4px] font-semibold">
                        Website
                        <SearchIcon />

                    </span>
                    <SearchInput search={search} setSearch={setSearch} appsData={appsData} loading={loading} optionsOpen={optionsOpen} setOptionsOpen={setOptionsOpen} />
                </div>
            </div>
        </div>
    );
};

export default AppsPage;
