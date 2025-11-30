import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("gear", "./routes/gear/gear.tsx"),
  route("albums", "./routes/albums/albums.tsx"),
  route("photos", "./routes/photos/photos.tsx"),
  route("terms", "./routes/terms/terms.tsx"),
  route("who", "./routes/who/who.tsx"),
  route("lessons", "./routes/lessons/lessons.tsx"),
  route("*", "./routes/error/notfound.tsx"),
] satisfies RouteConfig;
