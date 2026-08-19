import React from 'react';

// 1. Figma Logo
export const FigmaLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 38 57" fill="currentColor" aria-label="Figma">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

// 2. Supabase Logo
export const SupabaseLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Supabase">
    <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.416 13.914a.792.792 0 0 0 .616 1.282H12v8.958a.396.396 0 0 0 .716.233l10.868-13.751a.792.792 0 0 0-.616-1.282z" />
  </svg>
);

// 3. Linear Logo
export const LinearLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Linear">
    <path d="M3.1 3.1A11.95 11.95 0 0 0 0 12c0 6.627 5.373 12 12 12a11.95 11.95 0 0 0 8.9-4.1L3.1 3.1zm17.8 1.8A11.95 11.95 0 0 0 12 0C5.373 0 0 5.373 0 12c0 1.28.2 2.51.57 3.66L17.23 2.23A11.9 11.9 0 0 0 20.9 4.9zm2.53 3.44L9.1 22.67c.92.21 1.88.33 2.9.33 6.63 0 12-5.37 12-12 0-1.02-.12-1.98-.33-2.9z" />
  </svg>
);

// 4. Framer Logo
export const FramerLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Framer">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

// 5. PlanetScale / Circle Slash Logo
export const PlanetScaleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="PlanetScale">
    <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-1.5 2.15a9.85 9.85 0 0 1 3 0v19.7a9.85 9.85 0 0 1-3 0zm4.5.7a9.9 9.9 0 0 1 3 1.75l-13.9 13.9a9.9 9.9 0 0 1-1.75-3zm-9 1.75a9.9 9.9 0 0 1 3-1.75l12.65 12.65a9.9 9.9 0 0 1-1.75 3z" />
  </svg>
);

// 6. Vercel Logo
export const VercelLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Vercel">
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

// 7. Stripe Logo
export const StripeLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Stripe">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.839 3.771 6.491 6.861 7.607 2.515.907 3.376 1.614 3.376 2.576 0 .979-.845 1.545-2.275 1.545-2.316 0-5.236-1.074-7.05-2.072l-.895 5.567c1.782.954 4.814 1.559 7.824 1.559 2.576 0 4.708-.654 6.237-1.872 1.597-1.275 2.42-3.177 2.42-5.467 0-4.633-3.21-6.425-6.34-7.56z" />
  </svg>
);

// 8. Prisma / Turso Logo
export const PrismaLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Prisma">
    <path d="M12 1.5l10.5 6.06v12.12L12 25.74 1.5 19.68V7.56L12 1.5zm0 2.31L3.5 8.66v9.36L12 22.87l8.5-4.85V8.66L12 3.81z" />
    <path d="M12 6.5l6 3.46v6.93L12 20.35 6 16.89V9.96L12 6.5z" />
  </svg>
);

// 9. OpenAI Logo
export const OpenAILogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="OpenAI">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.04-9.67a4.484 4.484 0 0 1 2.34-1.97v5.676a.79.79 0 0 0 .392.681l5.844 3.369-2.02 1.168a.071.071 0 0 1-.065 0l-4.839-2.794a4.504 4.504 0 0 1-1.652-6.13zm15.422 4.488L12.14 9.753l2.02-1.168a.076.076 0 0 1 .065 0l4.84 2.794a4.504 4.504 0 0 1-.689 8.105v-5.676a.79.79 0 0 0-.392-.681l-.044-.027zm2.42-3.369a4.508 4.508 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.429 13.3v-2.332a.08.08 0 0 1 .033-.062l4.84-2.793a4.5 4.5 0 0 1 6.14 1.646zM8.71 14.24l-2.02-1.168a.071.071 0 0 1-.038-.052V7.437a4.504 4.504 0 0 1 7.37-3.454l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737zm1.09-2.24l2.2-1.27 2.2 1.27v2.54l-2.2 1.27-2.2-1.27v-2.54z" />
  </svg>
);

// 10. GitHub Logo
export const GitHubLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// 11. Notion Logo
export const NotionLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Notion">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L18.45 2.39c-.56-.467-1.306-.84-2.38-.747L2.965 2.576c-.466.047-.56.327-.373.513l1.867 1.119zm.793 4.573v11.758c0 .84.42 1.166 1.306 1.12l14.475-.84c.886-.046 1.073-.606 1.073-1.353V7.754c0-.747-.327-1.12-1.073-1.073l-14.708.84c-.793.047-1.073.467-1.073 1.26zm13.682.233c.093.373 0 .747-.373.793l-.653.14-2.846 4.386 2.8 5.786c.373.746.187 1.026-.606 1.073l-2.053.14c-.466.046-.84-.187-1.073-.7l-2.1-4.666-1.866 2.893v2.193c0 .56-.187.793-.793.84l-2.007.14c-.466.047-.653-.28-.653-.7V9.761c0-.466.187-.746.653-.793l2.287-.14c.606-.046.793.187.793.747v5.039l3.546-5.46c.28-.42.653-.606 1.213-.653l3.22-.233c.42-.047.747.093.846.56z" />
  </svg>
);

// 12. Raycast / Sunburst Logo
export const RaycastLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Raycast">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
