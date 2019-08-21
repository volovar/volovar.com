module.exports = {
    exportPathMap: () => ({
        "/": { page: "/" },
        "/resume": { page: "/resume" },
        "/dominos": {
            page: "/[work]",
            query: { name: "dominos" }
        },
        "/studyblue": {
            page: "/[work]",
            query: { name: "studyblue" }
        },
        "/vouch": {
            page: "/[work]",
            query: { name: "vouch" }
        }
    })
};
