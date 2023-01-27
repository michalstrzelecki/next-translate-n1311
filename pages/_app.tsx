import dynamic from "next/dynamic";

const TestDynamicImport = dynamic(
    () => import("./TestDynamicImport")
)
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <TestDynamicImport />
        </>
    )
}
