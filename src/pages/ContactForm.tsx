import { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

// ==================== EMAILJS CONFIGURATION ====================
const EMAILJS_SERVICE_ID = "service_fmc9z7b";
const EMAILJS_TEMPLATE_ID = "template_jka9v1a";
const EMAILJS_PUBLIC_KEY = "JpElQajspgFk5S0-l";

// ==================== SCHEMA ====================
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
  timestamp: z.number(),
});

type FormValues = z.infer<typeof formSchema>;

// ==================== CUSTOM HOOK ====================
function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      honeypot: "",
      timestamp: formStartTime,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      if (data.honeypot) {
        toast({
          title: "Error",
          description:
            "There was a problem with your submission. Please try again.",
          variant: "destructive",
        });
        return;
      }

      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        toast({
          title: "Error",
          description:
            "Please take a moment to review your message before submitting.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const currentDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      });

      const { honeypot, timestamp, ...emailData } = data;

      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        from_phone: emailData.phone || "Not provided",
        subject: emailData.subject,
        message: emailData.message,
        to_name: "BLI Team",
        to_email: "amitmishra7427@gmail.com",
        reply_to: emailData.email,
        date: currentDate,
        company_name: "BLI - Bansal Logistics of India",
        website: "blirapid.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "✅ Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 2 hours.",
        variant: "default",
      });

      form.reset({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        honeypot: "",
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "❌ Error",
        description:
          "There was a problem sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, onSubmit, isSubmitting };
}

// ==================== FIELD COMPONENTS ====================
const NameField = ({ control }: any) => (
  <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#1a1a1a] text-sm font-semibold">
          Full Name *
        </FormLabel>
        <FormControl>
          <Input
            placeholder="Enter your full name"
            className="border-gray-200 focus:border-[#113C6A] bg-white h-11 rounded-none text-sm"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const EmailField = ({ control }: any) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#1a1a1a] text-sm font-semibold">
          Email Address *
        </FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="your.email@example.com"
            className="border-gray-200 focus:border-[#113C6A] bg-white h-11 rounded-none text-sm"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const PhoneField = ({ control }: any) => (
  <FormField
    control={control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#1a1a1a] text-sm font-semibold">
          Phone Number
        </FormLabel>
        <FormControl>
          <Input
            type="tel"
            placeholder="+91 98765 43210"
            className="border-gray-200 focus:border-[#113C6A] bg-white h-11 rounded-none text-sm"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const SubjectField = ({ control }: any) => (
  <FormField
    control={control}
    name="subject"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#1a1a1a] text-sm font-semibold">
          Subject *
        </FormLabel>
        <FormControl>
          <Input
            placeholder="What is this regarding?"
            className="border-gray-200 focus:border-[#113C6A] bg-white h-11 rounded-none text-sm"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const MessageField = ({ control }: any) => (
  <FormField
    control={control}
    name="message"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#1a1a1a] text-sm font-semibold">
          Message *
        </FormLabel>
        <FormControl>
          <Textarea
            placeholder="Tell us about your logistics requirements..."
            className="min-h-[140px] resize-none border-gray-200 focus:border-[#113C6A] bg-white rounded-none text-sm"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const HiddenFields = ({ control }: any) => (
  <>
    <FormField
      control={control}
      name="honeypot"
      render={({ field }) => (
        <FormItem className="hidden">
          <FormControl>
            <Input {...field} tabIndex={-1} />
          </FormControl>
        </FormItem>
      )}
    />
    <FormField
      control={control}
      name="timestamp"
      render={({ field }) => (
        <FormItem className="hidden">
          <FormControl>
            <Input type="hidden" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  </>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="group inline-flex items-center justify-center gap-2.5 border border-[#1a1a1a] px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
  >
    {isSubmitting ? (
      <div className="flex items-center gap-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
        <span className="font-medium text-sm">Sending...</span>
      </div>
    ) : (
      <>
        <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
          Send Message
        </span>
        <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
      </>
    )}
  </button>
);

// ==================== CONTACT INFO ====================
const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+91-968 744 8434",
    subtext: "Mon-Sat, 9AM-6PM",
    href: "tel:+919687448434",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@blirapid.com",
    subtext: "24/7 Support",
    href: "mailto:info@blirapid.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Vapi, Gujarat - 396191",
    subtext: "206, Arihant Complex, Nr. Vishal Mega Mart",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 2 Hours",
    subtext: "Quick Query Resolution",
    href: null,
  },
];

// ==================== MAIN COMPONENT ====================
const ContactForm = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <PageLayout>
      <Helmet>
        <title>Contact | BLI - Bansal Logistics of India</title>
        <meta
          name="description"
          content="Get in touch with BLI for all your logistics needs. Contact us via phone, email, or visit our office in Vapi, Gujarat."
        />
        <link rel="canonical" href="https://blirapid.com/contact/" />
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services3.webp"
            alt="Contact BLI"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    Contact
                  </span>
                </li>
              </ol>
            </nav>

            <h1
              className="font-bold text-white uppercase tracking-normal mb-3"
              style={{ fontSize: "52px", lineHeight: "60px" }}
            >
              <span className="block">Get In Touch</span>
              <span className="block">With Us</span>
            </h1>
            <p
              className="font-light max-w-xl mt-5 text-white/90"
              style={{ fontSize: "20px", lineHeight: "29px" }}
            >
              Have questions about our logistics services? We're here to help
              you move smarter.
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTACT INFO STRIP ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200 -mx-5 sm:-mx-8 lg:-mx-12">
            {contactInfo.map((info, i) => {
              const Inner = (
                <div className="bg-white px-5 sm:px-8 py-6 sm:py-8 group hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#113C6A] flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-400 font-medium mb-0.5">
                        {info.title}
                      </p>
                      <p className="text-[#1a1a1a] font-bold text-sm sm:text-base">
                        {info.content}
                      </p>
                      <p className="text-gray-400 text-[12px] mt-0.5">
                        {info.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={i} href={info.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={i}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FORM + INFO SECTION ── */}
      <section ref={sectionRef} className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Send A Message
              </p>
              <h2
                className="font-bold uppercase tracking-normal mb-4"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">Let's Talk</span>
                <span className="block">Logistics</span>
              </h2>
              <p
                className="font-light mb-10"
                style={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Fill the form and our team will get back to you within 2 hours.
              </p>

              <div className="bg-white border border-gray-200 p-6 sm:p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <NameField control={form.control} />
                      <EmailField control={form.control} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <PhoneField control={form.control} />
                      <SubjectField control={form.control} />
                    </div>
                    <MessageField control={form.control} />
                    <HiddenFields control={form.control} />
                    <div className="mt-2">
                      <SubmitButton isSubmitting={isSubmitting} />
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>

            {/* Right — Stats + Quick Info */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Why BLI
              </p>
              <h3
                className="font-bold uppercase tracking-normal mb-8"
                style={{
                  fontSize: "32px",
                  lineHeight: "38px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                Numbers That Speak
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-gray-200 mb-10">
                {[
                  { value: "25+", label: "Years on Road" },
                  { value: "500+", label: "Fleet Vehicles" },
                  { value: "25+", label: "Cities Covered" },
                  { value: "98%", label: "On-Time Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 sm:p-6">
                    <div
                      className="font-bold leading-none mb-1"
                      style={{
                        fontSize: "36px",
                        lineHeight: "42px",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick connect */}
              <div className="bg-[#113C6A] p-6 sm:p-8">
                <h4 className="text-white font-bold text-lg mb-4">
                  Prefer a direct call?
                </h4>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                  Our logistics experts are available Monday to Saturday, 9AM to
                  6PM to discuss your requirements.
                </p>
                <a
                  href="tel:+919687448434"
                  className="group inline-flex items-center gap-2.5 border border-white/40 px-6 py-2.5 hover:bg-white hover:text-[#113C6A] text-white transition-all duration-300"
                >
                  <span className="font-medium text-sm">
                    Call +91-968 744 8434
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section id="map" className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="text-center mb-10">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "rgb(28, 24, 37)",
              }}
            >
              Our Location
            </p>
            <h2
              className="font-bold uppercase tracking-normal mb-3"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Find Us Here
            </h2>
          </div>

          <div className="border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3431472084335!2d72.9245998!3d20.368736799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2068f2de87%3A0x3ab36ccb6f06eb87!2sBansal%20Logistics%20of%20India!5e0!3m2!1sen!2sin!4v1755170562386!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BLI Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactForm;
