import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft, Database, Lock, Shield, UserCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <Button variant="ghost" size="sm" asChild className="mb-4">
                            <Link to="/" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                {t("privacy.backToHome")}
                            </Link>
                        </Button>
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            {t("privacy.title")}
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            {t("privacy.subtitle")}
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="grid gap-6">
                        {/* No Data Collection Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-green-600" />
                                    {t("privacy.noDataCollection.title")}
                                </CardTitle>
                                <CardDescription>
                                    {t("privacy.noDataCollection.description")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground leading-relaxed">
                                    {t("privacy.noDataCollection.content")}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Local Storage Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Database className="h-5 w-5 text-blue-600" />
                                    {t("privacy.localStorage.title")}
                                </CardTitle>
                                <CardDescription>
                                    {t("privacy.localStorage.description")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground leading-relaxed mb-4">
                                    {t("privacy.localStorage.content")}
                                </p>
                                <ul className="list-disc list-inside text-foreground space-y-2">
                                    <li>{t("privacy.localStorage.items.theme")}</li>
                                    <li>{t("privacy.localStorage.items.language")}</li>
                                    <li>{t("privacy.localStorage.items.preferences")}</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* No Third Party Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-purple-600" />
                                    {t("privacy.noThirdParty.title")}
                                </CardTitle>
                                <CardDescription>
                                    {t("privacy.noThirdParty.description")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground leading-relaxed">
                                    {t("privacy.noThirdParty.content")}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Security Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lock className="h-5 w-5 text-orange-600" />
                                    {t("privacy.security.title")}
                                </CardTitle>
                                <CardDescription>
                                    {t("privacy.security.description")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground leading-relaxed">
                                    {t("privacy.security.content")}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>{t("privacy.contact.title")}</CardTitle>
                                <CardDescription>
                                    {t("privacy.contact.description")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground leading-relaxed">
                                    {t("privacy.contact.content")}
                                </p>
                                <div className="mt-4">
                                    <Button variant="outline" asChild>
                                        <a href="mailto:hey@kokoromono.com">
                                            {t("privacy.contact.email")}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Footer */}
                    <motion.div variants={itemVariants} className="mt-8 text-center">
                        <p className="text-muted-foreground">
                            {t("privacy.lastUpdated")}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy 