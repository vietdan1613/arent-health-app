const ThreeQuarterCircleSvg = ({ date = "05/21", percent = "75%", size = 181, strokeWidth = 3 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const arcLength = (3 / 4) * circumference;

    return (
        <div style={{ width: size, height: size }}
            className="relative "
        >
            <svg width={size} height={size} className="rotate-45">
                <defs>
                    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F97316" floodOpacity="0.5" />
                    </filter>
                </defs>

                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${arcLength} ${circumference}`}
                    strokeLinecap="round"
                    transform={`rotate(-150 ${size / 2} ${size / 2})`}
                    filter="url(#dropShadow)"
                />
            </svg>

            {/* Text block */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg py-1 rounded-full"
                    style={{
                        textShadow: "0 2px 6px rgba(255, 115, 0, 0.6)", // orange glow
                    }}>
                    {date} <span className="ml-1 text-2xl">{percent}</span>
                </div>
            </div>
        </div>
    );
};

export default ThreeQuarterCircleSvg;
