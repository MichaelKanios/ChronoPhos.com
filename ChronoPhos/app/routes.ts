import { type RouteConfig, index, route } from "@react-router/dev/routes";



export default [
    index("routes/home/home.tsx"),
    route("gear","./routes/gear/gear.tsx"),
    route("photos","./routes/photos/photos.tsx"),
    route("terms","./routes/terms/terms.tsx"),
    route("videos","./routes/videos/videos.tsx"),
    route("who","./routes/who/who.tsx"),
]satisfies RouteConfig;
