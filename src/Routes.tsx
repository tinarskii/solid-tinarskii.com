import { Routes, Route } from "@solidjs/router"

import App from "./pages/App"
import { GalleryOfMyLife } from "./pages/GalleryOfMyLife"

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" component={App} />
      <Route path="/gallery" component={GalleryOfMyLife} />
    </Routes>
  )
}