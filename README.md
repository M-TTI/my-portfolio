# This portfolio is a fork of [rishikesh2003's template](https://github.com/rishikesh2003/my-portfolio)

I mainly reordered and translated the different categories in french (and put my own data of course)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Open your browser and visit `http://localhost:4321`

## Customizing the Portfolio

This portfolio is designed to be easily customizable mainly by editing the data in the `src/lib/data.ts` file:

1. **Personal Information**: Update your name, location, email, and social links

   ```typescript
   export const personalInfo = {
     name: "Your Name",
     location: "Your Location",
     email: "your.email@example.com",
     github: "https://github.com/yourusername",
     linkedin: "https://www.linkedin.com/in/yourusername/",
   };
   ```

2. **Work Experience**: Add or modify your professional experience

   ```typescript
   export const workExperience = [
     {
       company: "Company Name",
       location: "Location",
       position: "Your Position",
       period: "Start Date - End Date",
       achievements: [
         "Achievement 1",
         "Achievement 2",
         // ...
       ],
     },
     // Add more work experiences
   ];
   ```

3. **Education**: Update your educational background

   ```typescript
   export const education = [
     {
       institution: "University Name",
       location: "Location",
       degree: "Your Degree",
       period: "Start Date - End Date",
       achievements: [
         "Achievement 1",
         "Achievement 2",
         // ...
       ],
     },
     // Add more education entries
   ];
   ```

4. **Skills**: Customize your skills by category

   ```typescript
   export const skills = {
     programmingLanguages: ["Skill 1", "Skill 2"],
     frontendDevelopment: ["Skill 1", "Skill 2"],
     // Other skill categories
   };
   ```

5. **Projects**: Showcase your projects

   ```typescript
   export const projects = [
     {
       title: "Project Name",
       github: "https://github.com/yourusername/project",
       description: [
         "Description point 1",
         "Description point 2",
         // ...
       ],
     },
     // Add more projects
   ];
   ```

6. **Awards**: Highlight your achievements
   ```typescript
   export const awards = [
     {
       name: "Award Name",
       issuer: "Issuer",
       date: "Date",
       type: "Type",
       position: "Position",
     },
     // Add more awards
   ];
   ```

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
bun run build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deployment

This portfolio can be deployed to any static site hosting service like Vercel, Netlify, GitHub Pages, etc.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

© 2025 Rishikesh S. All rights reserved.

This template is designed to be used as a starting point for your personal portfolio. You are free to use it for your own portfolio by simply modifying the `data.ts` file and making any design adjustments. However, please include attribution to the original author when using this template.

## Acknowledgments

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
