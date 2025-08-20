import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

// ==================== CONSTANTS ====================
const EMAILJS_SERVICE_ID = "service_i3h66xg";
const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";

// ==================== SCHEMA ====================
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
  timestamp: z.number()
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
      name: '',
      email: '',
      message: '',
      honeypot: '',
      timestamp: formStartTime
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Bot detection
      if (data.honeypot) {
        toast({
          title: "Error",
          description: "There was a problem with your submission. Please try again.",
          variant: "destructive"
        });
        return;
      }

      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        toast({
          title: "Error",
          description: "Please take a moment to review your message before submitting.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const { honeypot, timestamp, ...emailData } = data;
      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        message: emailData.message,
        to_name: 'WRLDS Team',
        reply_to: emailData.email
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default"
      });

      form.reset({
        name: '',
        email: '',
        message: '',
        honeypot: '',
        timestamp: Date.now()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
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
        <FormLabel className="text-[#113C6A]">Name</FormLabel>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Input
              placeholder="Your name"
              className="pl-10 border-[#185EAA]/30 focus:border-[#185EAA] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
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
        <FormLabel className="text-[#113C6A]">Email</FormLabel>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Input
              type="email"
              placeholder="your.email@example.com"
              className="pl-10 border-[#185EAA]/30 focus:border-[#185EAA] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
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
        <FormLabel className="text-[#113C6A]">Message</FormLabel>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Textarea
              placeholder="Tell us about your logistics requirements..."
              className="min-h-[150px] pl-10 resize-none border-[#185EAA]/30 focus:border-[#185EAA] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
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
    className="w-full bg-[#113C6A] hover:bg-[#185EAA] text-[#FFFDF7] py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 shadow-md hover:shadow-lg"
  >
    {isSubmitting ? (
      "Sending..."
    ) : (
      <>
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </>
    )}
  </button>
);

// ==================== CONTACT FORM SECTION ====================
const ContactFormSection = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <div className="bg-[#F8FFFF] rounded-xl shadow-xl p-8 border border-[#185EAA]/20 text-[#113C6A]">
      <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Send Us a Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <NameField control={form.control} />
          <EmailField control={form.control} />
          <MessageField control={form.control} />
          <HiddenFields control={form.control} />
          <div className="mt-1">
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </div>
  );
};
// Arihant Complex, 206, Atithi Rd, near Vishal Mega Mart, Vapi, Gujarat 396195
// ==================== CONTACT INFO SECTION ====================
const ContactInfoSection = () => {
  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, title: "Call Us", content: "+91 98765 43210", subtext: "Mon-Sat, 9AM-6PM" },
    { icon: <Mail className="h-5 w-5" />, title: "Email Us", content: "hello@wrlds.com", subtext: "24/7 Support" },
    { icon: <MapPin className="h-5 w-5" />, title: "Visit Us", content: "Vapi, Gujarat", subtext: "Arihant Complex, 206, Atithi Rd, Nr. Vishal Mega Mart" },
    { icon: <Clock className="h-5 w-5" />, title: "Response Time", content: "Within 2 Hours", subtext: "Quick Query Resolution" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="bg-[#F8FFFF] p-5 rounded-lg border border-[#185EAA]/20 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#FF7729] rounded-full flex items-center justify-center text-[#FFFDF7]">
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[#113C6A] mb-1">{info.title}</h4>
                <p className="text-[#185EAA] font-medium">{info.content}</p>
                <p className="text-sm text-[#113C6A]/60">{info.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const ContactForm = () => {
  return (
    <PageLayout>
      <section id="contact" className="bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] relative py-[60px] mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-[#F8FFFF] text-[#113C6A] rounded-full text-sm font-medium">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]">Contact Us Today</h2>
            <p className="text-[#0a213a]/90 max-w-2xl mx-auto">
              Have questions about our logistics services? Let's connect and make delivery seamless for you!
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <ContactFormSection />
            <ContactInfoSection />
          </div>

          {/* Map Below Full Width */}
          <div className="rounded-lg overflow-hidden border border-[#185EAA]/20 shadow-md mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3431472084335!2d72.9245998!3d20.368736799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2068f2de87%3A0x3ab36ccb6f06eb87!2sBansal%20Logistics%20of%20India!5e0!3m2!1sen!2sin!4v1755170562386!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default ContactForm;