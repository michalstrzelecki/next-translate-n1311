import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation()

  return <h1>{t("test")}</h1>
}
