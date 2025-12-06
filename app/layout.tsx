// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import {LanguageProvider} from "@/lib/LanguageContext";

export const metadata: Metadata = {
    title: 'Gemini Immigration Demo',
    description: 'A satirical but serious immigration automation demo',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <body>
        <LanguageProvider>
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}
