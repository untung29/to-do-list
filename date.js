exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("id-ID", options);
};