const Router = require("koa-router");
const router = new Router();
const { getRoutes, wrongRoute } = require("./controllers/events.controllers");

if(router.get) {
    // router.get("/src/pdf-test.pdf", getEvents);
    router.get("/src/:path", getRoutes);
} else {

}


// router.post("/", addEvent);

module.exports = router;