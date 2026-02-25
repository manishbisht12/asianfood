"use client";

const ShimmerCard = ({ variant = "home" }) => {
    const isMenu = variant === "menu";

    return (
        <div
            className={`relative overflow-hidden bg-white ${isMenu
                ? "border border-gray-200 rounded-2xl p-5 flex flex-col h-full"
                : "border-2 border-gray-200 rounded-xl p-4"
                }`}
        >
            {/* Heart icon placeholder */}
            <div
                className={`absolute ${isMenu ? "top-7 right-7" : "top-4 right-4"
                    } w-5 h-5 rounded-full shimmer-bg`}
            />

            {/* Image placeholder */}
            <div
                className={`flex justify-center items-center ${isMenu ? "h-[200px] mb-4" : "h-[160px]"
                    }`}
            >
                <div
                    className={`${isMenu ? "w-[140px] h-[140px]" : "w-[120px] h-[120px]"
                        } rounded-2xl shimmer-bg`}
                />
            </div>

            {/* Title placeholder */}
            <div className="flex justify-center mt-4">
                <div className="h-5 w-3/5 rounded-md shimmer-bg" />
            </div>

            {/* Description placeholder */}
            <div className="space-y-2 mt-3 px-2">
                <div className="h-3 w-full rounded shimmer-bg" />
                <div className="h-3 w-4/5 mx-auto rounded shimmer-bg" />
                {isMenu && <div className="h-3 w-3/5 mx-auto rounded shimmer-bg" />}
            </div>

            {/* Price + button placeholder */}
            <div className="flex items-center justify-between mt-5 px-2">
                <div className="h-5 w-16 rounded-md shimmer-bg" />
                <div className="w-9 h-9 rounded-full shimmer-bg" />
            </div>
        </div>
    );
};

/**
 * Grid of shimmer cards for loading state
 * @param {number} count - Number of shimmer cards to show
 * @param {"home"|"menu"} variant - Which card style to mimic
 */
export const ShimmerGrid = ({ count = 8, variant = "home" }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <ShimmerCard key={i} variant={variant} />
            ))}
        </>
    );
};

export default ShimmerCard;
