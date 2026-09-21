import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type FormData = {
  name: string;
  email: string;
  message: string;
  /**
   * Honeypot, checked server-side in api/contact.js. Deliberately NOT named
   * like anything a password manager fills ("website", "url", "company"…):
   * an autofilled trap would silently drop a real customer's enquiry.
   */
  hp_x7: string;
};

type Strings = (typeof translations.contactForm)["en"];

const buildSchema = (t: Strings) =>
  z.object({
    name: z.string().trim().min(2, { message: t.validationName }),
    email: z.string().trim().email({ message: t.validationEmail }),
    message: z.string().trim().min(10, { message: t.validationMessage }),
    // never blocks submission; the server decides what a filled trap means
    hp_x7: z.string().optional().default(""),
  });

const FIELD_CLASS =
  "bg-background border-muted-foreground/70 focus:border-primary transition-colors";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { lang } = useLanguage();
  const t = translations.contactForm[lang];

  // The resolver reads the current language through a ref, so switching
  // language keeps what the visitor typed (the form used to be remounted).
  const tRef = useRef(t);
  tRef.current = t;
  const resolver: Resolver<FormData> = (values, ctx, opts) =>
    zodResolver(buildSchema(tRef.current))(values, ctx, opts) as ReturnType<Resolver<FormData>>;

  const form = useForm<FormData>({
    resolver,
    defaultValues: { name: "", email: "", message: "", hp_x7: "" },
  });

  // Re-translate any validation messages already on screen.
  useEffect(() => {
    if (Object.keys(form.formState.errors).length) void form.trigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const fail = (description: string) =>
    toast({ title: t.errorTitle, description, variant: "destructive" });

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang }),
      });

      if (response.ok) {
        toast({ title: t.successTitle, description: t.successDesc });
        form.reset();
        return;
      }
      // Never show raw server/platform errors (they are English, and the
      // platform's own error pages are not JSON at all).
      if (response.status === 429) fail(t.errorTooMany);
      else if (response.status === 400) fail(t.errorInvalid);
      else fail(t.errorDesc);
    } catch {
      fail(t.errorDesc);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-mono tracking-wider uppercase text-muted-foreground">
                {t.nameLabel}
              </FormLabel>
              <FormControl>
                <Input placeholder={t.namePlaceholder} autoComplete="name" {...field} className={FIELD_CLASS} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-mono tracking-wider uppercase text-muted-foreground">
                {t.emailLabel}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  {...field}
                  className={FIELD_CLASS}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-mono tracking-wider uppercase text-muted-foreground">
                {t.messageLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  className={`min-h-[120px] resize-none ${FIELD_CLASS}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot: off-screen, unlabelled, skipped by keyboard and screen readers */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <input type="text" tabIndex={-1} autoComplete="off" {...form.register("hp_x7")} />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? t.submitting : t.submit}
        </Button>

        <p className="text-xs text-muted-foreground">
          {t.privacyNote}{" "}
          <Link to="/datenschutz" className="text-primary underline-offset-4 hover:underline">
            {t.privacyLink}
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
