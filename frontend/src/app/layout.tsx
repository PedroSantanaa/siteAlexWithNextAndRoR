import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../../lib/registry'
import NavBar from "@/components/NavBar";
import { getSession } from "@/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abreu Engenharia",
  description: "Faça seu projeto com a Abreu Engenharia",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getSession(); 
  return (
    <html suppressHydrationWarning lang="pt-br" className={inter.className}>
      <body>
        <StyledComponentsRegistry >
          <div className="layoutPageContainer">
              {session!== false && <NavBar/>}
              <div className="layoutPageContent">{children}</div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
export default RootLayout;