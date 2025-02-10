interface AppItemProps {
    app: { id: string; name: string; icon: string; domains: string[] };
    onSelect: (name: string) => void;
}

const AppItem = ({ app, onSelect }: AppItemProps) => {
    const extractDomain = (url: string): string => {
        if (!url || typeof url !== "string") return "";
        const match = url.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        return match ? match[1].replace(/^www\./, "") : url;
    };

    return (
        <div
            className="flex items-center w-full h-[48px] hover:bg-[#F2F9FF] py-[10px] px-[20px] gap-[8px] cursor-pointer"
            onClick={() => onSelect(app.name)}
        >
            <img src={`/icons/${app.icon}`} alt={app.name} className="w-[28px] h-[28px] bg-gray-200 rounded" />
            <div className="flex flex-col justify-center">
                <span className="text-sm font-bold leading-none text-[#424243]">{app.name}</span>
                <span className="text-xs leading-none text-[#757678]">{extractDomain(app.domains[0])}</span>
            </div>
        </div>
    );
};

export default AppItem;
