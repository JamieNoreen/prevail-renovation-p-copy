import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Outlet,
    Link,
    createRootRouteWithContext,
    useRouter,
    HeadContent,
    Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { ThemeScript } from "../components/theme-script.tsx";

function NotFoundComponent() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-display text-8xl text-foreground">404</h1>
                <h2 className="mt-4 font-sans text-lg font-semibold text-foreground">Page not found</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
    console.error(error);
    const router = useRouter();
    useEffect(() => {
        reportVibeError(error, { boundary: "tanstack_root_error_component" });
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="font-display text-2xl tracking-tight text-foreground">
                    This page didn't load
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Something went wrong on our end. You can try refreshing or head back home.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
                    >
                        Go home
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "PREVAIL" },
            {
                name: "description",
                content:
                    "Facebook + Instagram advertising built around better project opportunities for established Australian renovation businesses. AUD $2,500/month + ad spend.",
            },
            { property: "og:title", content: "PREVAIL" },
            {
                property: "og:description",
                content:
                    "Facebook + Instagram advertising built around better project opportunities for established Australian renovation businesses.",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "preconnect",
                href: "https://assets.cdn.filesafe.space",
            },
            {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                href: "https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2",
                crossOrigin: "anonymous",
            },
            {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                href: "https://fonts.gstatic.com/s/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2",
                crossOrigin: "anonymous",
            },
        ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <HeadContent />
                <ThemeScript />
            </head>
            <body>
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function RootComponent() {
    const { queryClient } = Route.useRouteContext();

    return (
        <QueryClientProvider client={queryClient}>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
        </QueryClientProvider>
    );
}
