# Digital Awards Page

A responsive digital awards page built with **React and Vite**.

This project was created as part of a **React development task** to build a simplified awards page featuring 2024 and 2025 awards, award-group filtering and interactive award cards.

I decided to take the brief a little further and build a more complete page experience, including the hero section, navigation, mobile menu, responsive layouts and additional interaction states.

The project uses **static/hardcoded data**, with no API, CMS or backend.

---

# Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [The Brief](#the-brief)
- [My Approach](#my-approach)
- [Technology Choices](#technology-choices)
- [Features](#features)
  - [Awards](#awards)
  - [Award Group Filtering](#award-group-filtering)
  - [Interactive Award Cards](#interactive-award-cards)
  - [Responsive Navigation](#responsive-navigation)
  - [Responsive Layout](#responsive-layout)
- [Design Decisions](#design-decisions)
  - [Cards vs Rows](#cards-vs-rows)
  - [Going Beyond the Brief](#going-beyond-the-brief)
  - [Hover Interaction](#hover-interaction)
  - [Responsive Design](#responsive-design)
  - [Visual Details](#visual-details)
- [UI Preview](#ui-preview)
  - [Desktop Hero](#desktop-hero)
  - [Desktop Awards](#desktop-awards)
  - [Expanded Award Card](#expanded-award-card)
  - [Multiple Expanded Cards](#multiple-expanded-cards)
  - [Award Group Filter](#award-group-filter)
  - [Mobile Hero](#mobile-hero)
  - [Mobile Awards](#mobile-awards)
  - [Mobile Award Filter](#mobile-award-filter)
  - [Mobile Navigation](#mobile-navigation)
- [Component Structure](#component-structure)
- [Components](#components)
  - [AwardsCard](#awardscard)
  - [AwardsFilter](#awardsfilter)
  - [AwardSelect](#awardselect)
  - [Heading](#heading)
  - [Hero](#hero)
  - [Menu](#menu)
  - [Dark Mode](#dark-mode)
  - [Footer](#footer)
- [Data and Filtering](#data-and-filtering)
- [HTML and CSS](#html-and-css)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Run the Development Server](#run-the-development-server)
- [Available Scripts](#available-scripts)
  - [Development](#development)
  - [Production Build](#production-build)
  - [Preview](#preview)
  - [Lint](#lint)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Original Brief](#original-brief)
- [Final Thoughts](#final-thoughts)
- [Author](#author)

---

# Live Demo

**Live Site:**  
https://wolf-digital.vercel.app/

**GitHub Repository:**  
https://github.com/SophiaMcGee20040472/WolfDigital.git

---

# Overview

This is a responsive digital awards page built with React.

The page displays six awards across **2024 and 2025**, with three award groups:

- Global Search Awards
- European Search Awards
- Digital Media Awards

Users can filter the awards by group and interact with individual award cards to reveal additional information.

The project was built from a visual reference supplied as part of the task, but I made my own decisions around component structure, layout, responsive behaviour, interactions and styling.

---

# The Brief

The task was to create a simplified awards page using React.

The requirements were:

- Include awards for **2024 and 2025**
- Show **3 awards per year**
- Show **6 awards in total**
- Add a filter by award group
- When a group is selected, show only that group across both years
- Recreate the hover interaction on award groups
- Use React
- Use hardcoded/static data
- No CMS or backend required
- Include a short README explaining how to run the project and what tools were used

The task was intentionally open enough to allow decisions around the implementation and visual design.

---

# My Approach

I got quite invested in this task.

I actually started with the **hero, menu and heading components** before moving onto the actual requirements of the task — the award cards, filtering and interactions.

I was aware that I wasn't specifically asked to build all of those additional sections.

However, I felt that to properly understand the feel of the page, I needed to build the surrounding structure first.

Rather than creating a standalone collection of six cards, I wanted to see how the awards section worked as part of a complete page.

So I built:

- The hero
- Desktop navigation
- Mobile navigation
- Main heading
- Awards cards
- Filtering
- Award selection
- Expanded card states
- Responsive layouts

Once I got into it, I ended up spending considerably longer on the task than I originally intended.

Part of that was because I **missed coding**.

I wanted to use the task not only to demonstrate that I could complete the requirements, but also to make something that I would personally enjoy building and be happy to put my name to.

I definitely went into a bit of a **hyperfocus** with it. There was always another detail I wanted to tweak, another responsive state I wanted to check, or another interaction I wanted to improve.

So although I probably spent more time on this than the brief required, I also got much more out of the task by treating it as an opportunity to properly get back into coding.

---

# Technology Choices

The brief specifically required **React**, but didn't require a particular CSS framework or UI library.

I chose:

- **React 19**
- **Vite**
- **Vanilla CSS**
- **ESLint**

I deliberately decided **not** to use Tailwind CSS or a component library.

There are definitely approaches that would have allowed me to build this faster. Tailwind, Material UI or Chakra UI would have made certain parts of the styling and responsive behaviour much quicker to implement.

However, I didn't want to go too far beyond the requirements of the task by introducing a UI framework when it wasn't necessary.

I wanted to demonstrate that I could build the layouts and interactions myself using standard CSS.

If I were building this as a personal production project rather than completing this particular brief, I would probably make different choices.

I'd be more likely to use:

- React + TypeScript
- Next.js
- Material UI or Chakra UI
- Potentially a more structured design system

For this task, however, I felt that **React + Vite + vanilla CSS** was a good balance between keeping the project lightweight and demonstrating my own frontend skills.

---

# Features

## Awards

The application contains six award entries:

- Three from 2025
- Three from 2024

The awards are split across three award groups.

---

## Award Group Filtering

The user can filter the awards by group:

- All Awards
- Global Search Awards
- European Search Awards
- Digital Media Awards

Selecting a group displays that group across both years.

The filtering is handled using React state and the static award data.

---

## Interactive Award Cards

The award cards have interactive states.

Users can expand an award group to reveal additional award categories.

The card changes visually when interacted with, allowing the user to understand that the item is interactive.

<img width="936" height="404" alt="image" src="https://github.com/user-attachments/assets/4d6c5d18-4733-4dd4-89bf-65d00bd1def9" />

<img width="940" height="409" alt="image" src="https://github.com/user-attachments/assets/ed00ebd3-310c-449e-8405-5a2be4b9d2b1" />

<img width="939" height="604" alt="image" src="https://github.com/user-attachments/assets/5ff9f636-ef1b-4662-95ee-22d6848e26f8" />


---

## Responsive Navigation

The desktop navigation changes into a mobile menu at smaller screen sizes.

The mobile menu includes:

- Services
- Work
- About Us
- Insights
- Careers
- Contact Us

<img width="1351" height="436" alt="image" src="https://github.com/user-attachments/assets/1773e734-b0d6-4548-a864-4350c44e9082" />

<img width="288" height="513" alt="image" src="https://github.com/user-attachments/assets/8ed957dd-67ff-48c2-bce5-2cde2f5b354c" />

<img width="288" height="512" alt="image" src="https://github.com/user-attachments/assets/6b3a73f0-cd82-4232-8399-c0a132ddbd0d" />




---

## Responsive Layout

The page adapts between desktop and mobile layouts.

This includes:

- Hero
- Navigation
- Typography
- Award cards
- Filtering
- Spacing
- Menu behaviour

---

# Design Decisions

## Cards vs Rows

One of the decisions I spent the most time thinking about was whether the awards should be displayed as **cards or rows**.

I was genuinely in two minds about this.

A row-based layout would have been a very natural choice for an awards directory and could have allowed more information to be displayed horizontally.

However, I ultimately chose **cards**.

I felt the card layout worked better for the visual direction I was aiming for because:

- Each award has a clear visual boundary.
- The award imagery becomes more prominent.
- The year and award group are easy to scan.
- The expanded state fits naturally inside the card.
- The layout transitions nicely from three columns to one column on mobile.
- It makes the page feel more visual rather than purely informational.

It was also a useful component to build in React because the same `AwardsCard` component can be reused for every award.


---

## Going Beyond the Brief

I knew I wasn't required to recreate the entire surrounding page.

The actual requirements were mainly focused on:

- The award data
- Award cards
- Filtering
- Interaction
- React structure

However, I chose to build the **hero, menu and heading components first**.

I felt that these elements were important to getting the overall feel of the page right.

I didn't want to build the cards in isolation without understanding how they would sit within the wider layout.

The additional work also gave me an opportunity to demonstrate:

- Responsive design
- Component structure
- Navigation state
- Mobile interactions
- More detailed CSS
- Visual attention to detail

I tried to keep the additional work relevant to the page rather than adding functionality just for the sake of adding it.

<img width="1351" height="602" alt="image" src="https://github.com/user-attachments/assets/9341a9e2-d721-4df0-9ce6-141098b4c1e1" />
<img width="1351" height="552" alt="image" src="https://github.com/user-attachments/assets/985e6ef6-71c4-460f-b355-052e096bb281" />
<img width="1355" height="606" alt="image" src="https://github.com/user-attachments/assets/6fabdd80-c228-4a64-a893-aa4509cb2913" />



---


## Hover Interaction

One part of the brief required the **hover interaction on the award groups** to be recreated.

I interpreted this as an opportunity to make the award cards feel interactive while keeping the interaction within the existing page rather than navigating to another view.

The cards use visual interaction states to provide feedback when the user interacts with them, with the expanded state revealing additional award information and categories.

I chose this approach because it keeps the interaction directly connected to the award being explored and allows the user to access additional information without leaving the page.

The exact interaction in the reference left some room for interpretation, so I focused on reproducing the overall interactive behaviour while adapting it to the card-based layout I had created.

<img width="936" height="404" alt="image" src="https://github.com/user-attachments/assets/4d6c5d18-4733-4dd4-89bf-65d00bd1def9" />

<img width="940" height="409" alt="image" src="https://github.com/user-attachments/assets/ed00ebd3-310c-449e-8405-5a2be4b9d2b1" />

<img width="939" height="604" alt="image" src="https://github.com/user-attachments/assets/5ff9f636-ef1b-4662-95ee-22d6848e26f8" />

---

## Responsive Design

I didn't want mobile to simply be a smaller version of the desktop page.

The layout changes depending on the viewport.

### Desktop

- Full navigation
- Large hero
- Three-column award layout
- Horizontal filtering
- Larger typography

### Mobile

- Hamburger menu
- Condensed hero
- Single-column cards
- Mobile-friendly award filter
- Adjusted typography and spacing

---

## Visual Details

I spent quite a lot of time on the smaller visual details of the page.

These include:

- Hero imagery
- Large typography
- Dark hero background
- Teal/dark blue colour palette
- Light green year badges
- Rounded buttons
- Card borders
- Hover states
- Expanded states
- Navigation transitions
- Mobile menu
- Filter dropdown
- Responsive spacing

These details weren't all required by the brief, but they helped me create something that felt like a complete website rather than a technical demonstration of six cards.

---

# UI Preview

I wanted to include screenshots of the different states of the application rather than only showing one final screenshot.

This demonstrates the responsive behaviour and the different interactions that were implemented.

The screenshots below show both desktop and mobile states, including the responsive layouts, filtering and interactive card states.

<img width="291" height="438" alt="image" src="https://github.com/user-attachments/assets/8b976d87-e81e-4e7b-9b9a-a409151ae327" />

<img width="1339" height="512" alt="image" src="https://github.com/user-attachments/assets/04459436-fa75-4df5-8e9e-7ad091201f5b" />

<img width="870" height="444" alt="image" src="https://github.com/user-attachments/assets/91bf4998-5ce6-4f7f-a97b-410799c6e1dd" />



---

## Desktop Hero

The desktop hero establishes the visual direction of the page.

I built this before the awards section because I wanted to establish the overall page structure and visual language before concentrating on the functionality.

<img width="1349" height="444" alt="image" src="https://github.com/user-attachments/assets/7f9a4dfb-fe3a-4756-9452-125b3062eb9d" />


---

## Desktop Awards

The main awards section displays the three award groups as cards.

Each card contains the award imagery, group name, year and interaction.

<img width="450" height="332" alt="image" src="https://github.com/user-attachments/assets/1c6e7bc9-114d-4baf-a81c-d9a0ef3741d4" />


---

## Expanded Award Card

The expanded state reveals additional award categories within the card.

This keeps the additional information within the context of the award rather than requiring a separate page.

<img width="307" height="545" alt="image" src="https://github.com/user-attachments/assets/0cc8cecc-2805-4227-a7c4-c8964c0a406a" />


---

## Multiple Expanded Cards

The interaction can also be demonstrated with multiple award groups expanded.

This was something I considered when thinking about how the state should be managed within the card components.


<img width="1355" height="606" alt="image" src="https://github.com/user-attachments/assets/6fabdd80-c228-4a64-a893-aa4509cb2913" />


---

## Award Group Filter

The filter allows the user to select an individual award group.

For example, selecting **Global Search Awards** shows the relevant awards from both 2024 and 2025.

<img width="1346" height="501" alt="image" src="https://github.com/user-attachments/assets/e29d6a70-addf-44a2-8ac0-72a340167abe" />
<img width="1339" height="507" alt="image" src="https://github.com/user-attachments/assets/2296b46f-71b9-4fd8-8028-b90f0619a08d" />
<img width="310" height="173" alt="image" src="https://github.com/user-attachments/assets/e134d6b5-c9af-4738-a957-61fba57a8acb" />
<img width="1354" height="125" alt="image" src="https://github.com/user-attachments/assets/34843854-9b43-4dcd-a7aa-b39ee9f8a4bb" />
<img width="291" height="438" alt="image" src="https://github.com/user-attachments/assets/8b976d87-e81e-4e7b-9b9a-a409151ae327" />
<img width="1339" height="512" alt="image" src="https://github.com/user-attachments/assets/04459436-fa75-4df5-8e9e-7ad091201f5b" />
<img width="870" height="444" alt="image" src="https://github.com/user-attachments/assets/91bf4998-5ce6-4f7f-a97b-410799c6e1dd" />

---

## Mobile Hero

The mobile version of the hero uses the same visual concept but adapts the layout and typography for a much smaller viewport.

<img width="220" height="449" alt="image" src="https://github.com/user-attachments/assets/003bcd95-4f83-4141-bb37-b6679491ebf1" />


---

## Mobile Awards

On mobile, the award cards become a single-column layout.

This gives each award enough space while making the page easier to scroll and interact with.

<img width="219" height="475" alt="image" src="https://github.com/user-attachments/assets/838ee4df-1f7d-4d67-82bb-ea9af639519c" />


---

## Mobile Award Filter

The award group selector changes into a mobile-friendly dropdown interface.

The available groups are displayed within the expanded selector.

<img width="310" height="170" alt="image" src="https://github.com/user-attachments/assets/0145ef92-a493-4382-88f4-e374bf9f48bb" />

<img width="302" height="391" alt="image" src="https://github.com/user-attachments/assets/affd4d9c-02fd-4b6e-89c3-a990c12d8e3f" />


---

## Mobile Navigation

The desktop navigation changes into a full mobile navigation menu.

<img width="218" height="213" alt="image" src="https://github.com/user-attachments/assets/7dfa8906-54bd-46a6-94be-e661b038e3ae" />



---

# Component Structure

I approached the page as a collection of reusable React components rather than putting everything inside `App.jsx`.

The main component structure is:

```text
App
│
├── Hero
├── Menu
├── Heading
├── AwardsFilter
├── AwardSelect
├── AwardsCard
└── Footer
```

The project structure inside `src` is:

```text
src/
│
├── assets/
│   ├── 2024.png
│   ├── avatar.webp
│   ├── digital.webp
│   ├── europe.webp
│   ├── europe1.png
│   ├── globsearch.webp
│   ├── hero4.webp
│   └── wlogo.webp
│
├── components/
│   │
│   ├── AwardsCard/
│   │   ├── AwardsCard.css
│   │   └── AwardsCard.jsx
│   │
│   ├── AwardSelect/
│   │   ├── AwardSelect.css
│   │   └── AwardSelect.jsx
│   │
│   ├── AwardsFilter/
│   │   ├── AwardsFilter.css
│   │   └── AwardsFilter.jsx
│   │
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   │
│   ├── Heading/
│   │   ├── Heading.css
│   │   └── Heading.jsx
│   │
│   ├── Hero/
│   │   ├── Hero.css
│   │   └── Hero.jsx
│   │
│   └── Menu/
│       ├── Menu.css
│       └── Menu.jsx
│
├── data/
│   └── mockdata.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

This structure keeps the UI broken into meaningful, reusable sections while keeping the project relatively simple.

---

# Components

## `AwardsCard`

The main reusable component for an individual award.

It handles:

- Award imagery
- Award group
- Year
- Interactive state
- Expanded content
- Award categories

---

## `AwardsFilter`

Handles the filtering functionality.

It determines which award group is currently selected and controls which awards are displayed.

---

## `AwardSelect`

Handles the award-group selection interface.

I separated this from the filtering component because the selector itself has its own UI and responsive behaviour.

---

## `Heading`

A reusable heading component used for the awards section.

<img width="1347" height="222" alt="image" src="https://github.com/user-attachments/assets/c77a3e13-8ae9-4fef-ae20-3d9c74db979e" />

---

## `Hero`

Contains the main hero section, including the hero image and `OUR AWARDS` heading.

Although this wasn't part of the core requirements, I felt it helped create the overall visual experience.

---

## `Menu`

Handles the navigation and mobile menu.

The desktop and mobile versions use the same component but behave differently depending on the viewport and menu state.

<img width="1255" height="79" alt="image" src="https://github.com/user-attachments/assets/d9439659-ebc9-497e-b683-8afbbc0bd0f8" />



## Dark Mode

I added dark mode after testing the site on mobile and realising it didn't look right when my phone was already using dark mode. 😂

I take a lot of pride in how my work looks across different devices and settings. I genuinely enjoy going back and looking at things I've built, so I want to be happy with what I'm seeing every time I open the site.

For me, dark mode wasn't just about making the colours technically work. I wanted it to still feel like the same considered design, with the layout, spacing, typography and colours all working properly.

I kept the existing visual language by using a deep teal background, white typography and the existing green accents.

If I'm going to keep looking at my work because I'm proud of it, I want it to look right. 😂

I also tested it across different screen sizes to make sure everything still looked clean and readable on both desktop and mobile.

<img width="710" height="444" alt="image" src="https://github.com/user-attachments/assets/72aedc4d-7502-4694-9fe6-e8c172964114" />
<img width="711" height="446" alt="image" src="https://github.com/user-attachments/assets/a4bc4e4e-905e-465c-9730-c61a59cf8e52" />
<img width="203" height="424" alt="image" src="https://github.com/user-attachments/assets/31424c39-c63d-4fa1-b8fb-e4fccc11ce00" />
<img width="194" height="425" alt="image" src="https://github.com/user-attachments/assets/961498a3-0bbf-4881-a53f-f1a2d04df626" />
<img width="194" height="416" alt="image" src="https://github.com/user-attachments/assets/e8729ea7-c896-4cfb-8016-7b1b754fbcfb" />
<img width="704" height="298" alt="image" src="https://github.com/user-attachments/assets/9b920935-787f-4234-a8f2-c7e8d7be16f5" />


---

## `Footer`

A small last-minute addition, because apparently I couldn't leave the page without one.

It's intentionally simple and follows the same visual style as the rest of the page. It gives the page a proper ending without competing with the awards section.

Was it strictly necessary for the brief? No.

Did the page feel unfinished without it? Yes.

So here we are.

<img width="1352" height="141" alt="image" src="https://github.com/user-attachments/assets/9ec20bf8-93ec-4785-a38f-874fd65a9bc1" />

<img width="306" height="409" alt="image" src="https://github.com/user-attachments/assets/30632931-4829-45b5-a6ac-0d5907d83288" />



---

## `data/mockdata.jsx`

Contains the static award data.

Keeping the data separate from the presentation components means the award information can be changed without having to rewrite the card component.

---

# Data and Filtering

The brief specifically requested static data, so no API or backend was required.

The awards are stored as objects in `mockdata.jsx`.

A simplified example of the structure is:

```jsx
const awards = [
  {
    year: 2025,
    group: "Global Search Awards",
    image: globsearch,
    categories: [
      "Best Use of Search",
      "Best Large SEO Agency"
    ]
  }
];
```

React state is then used to keep track of the currently selected award group.

Conceptually, the filtering works like this:

```jsx
const [selectedGroup, setSelectedGroup] = useState("All Awards");

const filteredAwards =
  selectedGroup === "All Awards"
    ? awards
    : awards.filter(
        award => award.group === selectedGroup
      );
```

This means the original data stays unchanged and the UI simply derives the awards that should currently be displayed.

---

# HTML and CSS

I have several years of experience in **graphic design and HTML/CSS**, so the visual and layout side of this task comes fairly naturally to me.

I enjoy translating a visual reference into:

- Layout
- Typography
- Spacing
- Responsive behaviour
- Visual hierarchy
- Interaction states

That was one of the reasons I chose vanilla CSS rather than using a UI framework.

It gave me complete control over the visual implementation and allowed me to build the styling myself.

The downside is that there was considerably more CSS to write.

My wrist definitely noticed that decision by the end of the project. 😄

---

# Accessibility

Accessibility was something I considered throughout the build rather than leaving until the end.

I made a number of decisions to improve readability, performance and usability across different devices.

### Readability

I paid particular attention to typography, font sizes and colour choices to make sure the content remained easy to read.

I adjusted font sizes and spacing across different screen sizes so that text remained comfortable to read on both desktop and mobile.

I also considered the contrast between the text and backgrounds when choosing colours, particularly when creating the dark mode version.

### Images and Performance

I compressed and optimised the images used throughout the site to reduce their file sizes and improve loading performance.

This was particularly important for the larger hero imagery, where using unnecessarily large files could have affected the experience on mobile devices.

I was particularly happy to achieve **100% across the board in the final Lighthouse results**. Performance was originally sitting at around **57%**, so getting it to 100% wasn't something that happened by accident.

I looked into what was affecting the score and made changes to improve the site's performance, including compressing and optimising the images.

Seeing that jump from 57% to 100% was really satisfying because it showed that the changes I made actually had a measurable impact.

### Responsive Design

I take a lot of pride in how my work looks across different devices. I genuinely enjoy going back and looking at things I've built, so I want to be happy with what I'm seeing every time I open the site. 😂

I don't just want the site to technically work on mobile. I want the layout, spacing, typography and interactions to still feel intentional at different screen sizes.

I tested the site across desktop and mobile to make sure everything felt like the same considered design rather than simply shrinking everything down.

### Dark Mode

I added dark mode after testing the site on mobile and realising it didn't look right when my phone was already using dark mode. 😂

I wanted to make sure the page still looked intentional rather than just letting the colours do whatever they wanted.

I kept the same visual language by using a deep teal background, white typography and the existing green accents.

I also considered readability and contrast when adapting the design for dark mode.

### Interaction

I used clear visual states for interactive elements so that users receive feedback when interacting with the award cards, filtering and navigation.

Overall, I wanted accessibility to be part of the design decisions rather than something added at the very end.

I'm still learning about accessibility and there are always areas I could improve, but I tried to make conscious decisions throughout the build to make the site easier to read, navigate and use.

<img width="399" height="98" alt="image" src="https://github.com/user-attachments/assets/96cda606-888a-4c9b-a27f-db540aeeff02" />


---

# Getting Started

## Requirements

You will need:

- Node.js
- npm
- Git

Check your installed versions:

```bash
node --version
npm --version
```

---

## Clone the Repository

```bash
git clone git clone https://github.com/SophiaMcGee20040472/WolfDigital.git
```

Navigate into the project:

```bash
cd WolfDigital
```

---

## Install Dependencies

```bash
npm install
```

---

## Run the Development Server

```bash
npm run dev
```

Vite will start the development server.

The application will normally be available at:

```text
http://localhost:5173
```

---

# Available Scripts

## Development

```bash
npm run dev
```

Starts the Vite development server.

## Production Build

```bash
npm run build
```

Creates an optimised production build.

## Preview

```bash
npm run preview
```

Runs the production build locally.

## Lint

```bash
npm run lint
```

Runs ESLint across the project.

---

# Project Structure

At the root of the project, the main files are:

```text
wolfdigital/
│
├── public/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The majority of the application code lives inside `src`, with the UI split into reusable components and the award information kept separately in static data.

---

# Future Improvements

If I continued developing the project, I would consider:

- Adding more award years
- Adding individual award detail pages
- Adding more award categories
- Improving keyboard navigation
- Adding more detailed focus states
- Adding more subtle animations
- Adding component tests
- Adding TypeScript
- Further refining the mobile experience
- Creating a more complete navigation experience

If this were being developed as a larger production application, I would also reconsider the technology stack and potentially introduce TypeScript, Next.js and a component library.

---

# Original Brief

The project was created in response to a React development task.

The brief required:

- 2024 and 2025 awards
- Three awards per year
- Six awards total
- Filtering by award group
- Showing the selected group across both years
- Recreating an award-group hover interaction
- React
- Static data
- No CMS or backend
- A README explaining setup and tools used

I used the brief as the foundation of the project but chose to expand the surrounding page experience.

The required functionality remains at the centre of the implementation, while the additional work allowed me to explore the design and React component structure in more depth.

---

# Final Thoughts

This started as a relatively small React task, but I ended up getting properly stuck into it.

I initially intended to concentrate on the required award cards and filtering, but I started by building the **hero, menu and heading components** because I wanted to understand the page as a complete experience.

From there, I got into the details of the cards, filtering, responsive behaviour and interactions.

I probably spent considerably longer on the task than was necessary, but I genuinely enjoyed it.

I have missed coding, and this gave me the opportunity to build something for the brief **as well as something for myself**.

My main goal wasn't to create a perfect copy of the reference. It was to demonstrate how I approach a design, how I break a page into React components, how I handle state and filtering, and how I make decisions when the brief doesn't specify every detail. I wouldn't have put the teal green hover on my cards but I did it because your site had teal green and I wanted to stay consistent even though it doesn't look right for my particular cards. So I ask that I am not penalized for these decisions.

There were definitely things I wasn't completely sure about particularly the exact meaning of the requested hover interaction so I've documented the decisions I made rather than pretending every choice was explicitly defined by the brief.

Overall, I really enjoyed building it, probably a little **too** much. 😄

---

# Author

**Sophia McGee**

Built with **React + Vite + Vanilla CSS**.

---
