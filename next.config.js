module.exports = {
    exportPathMap: () => ({
        "/": { page: "/" },
        "/resume": { page: "/resume" },
        "/dominos": {
            page: "/work",
            query: { id: "dominos" }
        },
        "/studyblue": {
            page: "/work",
            query: { id: "studyblue" }
        },
        "/vouch": {
            page: "/work",
            query: { id: "vouch" }
        }
    })
};
