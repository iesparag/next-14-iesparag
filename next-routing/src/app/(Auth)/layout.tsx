import Link from "next/link";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

interface Link {
  name: string;
  href: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between">
          {navLinks.map((link: Link) => {
            return (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            );
          })}
        </div>
        {children}
      </body>
    </html>
  );
}
