import type { Component } from "solid-js";
import { about, education, events, interests, projects, technology } from "./data";
import { For } from "solid-js";

const App: Component = () => {
  return (
    <main>
      <img src="/party_tin.jpg" alt="tin" class={'rounded-2xl w-[45vw] h-[45vh] object-cover'} />
      <section class={'flex flex-col items-center gap-2'}>
        <h1 class={'text-6xl'}>Tinnaphat Somsang</h1>
        <h2 class={'text-2xl'}>"Tinarskii"</h2>
      </section>
      <article class={'text-lg'}>
        Hi, My name is Tinnaphat Somsang. Or you can call me by my nickname, Tin!
        I also knew on the internet as Tinarskii or Tin-Narzeky.
        Currently, I am a student learning at Assumption College Samutprakarn School in i-Science classroom (Math & Science).
        I surely can do web developing and some of the software development.
        I'm interest in many things other than computer, such as photography or being a musician.
        Let's see what I did!
      </article>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl text-left'} id={'education'}>🎓Education</header>
        <div class={'flex flex-row gap-6'}>
          <For each={education}>{(edu) =>
            <p>
              <b>{edu.name}</b> ({edu.level}) <br />
              {edu.prog}, <br /> GPA: {edu.grade} <br />
              Graduate: {edu.grad || "Still learning"}
            </p>
          }</For>
        </div>
      </section>
      <section class={'flex flex-col w-full gap-4'}>
        <header class={'text-4xl text-left'} id={'events'}>✨Events</header>
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
        <header class={'text-4xl text-left'} id={'projects'}>🎈Projects</header>
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
          <header class={'text-4xl text-left'} id={'technology'}>💻Technology</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Programming Languages</b></p> {technology.lang.join(", ")}
              <p><b>Frameworks</b></p> {technology.framework.join(", ")}
              <p><b>IDEs</b></p> {technology.ides.join(", ")}
              <p><b>Tools</b></p> {technology.tools.join(", ")}
              <p><b>Misc.</b></p> {technology.misc.join(", ")}
            </div>
          </div>
        </section>
        <section class={'flex flex-col w-full gap-4'}>
          <header class={'text-4xl text-left'} id={'interest'}>💍Interests</header>
          <div class={'grid md:grid-cols-2 grid-cols-1 gap-6'}>
            <div class={'grid grid-cols-2 gap-6 place-items-left items-center'}>
              <p><b>Subject</b></p> {interests.subject.join(", ")}
              <p><b>Games</b></p> {interests.games.join(", ")}
              <p><b>Music</b></p> {interests.music.join(", ")}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
