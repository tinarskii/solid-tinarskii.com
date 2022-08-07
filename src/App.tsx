import type { Component } from "solid-js";
import { about, contact, education, events, interests, projects, technology } from "./data";
import { For, Show } from "solid-js";
import { setState, state } from "./lib/store";
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
      <div class="carousel w-full rounded-lg">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="party_tin.webp" class="object-cover w-full h-[65vh]" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="tin.webp" class="object-cover object-top w-full h-[65vh]" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="m12p.webp" class="object-cover w-full h-[65vh]" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="tpfz.webp" class="object-cover object-top w-full h-[65vh]" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <section class={'flex flex-col items-center gap-2'}>
        <h1 class={'text-6xl text-center'}><Trans key="name"></Trans></h1>
        <h2 class={'text-2xl text-center'}><Trans key="nick"></Trans></h2>
      </section>
      <article class={'text-lg md:text-left text-justify'} data-i18n="[html]desc">
        <Trans key="desc" options={{ interpolation: { escapeValue: false }}}></Trans>
      </article>
      <div class={'grid md:grid-cols-2 grid-cols-1 gap-8'}>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'personal_info'} onClick={() => location.href = "#personal_info"}>🎈Personal Information</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Name</b></p>                  {about.name}
              <p><b>Nickname</b></p>              {about.nick}
              <p><b>Also known as</b></p>         {about.aka}
              <p><b>Date of Birth</b></p>         {(new Date(about.dob)).toLocaleDateString('ja-JP')}
              <p><b>Age</b></p>                   {about.age}
              <p><b>Height</b></p>                {about.height}
              <p><b>Weight</b></p>                {about.weight}
              <p><b>Status</b></p>                {about.status}
              <p><b>Occupations</b></p>           {about.jobs}
              <p><b>Language</b></p>              {about.language}
            </div>
          </div>
        </section>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'connect'} onClick={() => location.href = "#connect"}>🔗Connect with me</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
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
        <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'education'} onClick={() => location.href = "#education"}>🎓Education</header>
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
        <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'events'} onClick={() => location.href = "#events"}>✨Events</header>
        <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
          <For each={events}>{(evt) =>
            <p>
              <b>{evt.name}</b> <br /> by {evt.org} <br /> as a {evt.roles} <br /><br />
              {evt.info}
              <br /><br />
              Awards: {evt.award} <br />
              Links: <a href={evt.links}>Watch</a>
            </p>
          }</For>
        </div>
      </section>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'projects'} onClick={() => location.href = "#projects"}>🎈Projects</header>
        <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
          <For each={projects}>{(project) =>
            <div class={'p-6 bg-white/10 gap-4 flex flex-col justify-center items-center rounded-lg'}>
              <p><b>{project.name}</b> by {project.from}</p>
              {project.info}
              <div class={'flex flex-row gap-2'}>
                <button class={'btn btn-primary'} onClick={() => window.open("//" + project.link)}>Visit Website</button>
                <button class={'btn btn-primary btn-outline'} onClick={() => window.open("//" + project.gh)}>View Repository</button>
              </div>
            </div>
          }</For>
        </div>
      </section>
      <div class={'grid md:grid-cols-2 grid-cols-1 gap-8'}>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'technology'} onClick={() => location.href = "#technology"}>💻Technology</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
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
          <header class={'text-4xl md:text-left text-center cursor-pointer'} id={'interests'} onClick={() => location.href = "#interests"}>💍Interests</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Subject</b></p> {interests.subject.join(", ")}
              <p><b>Games</b></p> {interests.games.join(", ")}
              <p><b>Music</b></p> {interests.music.join(", ")}
            </div>
          </div>
        </section>
      </div>
      <div class="flex w-full items-center justify-center">
        <a href="https://github.com/mulforma" title="The Mulforma Creators">
          <img
            alt="The Mulforma Creators"
            width="32"
            height="32"
            class="hover:scale-110 duration-200"
            src="/Mulforma.svg"
          />
        </a>
      </div>
    </main>
  );
};

export default App;