import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.css']
})
export class TriesComponent implements OnInit {

  projects = [{
    name: "Ofaloo",
    description: "Real estate website",
    image: "/assets/images/ofaloo.png",
    link: "https://ofaloo.netlify.app/"
  },
  {
    name: "OfalooCMS",
    description: "Real estate website CMS",
    image: "/assets/images/ofaloocms.png",
    link: "https://ofalooagent.netlify.app/"
  },
              {
    name: "Kylie Cosmetic Shop",
    description: "Homepage of Kylie Jenner Cosmetic website",
    image: "/assets/images/kcs.png",
    link: "https://kcshops.netlify.app/"
  },
              {
    name: "Pincasse",
    description: "Pincasse is an attempt of website for coding ressources(all sort)",
    image: "/assets/images/pincasse.png",
    link: "https://pincasse.netlify.app/home/"
  },
  {
    name: "Average",
    description: "Website for average simulation",
    image: "/assets/images/average.png",
    link: "https://mes-moyennes.netlify.app/"
  },
  {
    name: "Djidji",
    description: "My first website project",
    image: "/assets/images/djidji.png",
    link: "https://djidjii.netlify.app/"
  },
  {
    name: "My other portfolio",
    description: "Portfolio made with Nuxt.js",
    image: "/assets/images/nuxtportfolio.png",
    link: "https://sopegue.netlify.app/"
  },
  {
    name: "Tagsket",
    description: "Socials networks tag used stats (still at the idea step)",
    image: "/assets/images/tagsket.png",
    link: "https://tagsket.netlify.app/"
  },
  {
    name: "Waloo",
    description: "E-commerce website",
    image: "/assets/images/waloo.png",
    link: "https://waloocom.netlify.app/"
  }]

  index = 0

  length = [0]

  constructor() {
    this.length = this.projects.map((x, i) => i);
  }

  ngOnInit(): void {
  }

  setProject(val: number) {
    this.index = this.projects[val] ? val : 0
  }

  increment(val: number) {
    val++
    this.setProject(val)
  }
  decrement(val: number) {
    val--
    if (val === -1)
      val = this.length.length - 1
    this.setProject(val)
  }

}
