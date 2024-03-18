export const getColorInfo = (color?: string) => {
    let bg_class = "";
    let fare = " ₹4.5";
    let border_class = "";

    switch (color) {
        case "red":
            bg_class = "bg-red-800";
            border_class = "border-red-800";
            fare = " ₹9";
            break;
        case "blue":
            bg_class = "bg-blue-800";
            border_class = "border-blue-800";
            fare = " ₹9";
            break;
        case "sky":
            bg_class = "bg-sky-600";
            border_class = "border-sky-600";
            fare = " ₹9";
            break;
        case "orange":
            bg_class = "bg-orange-600";
            border_class = "border-orange-600";
            break;
        default:
            bg_class = "bg-green-600";
            border_class = "border-green-600";
    }

    return { bg_class, border_class, fare };
};
