import { Component, For } from "solid-js";
import { gallery } from "../data";

export const GalleryOfMyLife: Component = (i18n: any) => {
  return (
    <main>
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-2">
          <h1 class="text-6xl text-center">Gallery of Tinarskii</h1>
          <p class="text-sm text-center text-gray-400">
            Please do not redistribute images that contain other people's faces except mine,
            and do not use them for commercial purposes.
          </p>
        </div>
        <For each={gallery}>
          {(collection) => (
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-1">
                <h1
                  class="text-4xl text-left cursor-pointer"
                  id={collection.name.split(" ").join("-").toLowerCase()}
                  onClick={() => location.href = `#${collection.name.split(" ").join("-").toLowerCase()}`}
                >
                  {collection.name} ({collection.images.length} images)
                </h1>
                <p class="text-base text-left text-gray-400">By - {collection.author}</p>
              </div>
              <div class="inline-flex gap-2 overflow-x-scroll h-[100vh] rounded-lg snap-x snap-mandatory">
                <For each={collection.images}>
                  {(img) => (
                    <img src={img} onClick={() => window.open(img)} class="object-cover snap-center cursor-pointer w-max flex-[0_0_auto]" />
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </main>
  )
}