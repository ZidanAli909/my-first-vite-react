import Navbar from "../components/common/Navbar";
import "./Portofolio.css";
// Logo
import img_html from "../../public/svg/logo/html.svg";
import img_css from "../../public/svg/logo/css.svg";
import img_js from "../../public/svg/logo/javascript.svg";
import img_react from "../../public/svg/logo/react.svg";
import img_nodejs from "../../public/svg/logo/node-js.svg";
import img_express from "../../public/svg/logo/express-js.svg";
import img_bootstrap from "../../public/svg/logo/bootstrap.svg";
import img_tailwind from "../../public/svg/logo/tailwind-css.svg";
import img_mysql from "../../public/svg/logo/mysql.svg";
import img_c from "../../public/svg/logo/c.svg";
import img_cpp from "../../public/svg/logo/cpp.svg";
import img_java from "../../public/svg/logo/java.svg";
import img_android from "../../public/svg/logo/android-studio.svg";
import img_kotlin from "../../public/svg/logo/kotlin.svg";
// Logo (End)

function Portofolio_stacks() {
  return (
    <div class="bg-gray-700 w-full text-white">
      <div class="p-8">
        <div class="flex justify-center items-center mb-4">
          <h1 class="text-3xl font-semibold">Tech Stacks</h1>
          <span
            class="material-symbols-outlined ml-4"
            style={{ fontSize: "48px" }}
          >
            stacks
          </span>
        </div>
        <p class="text-center mb-2">
          Check out my current stacks, plus this animated icons!
        </p>
        <p class="text-center italic text-sm">
          PS: Keep in mind that these may have different proficiencies.
        </p>
      </div>
      <div class="techstacks_logo_contain w-3xl max-md:w-full">
        <img
          class="techstacks_logo"
          src={img_html}
          alt="Hypertext Markup Language"
        />
        <img
          class="techstacks_logo"
          src={img_css}
          alt="Cascading Style Sheets"
        />
        <img class="techstacks_logo" src={img_js} alt="JavaScript" />
        <img class="techstacks_logo" src={img_react} alt="React" />
        <img class="techstacks_logo" src={img_nodejs} alt="node.js" />
        <img class="techstacks_logo" src={img_express} alt="express.js" />
        <img class="techstacks_logo" src={img_bootstrap} alt="Bootstrap" />
        <img class="techstacks_logo" src={img_tailwind} alt="Tailwind CSS" />
        <img class="techstacks_logo" src={img_mysql} alt="MySQL" />
        <img class="techstacks_logo" src={img_c} alt="C" />
        <img class="techstacks_logo" src={img_cpp} alt="C++" />
        <img class="techstacks_logo" src={img_android} alt="Android Studio" />
        <img class="techstacks_logo" src={img_kotlin} alt="Kotlin" />
        <img class="techstacks_logo" src={img_java} alt="Java" />
      </div>
    </div>
  );
}

function Portofolio_list(portofolio) {
  return (
    <section class="card card_portofolio w-4xl max-lg:w-full m-4">
      <h1 class="text-2xl font-semibold">{portofolio.title}</h1>
      <div class="flex flex-row">
        <div>Test</div>
        <div>
          <p class="italic">{portofolio.createdAt}</p>
          <p>{portofolio.description}</p>
          <button class="button_portofolio_link">Read More</button>
        </div>
      </div>
    </section>
  );
}

// Main Page Components

function Portofolio() {
  return (
    <body>
      <Navbar />
      <h1 class="text-6xl text-center m-8">Portofolio</h1>
      <p class="text-center mb-8">
        See the projects that I've been working around.
      </p>
      <Portofolio_list
        title="Project 1"
        createdAt="2023-01-01"
        description="Lorem ipsum dolor sit amet."
      />
      <Portofolio_stacks />
    </body>
  );
}

export default Portofolio;
