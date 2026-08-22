// 1. React Logo
export const ReactLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" aria-label="React">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 2. Next.js Logo
export const NextjsLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 180 180" fill="currentColor" aria-label="Next.js">
    <path fillRule="evenodd" clipRule="evenodd" d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM147.45 155.657L67.084 52.137H51.942V124.107H64.0556V67.5206L137.941 162.982C141.275 160.751 144.451 158.302 147.45 155.657ZM112.95 52.137H125.064V124.137H112.95V52.137Z" />
  </svg>
);

// 3. TypeScript Logo
export const TypeScriptLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="TypeScript">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12 4.5h6.5v2.25H16v12h-2.5v-12H12V4.5zm-8.25 4.5H9v2.25H6.5v9.75H4V11.25H1.5V9h2.25z" />
  </svg>
);

// 4. Tailwind CSS Logo
export const TailwindLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Tailwind CSS">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

// 5. Laravel Logo
export const LaravelLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Laravel">
    <path d="M23.644 6.18a.747.747 0 0 0-.363-.485L16.275 1.58a.745.745 0 0 0-.742.005l-7.006 4.115a.745.745 0 0 0-.366.643v4.614l-4.52-2.65a.745.745 0 0 0-.742.005L.366 9.878A.746.746 0 0 0 0 10.521v8.232a.747.747 0 0 0 .37.646l7.006 4.116a.745.745 0 0 0 .742-.006l4.522-2.651v2.502a.745.745 0 0 0 .37.646l7.005 4.116a.745.745 0 0 0 .742-.006l3.257-1.912a.746.746 0 0 0 .37-.646V6.18zm-8.86-3.708l5.525 3.24-5.525 3.242-5.525-3.242 5.525-3.24zm-6.634 19.34L2.625 18.57V12.1l5.525 3.24v6.472zm6.26-3.673l-4.522 2.651v-6.47l4.522-2.652v6.471zm8.106-1.54l-5.525 3.242-5.525-3.242V9.827l5.525-3.242 5.525 3.242v6.784z" />
  </svg>
);

// 6. Supabase Logo
export const SupabaseLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Supabase">
    <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.416 13.914a.792.792 0 0 0 .616 1.282H12v8.958a.396.396 0 0 0 .716.233l10.868-13.751a.792.792 0 0 0-.616-1.282z" />
  </svg>
);

// 7. PostgreSQL Logo
export const PostgreSQLLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="PostgreSQL">
    <path d="M12.003 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12.003 12 6.627 0 11.997-5.373 11.997-12 0-6.627-5.37-12-11.997-12zm6.818 17.513c-.453.64-.997 1.183-1.637 1.637-.34.24-.707.453-1.093.64-.173.08-.347.16-.533.227-.373.133-.76.227-1.16.293-.413.067-.84.093-1.28.093-.84 0-1.64-.147-2.387-.427-.747-.28-1.427-.693-2.027-1.213-.6-.52-1.093-1.16-1.48-1.893-.387-.733-.587-1.573-.587-2.493 0-.933.2-1.773.587-2.507.387-.733.88-1.36 1.48-1.88.6-.52 1.28-.92 2.027-1.2.747-.28 1.547-.427 2.387-.427.853 0 1.653.147 2.4.427.747.28 1.413.68 2.013 1.2.6.52 1.08 1.147 1.467 1.88.387.733.587 1.573.587 2.507 0 .92-.2 1.76-.587 2.493-.387.733-.867 1.36-1.467 1.893z" />
  </svg>
);

// 8. Prisma Logo
export const PrismaLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Prisma">
    <path d="M12 1.5l10.5 6.06v12.12L12 25.74 1.5 19.68V7.56L12 1.5zm0 2.31L3.5 8.66v9.36L12 22.87l8.5-4.85V8.66L12 3.81z" />
    <path d="M12 6.5l6 3.46v6.93L12 20.35 6 16.89V9.96L12 6.5z" />
  </svg>
);

// 9. n8n Automation Logo
export const N8nLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="n8n">
    <circle cx="6" cy="12" r="3.5" />
    <circle cx="18" cy="12" r="3.5" />
    <path d="M9.5 10.5h5v3h-5z" />
  </svg>
);

// 10. Vercel Logo
export const VercelLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Vercel">
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

// 11. GitHub Logo
export const GitHubLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// 12. Figma Logo
export const FigmaLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 38 57" fill="currentColor" aria-label="Figma">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

// 13. Cloudflare Logo
export const CloudflareLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Cloudflare">
    <path d="M19.41 12.01a5.97 5.97 0 0 0-5.46-3.56c-.66 0-1.29.11-1.88.31a7.48 7.48 0 0 0-6.95 5.25A4.5 4.5 0 0 0 6.5 23h12.91a4.59 4.59 0 0 0 .5-9.16l-.5-.83z" />
  </svg>
);

// 14. Framer Logo
export const FramerLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Framer">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

// 15. Notion Logo
export const NotionLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Notion">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L18.45 2.39c-.56-.467-1.306-.84-2.38-.747L2.965 2.576c-.466.047-.56.327-.373.513l1.867 1.119zm.793 4.573v11.758c0 .84.42 1.166 1.306 1.12l14.475-.84c.886-.046 1.073-.606 1.073-1.353V7.754c0-.747-.327-1.12-1.073-1.073l-14.708.84c-.793.047-1.073.467-1.073 1.26zm13.682.233c.093.373 0 .747-.373.793l-.653.14-2.846 4.386 2.8 5.786c.373.746.187 1.026-.606 1.073l-2.053.14c-.466.046-.84-.187-1.073-.7l-2.1-4.666-1.866 2.893v2.193c0 .56-.187.793-.793.84l-2.007.14c-.466.047-.653-.28-.653-.7V9.761c0-.466.187-.746.653-.793l2.287-.14c.606-.046.793.187.793.747v5.039l3.546-5.46c.28-.42.653-.606 1.213-.653l3.22-.233c.42-.047.747.093.846.56z" />
  </svg>
);

// 16. OpenAI Logo
export const OpenAILogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="OpenAI">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.04-9.67a4.484 4.484 0 0 1 2.34-1.97v5.676a.79.79 0 0 0 .392.681l5.844 3.369-2.02 1.168a.071.071 0 0 1-.065 0l-4.839-2.794a4.504 4.504 0 0 1-1.652-6.13zm15.422 4.488L12.14 9.753l2.02-1.168a.076.076 0 0 1 .065 0l4.84 2.794a4.504 4.504 0 0 1-.689 8.105v-5.676a.79.79 0 0 0-.392-.681l-.044-.027zm2.42-3.369a4.508 4.508 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.429 13.3v-2.332a.08.08 0 0 1 .033-.062l4.84-2.793a4.5 4.5 0 0 1 6.14 1.646zM8.71 14.24l-2.02-1.168a.071.071 0 0 1-.038-.052V7.437a4.504 4.504 0 0 1 7.37-3.454l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737zm1.09-2.24l2.2-1.27 2.2 1.27v2.54l-2.2 1.27-2.2-1.27v-2.54z" />
  </svg>
);

// 17. Instagram Logo
export const InstagramLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// 18. WhatsApp Logo
export const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
