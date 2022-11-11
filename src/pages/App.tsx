import type { Component } from "solid-js";
import { about, contact, education, events, interests, projects, technology, images } from "../data";
import { For, onMount, Show } from "solid-js";
import { setState, state } from "../lib/store";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";

const flag = {
  en: "🇺🇸",
  th: "🇹🇭",
}

const App: Component = (i18n: any) => {
  const [t, { changeLanguage }] = useTransContext();
  return (
    <main>
      <div class="absolute top-0 right-0 p-6 flex flex-row gap-2">
        <p class="emotes text-xl cursor-pointer" onClick={() => { setState({ ...state, lang: state.lang === "th" ? "en" : "th" }); changeLanguage(state.lang) }}>
          {flag[state.lang]}
        </p>
      </div>
      <div class="absolute top-0 left-0 p-6 flex flex-row gap-2">
        <a href="https://webring.wonderful.software#tinarskii.com" title="วงแหวนเว็บ">
          <img
            alt="วงแหวนเว็บ"
            width="32"
            height="32"
            class="hover:scale-110 duration-200"
            src="/webring.svg"
          />
        </a>
        <a href="https://creatorsgarten.org/ring" title="Creatorsgarten Ring">
          <img
            alt="Creatorsgarten Ring"
            width="32"
            height="32"
            class="hover:scale-110 duration-200"
            src="/ring-thin.svg"
          />
        </a>
      </div>
      <section
        class="ac flex flex-row w-full overflow-x-scroll snap-x gap-0 flex-nowrap rounded-2xl cursor-pointer"
        onClick={() => window.open("/gallery")}
      >
         <For each={images}>{(img) =>
           <div class="item box-content snap-start w-full h-full relative flex flex-none">
             <img src={img} class="object-cover w-full h-[65vh] " />
           </div>
         }
         </For>
      </section>
      <section class={'flex flex-col items-center gap-2'}>
        <h1 class={'text-6xl text-center'}><Trans key="name"></Trans></h1>
        <h2 class={'text-2xl text-center'}><Trans key="nick"></Trans></h2>
      </section>
      <article class={'text-lg lg:text-left text-justify'} data-i18n="[html]desc">
        <Trans key="desc" options={{ interpolation: { escapeValue: false }}}></Trans>
      </article>
      <div class={'grid lg:grid-cols-2 grid-cols-1 gap-8'}>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'personal_info'} onClick={() => location.href = "#personal_info"}>🎈<Trans key="pinfo.title" /></header>
          <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b><Trans key="pinfo.name" /></b></p>               {about.name}
              <p><b><Trans key="pinfo.nick" /></b></p>              {about.nick}
              <p><b><Trans key="pinfo.aka" /></b></p>                {about.aka}
              <p><b><Trans key="pinfo.dob" /></b></p>                {(new Date(about.dob)).toLocaleDateString('ja-JP')}
              <p><b><Trans key="pinfo.age" /></b></p>                {about.age}
              <p><b><Trans key="pinfo.job" /></b></p>                {about.jobs}
              <p><b><Trans key="pinfo.lang" /></b></p>               {about.language}
            </div>
          </div>
        </section>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'connect'} onClick={() => location.href = "#connect"}>🔗Connect with me</header>
          <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <For each={contact}>{(_, idx) =>
                <Show when={idx() % 2 === 0}>
                  <p><b>{contact[Number(idx())]}</b></p> <a target={'_blank'} href={`${contact[Number(idx())] === "Email" ? "mailto:" : contact[Number(idx())] === "Telephone" ? "tel:" : "//"}${contact[Number(idx()) + 1]}`}>{(contact[Number(idx()) + 1]).split("/").pop()}</a>
                </Show>
              }</For>
            </div>
          </div>
        </section>
      </div>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'education'} onClick={() => location.href = "#education"}>🎓Education</header>
        <div class={'flex flex-row gap-6'}>
          <For each={education}>{(edu) =>
            <p>
              <b>{edu.name}</b> ({edu.level}) <br />
              {edu.prog}, <br /> GPAX: {edu.grade} <br />
              Graduate: {edu.grad || "TBD"} <br />
              {edu.cert ? <span>View Certificate:
                <span class="inline-flex flex-row gap-2 ml-2">
                  {<For each={edu.cert}>{(cert, idx) =>
                <a href={cert.path}>{cert.desc}</a>
                  }</For>}</span></span> : null}
            </p>
          }</For>
        </div>
      </section>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'events'} onClick={() => location.href = "#events"}>✨Events</header>
        <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
          <For each={events}>{(evt) =>
            <section
              class={'bg-white/10 rounded-lg bg-center hoverable'}
              style={{ "background-image": `url(${evt.img})` }}
            >
              <div class={`w-full h-full gap-4 flex flex-col justify-center rounded-lg ${evt.img ? 'bg-black/75' : ''} p-6`}>
                <div class={'flex flex-col items-center justify-center'}>
                  <p class={'text-xl'}><b>{evt.name}</b></p>
                  <p>(Organized by {evt.org})</p>
                </div>
                <p>as a {evt.roles}</p>
                <p>{evt.info}</p>
                <div class={'flex flex-col items-center justify-center'}>
                  <Show when={evt.award}><p>Awards: {evt.award}</p></Show>
                  <Show when={evt.links}><p>Links: <a href={evt.links}>Watch</a></p></Show>
                </div>
              </div>
            </section>
          }</For>
        </div>
      </section>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'projects'} onClick={() => location.href = "#projects"}>🎈Projects</header>
        <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
          <For each={projects}>{(project) =>
            <section
              class={`bg-white/10 rounded-xl bg-center bg-no-repeat 
              ${project.full ? 'bg-cover' : 'bg-contain'} ${project.img ? 'bg-center' : ''}
              hoverable
              `}
              style={{ "background-image": `url(${project.img})` }}
            >
              <div class={`w-full h-full gap-4 flex flex-col justify-center rounded-lg bg-black/75 p-6 text-center items-center juistify-center`}>
                <p class={'text-xl'}><b>{project.name}</b> by {project.from}</p>
                {project.info}
                <div class={'flex flex-row gap-2'}>
                  <button class={'btn btn-sm btn-primary'} onClick={() => window.open("//" + project.link)}>Visit Website</button>
                  <button class={'btn btn-sm btn-ghost'} onClick={() => window.open("//" + project.gh)}>View Repository</button>
                </div>
              </div>
            </section>
          }</For>
        </div>
      </section>
      <div class={'grid lg:grid-cols-2 grid-cols-1 gap-8'}>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'technology'} onClick={() => location.href = "#technology"}>💻Technology</header>
          <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Programming Languages</b></p> {technology.lang.join(", ")}
              <p><b>Frameworks</b></p> {technology.framework.join(", ")}
              <p><b>IDEs</b></p> {technology.ides.join(", ")}
              <p><b>Tools</b></p> {technology.tools.join(", ")}
              <p><b>Other</b></p> {technology.misc.join(", ")}
            </div>
          </div>
        </section>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl lg:text-left text-center cursor-pointer'} id={'interests'} onClick={() => location.href = "#interests"}>💍Interests</header>
          <div class={'grid lg:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Subject</b></p> {interests.subject.join(", ")}
              <p><b>Games</b></p> {interests.games.join(", ")}
              <p><b>Music</b></p> {interests.music.join(", ")}
            </div>
          </div>
        </section>
      </div>
      <div class="flex w-full items-center justify-center">
        <p class="text-gray-400 text-center">
          Copyright © 2022 Tinnaphat Somsang <br />
          All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default App;