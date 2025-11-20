import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppStoreButton } from 'react-mobile-app-button';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  const titleChars = t('app.title').split('');
  const { theme } = useTheme();

  return (
    <div className="bg-background">
      {/* Hero Section - Full Height */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="mb-6 "
          >
            <img
              src="/icon.png"
              alt={t('app.title')}
              className="w-24 h-24 mx-auto rounded-2xl shadow-lg border-4 border-primary"
            />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 flex justify-center flex-wrap">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="inline-block mx-[1px] text-foreground"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-2">
            {t('app.description')}
          </p>
          <p className="text-muted-foreground mb-8">
            {t('app.createdBy')}{' '}
            <a
              href="https://www.threads.net/@dorara_hsieh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              dorara_hsieh
            </a>
          </p>
          {/* App Store Download Button */}
          <div className="flex justify-center mb-8">
            <AppStoreButton
              theme={theme === 'dark' ? 'dark' : 'light'}
              url="https://apps.apple.com/tw/app/cardma/id6747955972?l=en-GB"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a
                href="mailto:hey@kokoromono.com"
                className="flex items-center gap-2"
                aria-label={t('app.contact.email')}
              >
                <Mail className="h-4 w-4" />
                {t('app.contact.email')}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://x.com/DoraraHsieh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label={t('app.contact.twitter')}
              >
                <Twitter className="h-4 w-4" />
                {t('app.contact.twitter')}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.threads.net/@dorara_hsieh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label={t('app.contact.threads')}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01c0-3.585.853-6.442 2.538-8.501C5.852 1.205 8.605.024 12.186 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.99c0 3.585-.853 6.442-2.538 8.501C18.348 22.795 15.595 23.976 12.186 24zM12.5 2c-2.757 0-4.67.818-5.854 2.501C5.542 6.15 5 8.6 5 11.99c0 3.4.542 5.85 1.646 7.499C7.83 21.182 9.743 22 12.5 22s4.67-.818 5.854-2.501C19.458 17.85 20 15.4 20 12.01c0-3.4-.542-5.85-1.646-7.499C17.17 2.818 15.257 2 12.5 2z" />
                </svg>
                {t('app.contact.threads')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-16 px-4">
        <FAQ />
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-4 bg-muted/30">
        <ContactForm />
      </div>

      <footer className="container mx-auto py-8 px-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">{t('app.copyright')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/privacy">{t('privacy.title')}</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/t42ji2ji/vibe-coding-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
