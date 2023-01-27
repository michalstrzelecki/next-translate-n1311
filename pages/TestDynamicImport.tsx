import useTranslation from "next-translate/useTranslation";

export default function TestDynamicImport() {
    const { t } = useTranslation()

    return <h2>{t("test")}</h2>
}
