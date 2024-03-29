/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import RoutesPage from "./Routes";
import { TransProvider } from '@mbarzda/solid-i18next';
import { state } from "./lib/store";
import { Router } from "@solidjs/router";

const resources = {
  th: {
    translation: {
      "name": "ติณณภัทร์ \"ติณ\" สมแสง",
      "nick": "ทินนาร์สกี้",
      "desc": `ดีจร้าาาาาา กระผม เด็กชายติณณภัทร์ สมแสง นักพัฒนาเว็บไซต์จากประเทศกะลาแลนด์ ตอนนี้เป็นนักเรียนอยู่ที่โรงเรียนอัสสัมชัญสมุทรปราการอยู่เลอ (ศิษย์เจ๊ออย) กำลังเรียนสายวิทย์-คณิตที่ไม่เข้าใจห่าอะไรเลย แถมยังได้ประดิษฐ๋์เว็บไซต์ที่ไม่น่าสนใจและไม่เป็นที่นิยม เช่น เว็บว่่องแล่ง เป็นต้น (ก็ดังมาซักพักแล้ว แต่ไม่แน่ใจว่าตอนนี้ยังดังอยู่หรือเปล่า) ล้อเล่นหน่า บางอันมันก็ดังอยู่ (ซึ่งส่วนใหญ่เป็นผู้ร่วมให้ข้อมูล) เช่น Learn Manoonchai และ That Paper Game ของพี่ @narze หน่ะ... หืม? อะไร? สนใจผมหรอ งุ้ย ขอบคุณมาก แต่รบกวนบริจาคมุมซ้ายล่างให้ผมด้วย จะเอาไปรับประทานก๋วยเตี๋ยวร้านลุง`,
      "pinfo": {
        "title": "ข้อมูลส่วนตัว",
        "name": "ชื่อ",
        "nick": "ชื่อเล่น",
        "aka": "รู้จักในนาม",
        "dob": "วันเกิด",
        "age": "อายุ",
        "job": "อาชีพ",
      }
    }
  },
  en: {
    translation: {
      "name": "Tinnaphat \"Tin\" Somsang",
      "nick": "Tinarskii",
      "desc": "Hi there! I'm Tinnaphat Somsang, a website developer from Thailand. Despite that, I'm still a student at Assumption College Samutprakarn, learning science and math stuff. I also made some interesting and unpopular website like Wrong-Lang Web Application for example. (Well it was popular for some time, but I'm not sure if it's still popular now.) Don't get me wrong, some of it got popular (which I am mostly a contributor to), such as Learn Manoonchai and That Paper Game, both of them are by @narze tho. Oh what, are you interested in me? Thank you! I would be very appreciated if you donate me.",
      "pinfo": {
        "title": "Personal Information",
        "name": "Name",
        "nick": "Nickname",
        "aka": "Also Known As",
        "dob": "Date of Birth",
        "age": "Age",
        "job": "Occupations",
      }
    }
  }
}

render(() =>
  <Router>
    <TransProvider options={{ resources }} lng={state.lang} children={<RoutesPage />} />
  </Router>
  , document.getElementById("root") as HTMLElement);
