import { useState } from "react";
import { useForm } from "react-hook-form";
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
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { lang } = useLanguage();
  const t = translations.contactForm[lang];

  const formSchema = z.object({
    name: z.string().min(2, { message: t.validationName }),
    email: z.string().email({ message: t.validationEmail }),
    message: z.string().min(10, { message: t.validationMessage }),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: t.successTitle,
          description: t.successDesc,
        });
        form.reset();
      } else {
        throw new Error(data.error || t.errorDesc);
      }
    } catch (error) {
      toast({
        title: t.errorTitle,
        description: error instanceof Error ? error.message : t.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-mono tracking-wider uppercase text-muted-foreground">
                {t.nameLabel}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t.namePlaceholder}
                  {...field}
                  className="bg-background border-border focus:border-primary transition-colors"
                />
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
                  placeholder={t.emailPlaceholder}
                  {...field}
                  className="bg-background border-border focus:border-primary transition-colors"
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
                  className="min-h-[120px] bg-background border-border focus:border-primary transition-colors resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? t.submitting : t.submit}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
