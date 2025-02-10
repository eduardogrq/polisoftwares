import { useState } from "react";
import AppItem from "./AppItem";
import LoadingDots from "./LoadingDots";

interface AppData {
    domains: string[];
    icon: string;
    id: string;
    name: string;
}

interface SearchInputProps {
    search: string;
    setSearch: (value: string) => void;
    appsData: AppData[];
    loading: boolean;
    optionsOpen: boolean;
    setOptionsOpen: (value: boolean) => void;
}

const SearchInput = ({ search, setSearch, appsData, loading, optionsOpen, setOptionsOpen }: SearchInputProps) => {
    const [hasSelected, setHasSelected] = useState(false);

    const handleSelectApp = (name: string) => {
        setSearch(name);
        setOptionsOpen(false);
        setHasSelected(true);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setHasSelected(false);
                    setOptionsOpen(true);
                }}
                className={`h-[40px] p-[12px] border text-sm text-[#424243] rounded-[4px] hover:border-[#1789FA] focus:outline-none w-full
                    ${hasSelected ? 'border-2 border-[#1789FA]' : 'border border-[#87898A] focus:border-2 focus:border-[#1789FA]'}
                `}
                placeholder="Enter a login URL or app name"
            />

            {search && optionsOpen && (
                <div
                    className={`absolute top-[40px] left-0 w-[306px] min-h-[48px] max-h-[250px] overflow-y-auto bg-white text-xs rounded-md shadow-lg flex flex-col items-center
                    ${appsData.length === 0 || loading ? "justify-center" : ""}`}
                >
                    {loading ? (
                        <LoadingDots />
                    ) : appsData.length > 0 ? (
                        appsData.map((app) => <AppItem key={app.id} app={app} onSelect={handleSelectApp} />)
                    ) : (
                        <div className="text-[#BEBFC2]">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
